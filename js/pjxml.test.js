import {expect, test} from "bun:test";
const fs = require('fs');
const pjxml = require('./pjxml.js');

test("parse()", () => {
	const xml = fs.readFileSync('test.xml', 'utf-8');
	const doc = pjxml.parse(xml);
	expect(doc).toMatchSnapshot();
	expect(doc.xml()).toMatchSnapshot();
	expect(doc.clone().xml()).toBe(doc.xml());
	const a = doc.select('//a');
	const pa = doc.pathTo(a);
	expect(pa).toMatchSnapshot();
});
