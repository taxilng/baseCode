class A {
    constructor() {
        this.hh = 'LOL'
    }
    p() {
        return 2;
    }
}

class B extends A{
    constructor() {
        super();
    }
}


const b = new B()
console.log(b.hh);
console.log(b.p());

let arr = ['a','b']
for(let val  of arr){
    console.log(val);
}