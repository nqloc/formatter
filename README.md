> Web tool for formating data [Demo](https://nqloc.github.io)

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

## SQL parser
### Input
```
SELECT Count(*) AS DistinctCountries FROM(SELECT DISTINCT Country FROM Customers);
```
### Output
```
SELECT Count(*) AS DistinctCountries
FROM 
    (SELECT DISTINCT Country
    FROM Customers);
```
