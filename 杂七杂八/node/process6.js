function foo(resolve) {
    console.log(1);
    
};
new Promise((resolve, reject) => {
    foo = resolve
}).then(res => {
    console.log(res);
}).catch(err => console.log(err))

setTimeout(() => {
    foo()
}, 100);