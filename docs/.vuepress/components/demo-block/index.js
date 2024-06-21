import DemoBlock from './src/demo-block'

DemoBlock.install = function (Vue) {
  Vue.component(DemoBlock.name, DemoBlock)
}

export default DemoBlock
