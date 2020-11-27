// src/components/index.js
import toast from './Toast/index';

// 准备好 install 方法 给 Vue.use() 使用
const install = function (Vue) {
  if (install.installed) return;
  install.installed = true;

  // 将包装好的 toast 挂到Vue的原型上，作为 Vue 实例上的方法
  Vue.prototype.$toast = toast;
}

// 默认导出 install
export default {
  install,
};