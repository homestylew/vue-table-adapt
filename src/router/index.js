import Vue from "vue";
import VueRouter from "vue-router";
import Test from '../components/Test'
import Adapt from '../components/Adapt'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'adapt',
    title: '自适应',
    component: Adapt,
  },
  {
    path: '/test',
    name: '/test',
    title: '测试移除监听',
    component: Test,
  },
];

const router = new VueRouter({
  routes
});

export default router;
