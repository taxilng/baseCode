'use strict'
var str = 'My Name is ${name}, i like ${hobby}'
var obj = {
    name: 'Tom',
    hobby: 'Coding'
}
const strES6 = `My Name is ${obj.name}, i like ${obj.hobby}`
// console.log(strES6);

function replaceReg(str, obj) {
    for (var key in obj) {
        var re = new RegExp('\\${' + key + '}', 'g')
        str = str.replace(re, obj[key])
    }
    return str
}

function templateFunction(str, obj) {
    let newStr = str.replace(/\${(\w+)}/g, (match, key) => obj[key])
    return newStr
}

console.log(replaceReg(str, obj));
console.log(templateFunction(str, obj));