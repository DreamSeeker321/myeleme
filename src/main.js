// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource';
import goods from 'components/goods/goods'
import router from './router/index.js';

import 'common/stylus/index.styl';

Vue.use(VueResource);
Vue.config.productionTip = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});