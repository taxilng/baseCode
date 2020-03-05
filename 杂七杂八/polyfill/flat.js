if (!Array.prototype.flat) {
  Array.prototype.flat = function(num = 1) {
    if (!Number(num) || Number(num) < 0) {
      return this
    }
    var arr = []
    this.forEach(item => {
      if (Array.isArray(item)) {
        arr = arr.concat(item.flat(--num))
      } else {
        arr.push(item)
      }
    })
    return arr
  }
}

// if (!Array.prototype.flat) {
//     Array.prototype.flat = function (num) {
//         console.log(num);
//         return this.toString().split(',').map(item => +item || item)
//     }
// }

// test
const arr = [1, [2, [3, 'a', [4]]]]

// console.log(arr.flat('dsdsadf')) // [1, [2, [3, 'a', [4]]]]
// console.log(arr.flat(-32)) // [1, [2, [3, 'a', [4]]]]
// console.log(arr.flat(0)) // [1, [2, [3, 'a', [4]]]]
// console.log(arr.flat('1')) // [1, 2, [3, 'a', [4]]]
// console.log(arr.flat('2')) // [1, 2, 3, 'a', [4]]
// console.log(arr.flat(3)) // [1, 2, 3, 'a', 4]
// console.log(arr.flat(Infinity)) // [1, 2, 3, 'a', 4]
// console.log(arr.flat('Infinity')) // [1, 2, 3, 'a', 4]

function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
console.log(flatten(arr))
