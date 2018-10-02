import axios from "axios"
import cookie from './cookie'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = global.BASE_URL; //这是调用数据接口

// http request 拦截器，通过这个，我们就可以把Cookie传到后台
axios.interceptors.request.use(
  function (config) {
    const token = cookie.getCookie(global.JWT_COOKIE_NAME); //获取Cookie
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/x-www-form-urlencoded" //设置跨域头部
    };
    if (token) {
      // config.params = { token: token }; //后台接收的参数，后面我们将说明后台如何接收
      config.headers.Authorization = token;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response
  .use(
    response => {
      //response.data.errCode是我接口返回的值，如果值为2，说明Cookie丢失，然后跳转到登录页，这里根据大家自己的情况来设定
      if (response.status === 403) {
        router.push({
          path: '/login',
          query: { redirect: router.currentRoute.fullPath } //从哪个页面跳转
        })
      }
      return response;
    },
    error => {
      return Promise.reject(error)
    }
  );

export default axios;