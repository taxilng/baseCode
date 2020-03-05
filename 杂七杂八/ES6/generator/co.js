var co = require('co');
var fs = require('fs');

var readFile = function (fileName){
    return new Promise(function (resolve, reject){
      fs.readFile(fileName, function(error, data){
        if (error) return reject(error);
        resolve(data);
      });
    });
  };
var gen = function* () {
    var f1 = yield readFile('./ES6/generator/1.txt');
    var f2 = yield readFile('./ES6/generator/2.txt');
    var f3 = yield readFile('./ES6/generator/3.txt');
    var f4 = yield readFile('./ES6/generator/4.txt');
    console.log(f1.toString());
    console.log(f2.toString());
    console.log(f3.toString());
    console.log(f4.toString());
};
// co(gen);
// co(gen).then(function () {
//     console.log('Generator 函数执行完成');
// });

// var g = gen();

// g.next().value.then(function(data){
//   g.next(data).value.then(function(data){
//     g.next(data);
//   });
// });

// function run(gen){
//   var g = gen();

//   function next(data){
//     var result = g.next(data);
//     if (result.done) return result.value;
//     result.value.then(function(data){
//       next(data);
//     });
//   }

//   next();
// }

// run(gen);

let str = '2018-01-01';
let newStr = str.replace(/-0/g,'-')
console.log(newStr);


let str1 = '2018-1-1';
let newStr1 = str1.replace(/-\d{1}/,"$1")
console.log(newStr1);
var a = 1;