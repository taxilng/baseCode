const pro = new Promise(function(resolve) {
    console.log('1.我是Promise的console');
    resolve();
    console.log('2.我是Promise的console');
})
pro.then(function() {
    console.log('3.我是Promise.then的console')
})
process.nextTick(function() {
    console.log('4.我是nextTick的console');
})