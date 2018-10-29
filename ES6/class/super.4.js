class A {}

class B extends A {
    constructor() {
        super();
        console.log(super.valueOf() instanceof A); // true
    }
}

let b = new B();

var obj = {
    toString() {
        return "MyObject: " + super.toString();
    }
};

console.log(obj.toString()); 