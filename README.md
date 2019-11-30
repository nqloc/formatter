> Tool for formating data (Json, Xml, CSS, SQL, ...)
>
> [Demo](https://nqloc.github.io/tools/formatter/)

---

1. [Json parser](#json-parser)
2. [Xml parser](#xml-parser)
3. [Css parser](#css-parser)
4. [Sql parser](#sql-parser)

## Json parser
### Input
```
{"name":"John", "age":31, "city":"New York"}
```
### Output
```
{
    "name": "John",
    "age": 31,
    "city": "New York"
}
```

## Xml parser
### Input
```
<?xml version="1.0" encoding="UTF-8"?><note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me this weekend!</body></note>
```
### Output
```
<?xml version="1.0" encoding="UTF-8"?>
<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>
```

## CSS parser
### Input
```
h1 {background-color: green;}div {background-color: lightblue;}p {background-color: yellow;}
```
### Output
```
h1 {
     background-color: green;
}
 div {
     background-color: lightblue;
}
 p {
     background-color: yellow;
}
```

# SQL parser
## Input
```
SELECT Count(*) AS DistinctCountries FROM(SELECT DISTINCT Country FROM Customers);
```
## Output
```
SELECT Count(*) AS DistinctCountries
FROM 
    (SELECT DISTINCT Country
    FROM Customers);
```

# Like my stuff?

Would you like to buy me a coffee or send me a tip?
While it's not expected, I would really appreciate it.

[![Paypal](https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png)](https://paypal.me) <a href="https://www.buymeacoffee.com/QGs0BZ3" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/white_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
