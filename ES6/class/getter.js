'use strict'
class MyClass {
    constructor() {
        // ...
    }
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter: ' + value);
    }
}

let inst = new MyClass();

inst.prop = '123s';
// setter: 123

inst.prop