if (!Array.prototype.flat) {
    Array.prototype.flat = function (num = 1) {
        if (!Number(num)) {
            return this;
        }
        var arr = []
        this.forEach((item) => {
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

console.log(arr.flat('dsdsadf'));
console.log(arr.flat(-32));
console.log(arr.flat(0));
console.log(arr.flat('1'));
console.log(arr.flat('2'));
console.log(arr.flat(3));
console.log(arr.flat(Infinity));
console.log(arr.flat('Infinity'));