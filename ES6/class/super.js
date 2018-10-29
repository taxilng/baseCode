class A {
    constructor() {
        this.hh = 'LOL'
    }
    p() {
        return 2;
    }
}

class B extends A {
    constructor() {
        super();
        console.log(super.p())
    }
}

const b = new B()
console.log(b.hh);