// new Promise(function(resolve) {
//     console.log('7.我是Promise的console');
//     resolve();
// }).then(function() {
//     console.log('8.我是Promise.then的console')
// })
// process.nextTick(function() {
//     console.log('6.我是nextTick的console');
// })
console.log(typeof global);
// console.log(global['process']);
console.log(global['process'] && global['process'].env.VUE_ENV === 'server');
