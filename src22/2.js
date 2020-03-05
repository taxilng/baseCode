let groups = [{
    content: [{
        permissions: [{
            val: 1
        }, {
            val: 2
        }]
    }, {
        permissions: [{
            val: 3
        }, {
            val: 4
        }]
    }]
}, {
    content: [{
        permissions: [{
            val: 5
        }, {
            val: 6
        }]
    }, {
        permissions: [{
            val: 7
        }, {
            val: 8
        }]
    }]
}, {
    content: [{
        permissions: [{
            val: 9
        }, {
            val: 10
        }]
    }, {
        permissions: [{
            val: 11
        }, {
            val: 12
        }]
    }]
}]
var arr4 = [1, 2, , 4, 5];
console.log(arr4.flat());
console.log(groups.map(a => a.content));
console.log(groups.map(a => a.content).map(b => b.permissions));


let filterA = groups
    .map(a => a.content)
    .map(b => b.permissions)
    .filter(c => c === 12)


console.log(filterA);