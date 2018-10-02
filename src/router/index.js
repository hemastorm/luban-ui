import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'
Vue.use(Router)

const router = new Router({
  routes: routers
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    //TODO:修改成从cookie中获取token
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})

export default router;