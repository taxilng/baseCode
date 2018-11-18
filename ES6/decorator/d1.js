'use strict'
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyTestableClass = function MyTestableClass() {
  _classCallCheck(this, MyTestableClass);
};

function testable(target) {
  target.isTestable = true;
}

 console.log(MyTestableClass.isTestable);



