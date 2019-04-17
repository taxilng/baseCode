
<p align="center">
  <a href="https://ng-alain.com">
    <img width="100" src="https://ng-alain.com/assets/img/logo-color.svg">
  </a>
</p>

<h1 align="center">
CTP-frontend
</h1>

<div align="center">
针对新药上市前的临床试验，为制药厂，CRO 和 Site 提供一个平台，让各方能在平台上方便快捷地进行预算，合同的制定和谈判，更准确快速的进行结算。提高临床试验的质量，缩短新药上市的时间，为各方争取最大的经济效益。

  [![angular version](https://img.shields.io/npm/v/ng-alain.svg?style=flat-square)](https://www.npmjs.com/package/ng-alain)
  [![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
  [![ng-zorro-vscode](https://img.shields.io/badge/ng--zorro-VSCODE-brightgreen.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode)
  [![ng-alain-vscode](https://img.shields.io/badge/ng--alain-VSCODE-brightgreen.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)

</div>


## 启动

```bash
# 确保使用的是最新版本 node
# yarn
# yarn start
```
##目录结构
```
├── _mock // mock数据，暂未用到
├── e2e // 测试用例，暂未用到 
├── scripts // 打包插件的css 生成  src/assets/alain-default.less
├── screenshots // 项目截图 
├── src // 源码目录 
│ ├── app // 组件 
│ │ ├── components // 组件 
│ │ │ ├── analysis // 分析页面，未用到 
│ │ │ ├── createBudgetTemplate // Create New Budget/创建新预算页面 
│ │ │ ├── dashboard //  图标页面，未用到
│ │ │ ├── exception // 404，500页面
│ │ │ ├── invite_user // 邀请用户
│ │ │ ├── mybudget // 预算列表
│ │ │ ├── mySiteProfile // Site Details页面
│ │ │ ├── new-budget // edit budget页面
│ │ │ ├── passport // 登录，注册，忘记密码
│ │ │ ├── procedureSearch // procedure查询弹窗
│ │ │ ├── sitePersonnelDetail 
│ │ │ ├── siteRateCard
│ │ │ └── util // 封装的组件没用到
│ │ │
│ │ ├── core // 一些启动项和service 
│ │ │ ├── auth // 登录
│ │ │ ├── guard // 拦截
│ │ │ ├── net // ajax拦截
│ │ │ └── startup // 菜单配置
│ │ │
│ │ ├── layout // 导航栏和左侧栏 
│ │ ├── routes // 路由设置 
│ │ ├── services // services封装 
│ │ ├── app.component.html // 根页面
│ │ ├── app.component.ts 
│ │ ├── app.module.ts // 总入口
│ │ └── delon.module.ts // delon插件的注入
│ │
│ ├── assets // 静态文件
│ │ ├── images // 图片 
│ │ ├── tmp // 菜单信息 
│ │ └── alain-default.less // 编译完的less
│ │
│ ├── environments // 开发生产环境配置
│ ├── styles // 全局样式
│ ├── browserslist // 需要兼容的游览器版本 for Autoprefixer,Babel
│ └── favicon.ico // 游览器标签logo
├── angular.json // webpack打包配置 
├── ngsw-config.json // 缓存文件数据资源
├── package.json // 插件包
├── package.json // 插件包
├── tsconfig.json // TS编译规则
├── tslint.json // TS语法限制规则

```