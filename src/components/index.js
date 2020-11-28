import adaptive from "./adaptive";
const install = function (Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.directive("adaptive", adaptive);
};
export default {
  install
};
