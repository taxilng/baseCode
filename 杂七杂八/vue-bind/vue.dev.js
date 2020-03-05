'use strict';
function myVue(options) {
    this._init(options);
  }
  myVue.prototype._init = function (options) {
      this.$options = options;  // options 为上面使用时传入的结构体，包括el,data,methods
      this.$el = document.querySelector(options.el); // el是 #app, this.$el是id为app的Element元素
      this.$data = options.data; // this.$data = {number: 0}
      this.$methods = options.methods;  // this.$methods = {increment: function(){}}
    }
  