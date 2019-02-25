// bbq:
// for (var i = 0; i < 3; i++) {
//   i === 1 ? (break bbq): ''

//   // if(i === 1) {
//   //   break
//   // }
// }
// console.log(i);

var F = function(){}
Object.prototype.a = function() {
  console.log('a')
}
Function.prototype.b = function() {
  console.log('b')
}

var f = new F()
f.a()
// f.b()
F.a()
F.b()