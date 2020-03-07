# 按钮鉴权
<p align="center">
  <a href="https://cn.vuejs.org/v2/guide/custom-directive.html">
    <img width="100%" src="https://s2.ax1x.com/2020/03/07/3jbobn.jpg">
  </a>
</p>

> 在实际项目开发中，会有多种角色，每个角色的按钮权限都不相同，我们在开发中应该做好这一块的权限处理

## 登陆获取按钮权限的数组
1. 首先用户登录时，我们可以用过API接口获取所有菜单和按钮的权限,我们可以把所有按钮信息，保存在sessionStorage中。 
```js
const AuthorityData = {
    menus : ['home', 'dashboard'],
    buttons: ['share', 'edit'],
}
// 将按钮权限信息保存起来，防止刷新页面时丢失
sessionStorage.setItem( "permission_button", JSON.stringify(AuthorityData.buttons));

```

## v-if的简单实现
2. 拿vue项目举个栗子，我们可以通过v-if来实现权限的控制，还是比较简单有效的

```html
<el-button v-if="permission_button.includes('edit')" type="text">修改</el-button>

<script>
  export default {
      data() {
          return  {
              permission_button: JSON.parse(sessionStorage.getItem("permission_button"))
            }
      }
  }
</script>
```

## 全局的自定义指令
3.上面就实现了一个简单的前端按钮权限控制，但是有一丢丢不优雅，每次都要多定义一个变量。怎么解决呢？
我们可以定义一个全局的自定义指令，这样代码就大大的减少了，偷懒才是最舒服的。还是拿vue举例毕竟我只会这个。
```js
import Vue from 'vue';
Vue.directive('btnlimit', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: (el, binding) => {
        // el 当前绑定的元素 binding.value指令的绑定值
        let permissionList = sessionStorage.getItem('permission_button');
        // 判断一下是否包含这个元素，如果不包含的话，那就让他爸爸元素把子元素扔进垃圾堆
        if (!permissionList.includes(binding.value)) {
            el.parentNode.removeChild(el)
        }
    }
})
// 大家可以把自己定义的指令写在一个directive.js文件中，在main.js总入口引入下就可以了，简单而不失优雅
```

**我们不妨复习下其他几个钩子函数（都是复制vue官方文档，我也不懂啥意思，哈哈）**
> 一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

>bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

>inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

>update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。


## vue组件的使用自定义指令
4. 好了，定义过了全局自定义指令了，我们就可以在所有的vue组件中肆无忌惮的运用它了，不需要单独引用了，是不是又省去了CTRL+C CTRL+V的时间？只可惜双引号套着单引号有点不爽，可惜我也不会优化了。
```html
<el-button v-btnlimit="'edit'" type="text">修改</el-button>
```

