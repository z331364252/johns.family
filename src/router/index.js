import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/index';
import todos from '@/page/todos';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: "首页"
      }
    },
    {
      path: '/todos',
      name: 'todos',
      component: todos
    }
  ]
});
