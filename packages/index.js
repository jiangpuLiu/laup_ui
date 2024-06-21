import ElementUi from  'element-ui';
import DraggableDialog from './DraggableDialog.vue';
import nnLoading from './directive/nnLoading.js';
import 'element-ui/lib/theme-chalk/index.css';

const components = [
  DraggableDialog,
];

const install = function (Vue) {
  // 注册组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  // 注册指令
  Vue.directive('nn-loading', nnLoading);

  Vue.use(ElementUi);
};

// 判断是否是直接引入文件，如果是，就不调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;
