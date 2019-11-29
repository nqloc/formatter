const TYPES = [ 'json', 'xml', 'css', 'sql'];

var current_type = 'json';

var switchParser = (type) => {

    // remove scurrent menu color
    document.getElementById(current_type).style.color = "#007bff";
    
    // need to check exists enum
    if (TYPES.includes(type)) {
        current_type = type;
    }

    // update to new menu color
    document.getElementById(current_type).style.color = "#ff5200";

    window.localStorage.setItem('type', current_type);

    var input = window.localStorage.getItem(current_type);
    if (input) {
        var validate = isValidInputData(current_type, input);
        if (validate === true) {
            document.getElementById("input").value = input;
        } else {
            window.localStorage.removeItem(current_type);
            clearInput();
        }
    } else {
        clearInput();
    }
    clearOutput();
}

// For JSON
var validateJson = (txt) => {
    try {
        JSON.parse(txt);
    } catch (e) {
        return e;
    }
    return true;
}

// For XML
var validateXml = (txt) => {
    const parser = new window.DOMParser();
    const dom = parser.parseFromString(txt, "text/xml");
    if (dom.getElementsByTagName('parsererror').length > 0) {
      return dom.getElementsByTagName('parsererror')[0].getElementsByTagName('div')[0].innerHTML;
    }
    return true;
}

var isValidInputData = (type, txt) => {

    let result;

    switch(type) {
      case "json":
        result = validateJson(txt);
        break;
      case "xml":
        result = validateXml(txt);
        break;
      case "css":
        result = true;
        break;
      case "sql":
        result = true;
        break;
      default:
        result = "Invalid type";
    }
    return result;
}

// Init page
var initPage = () => {

    let type =  window.localStorage.getItem('type');

    if (!type || !TYPES.includes(type)) {
        window.localStorage.setItem('type', current_type);
    } else {
        current_type = type;
    }
    // update menu color
    document.getElementById(current_type).style.color = "#ff5200";

    // Load history data by type
    var input = window.localStorage.getItem(current_type);
    if (input) {
        var validate = isValidInputData(current_type, input);
        if (validate === true) {
            document.getElementById("input").value = input;
        } else {
            window.localStorage.removeItem(current_type);
            console.log(validate);
        }
    }
}

initPage();

// Common
var parseInputData = (type, input) => {
    let result = input;

    switch(type) {
      case "json":
        // result = JSON.stringify(JSON.parse(input), null, 4);
        result = vkbeautify.json(input.trim(), 4);
        break;
      case "xml":
        result = vkbeautify.xml(input.trim());
        break;
      case "css":
        result = vkbeautify.css(input.trim(), '    ');;
        break;
      case "sql":
        result = vkbeautify.sql(input.trim(), '    ');
        break;
      default:
        result = "Invalid type";
    }
    return result;
}

var compressInputData = (type, input) => {
    let result = input;

    switch(type) {
      case "json":
        // result = JSON.stringify(JSON.parse(input), null, '');
        result = vkbeautify.jsonmin(input.trim());
        break;
      case "xml":
        result = vkbeautify.xmlmin(input.trim(), true);
        break;
      case "css":
        result = vkbeautify.cssmin(input.trim());;
        break;
      case "sql":
        result = vkbeautify.sqlmin(input.trim());
        break;
      default:
        result = "Invalid type";
    }
    return result;
}

var parseData = () => {
    var input = document.getElementById("input").value;

    if (!input) {
        document.getElementById("output").value = "Input is empty";
        return;
    }

    var validate = isValidInputData(current_type, input);

    if (validate !== true) {
        document.getElementById("output").value = validate;
        return;
    }

    document.getElementById("output").value = parseInputData(current_type, input);
    window.localStorage.setItem(current_type, input)
}

var compressData = () => {
    var input = document.getElementById("input").value;

    if (!input || input.trim() === "") {
        document.getElementById("output").value = "Input value is empty";
        return;
    }

    var validate = isValidInputData(current_type, input);
    if (validate !== true) {
        document.getElementById("output").value = validate;
        return;
    }

    document.getElementById("output").value = compressInputData(current_type, input);
    window.localStorage.setItem(current_type, input)
}

var copyData = (id) => {
    var copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
}

var clearInput = () => {
    document.getElementById("input").value = "";
}

var clearOutput = () => {
    document.getElementById("output").value = "";
}

var clearAll = () => {
    clearOutput();
    clearInput();
}
