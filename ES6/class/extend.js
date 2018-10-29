class A {
    constructor() {
        this.hh = 'LOL'
    }
    p() {
        return 2;
    }
}

class B {}

// B.prototype.__proto__ = A.prototype;
B.prototype.__proto__ = new A();
B.__proto__ = A;

const b = new B()
console.log(b.hh);
console.log(b instanceof A);