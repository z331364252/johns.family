// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '../static/less/base.less'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
require('!style-loader!css-loader!less-loader!./assets/less/base.less');
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
