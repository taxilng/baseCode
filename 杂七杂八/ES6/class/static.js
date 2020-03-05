class Foo {
    static classMethod() {
        return 'hello';
    }
}

const h = Foo.classMethod() // 'hello'
console.log(h);
// var foo = new Foo();
// foo.classMethod()