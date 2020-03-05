/* eslint-disable no-undef */
const path = require('path')
const src1 = path.resolve('/foo', '/bar', 'baz')
console.log(src1);

const src2 = path.resolve('/foo/bar', './baz');
console.log(src2);

const src3 = path.resolve(__dirname,'dist')
console.log(src3);