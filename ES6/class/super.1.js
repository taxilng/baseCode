class A {
    constructor() {
        this.p = 2;
    }
}

class B extends A {
    get m() {
        return super.p;
    }
}

let b = new B(); 
console.log(b.m);// undefined