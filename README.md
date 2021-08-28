# Pure JavaScript XML (pjxml)
This package provides a very lightweight, forgiving XML parser. It's 100%
JavaScript and while it is Node-compliant it has no package dependencies.
## Parsing - Plain JavaScript
Include `pjxml.js` then call the `parse()` method. For a full example, see the `index.html` demo page in the pjxml GitHub repository.  
```
var xml = '<document attribute="value"><name>David Bowie</name></document>';
var doc = pjXML.parse(xml);
```
## Parsing - Node.js
Install the `pjxml` package, then include it using `require`.
```
var pjXML = require('pjxml');

var xml = '<document attribute="value"><name>David Bowie</name></document>';
var doc = pjXML.parse(xml)
```
## the document tree
The `parse()` function returns a hierarchical object tree with each element mapped
to one object. The text and element contents of each element are stored in an array in the
`content` property. Any attributes are in the `attributes` property.
## finding things
The `select()` method supports a very minimal XPath selection syntax. It returns an array of all elements that match the path given. If only one node matches,
it returns a single node instead of an array. The `selectAll()` method
always returns an array.

The `//` operator matches recursively.

For example:
```
var el = doc.selectAll('//name');
```
returns
```
[{"type":1,"content":["David Bowie"],"name":"name","attributes":{}}]
```
## extracting text
The `text()` method returns all text content for a given element and its children:
```
console.log(doc.text());
```
returns
```
David Bowie
```
## extracting XML
The `xml()` method returns valid XML for any given document or element object.
```
console.log(doc.xml());
```
returns
```
<document attribute="value"><name>David Bowie</name></document>
```
