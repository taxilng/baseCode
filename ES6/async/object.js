'use strict'
let arr = [{
    a: 1,
    b: 2
}, {
    a: 3,
    b: 4
},{
    a: 5,
    b: 6
},{
    a: 7,
    b: 8
}]
const colors = ['red','yellow']
let newArr = arr.map((item, index) => ({...item, color: colors[index % colors.length] }))
let newArr1 = [{
    a: 1,
    b: 2,
    color: 'red'
}, {
    a: 3,
    b: 4,
    color: 'yellow'
},{
    a: 5,
    b: 6,
    color: 'red'
},{
    a: 7,
    b: 8,
    color: 'yellow'
}]
console.log(newArr);