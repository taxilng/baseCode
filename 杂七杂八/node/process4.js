const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(1);
        resolve(2)
    }, 1000);
})

promise.then(() => {
    console.log(3);
    return 4
}).then(res => {
    console.log(res)
})

promise.then(res => {
    console.log(res);
})