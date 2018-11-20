if (!Array.prototype.flat) {
    Array.prototype.flat = function() {
        var arr = []
        this.forEach((item) => {
            if(Array.isArray(item)){
                arr = arr.concat(item.flat())
            }else{
                arr.push(item)
            }
        })
        return arr
    }
}

if (!Array.prototype.flat) {
    Array.prototype.flat = function () {
        return this.toString().split(',').map(item => +item || item)
    }
}

// test
const arr = [1, [2, [3, 'a']]]
console.log(arr.flat());