import NnUi from '../../packages/index.js'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/atom-one-light.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import 'element-ui/lib/theme-chalk/base.css';

export default ({
  Vue
}) => {
  Vue.use(ElementUi)
  Vue.use(NnUi)
  Vue.use(VueHighlightJS)
  Vue.use(CollapseTransition)
}
