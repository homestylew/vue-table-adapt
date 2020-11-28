# table-adapt

## vue表格列表高度自适应小插件
## 使用范例
```
//1.从npm上下载包
npm i table-adapt

//2.在入口处(main.js)引入
import adapt from "table-adapt";
Vue.use(adapt);

//3.在代码处使用
<el-table v-adaptive="{ className: ['pagination'], duration: 500, custom: 2 }"/>
```
## 如果你觉得有点用处，请给我点一个star吧
## 欢迎加入前端程序员qq交流群:[WEB前端交流群](https://qm.qq.com/cgi-bin/qm/qr?k=i8Xv8ULhzWIyvzImPla8vUHxpVds5xYh&jump_from=webapi)，你有什么好的建议欢迎加群一起讨论！
## 参数说明
| 参数            | 类型     | 是否必填/默认值                | 说明                   |
| --------------- | -------- | --------------------- | ---------------------- |
| className           | Array   | 否/[]             | 传递需要计算的Dom元素的类名，<font color=red>注意当前绑定的Dom元素到浏览器顶部的高度已经被计算了，不需要再传相关类名称</font>             |
| duration           | Number   | 否/0             | 窗口改变时触发的频率，提升浏览器性能             |
| custom           | Number   | 否/0              | 你想传入的额外的需要计算的高度             |
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
