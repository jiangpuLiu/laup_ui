---
title:  快速上手
---

## 引入NnUi

#### 在main.js中写入以下内容

```javascript
import Vue from 'vue';
import NnUI from 'nn-components';
import 'nn-components/lib/nn-components.css';
import App from './App.vue';

Vue.use(NnUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
