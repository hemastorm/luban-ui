// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import { Input, Tree } from 'element-ui'
import util from './util/util'
import log from './util/logger'
import cookie from './util/cookie'
import axios from "axios"
import qs from "qs"
import './basic/common'
import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css';

//单独引用element-ui相关组件
Vue.use(Input)
Vue.use(Tree)
//引用路由
Vue.use(router);
//引用iview的ui组件
Vue.use(iView);
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
//引入工具，配置代理
Vue.prototype.$utilHelper = util
//引入log工具
Vue.prototype.$logHelper = log
//引入cookie工具
Vue.prototype.$cookieHelper = cookie
//项目上线后不再提示警告
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),
  methods: {
    //全局提示错误信息
    showErrorMessage(message) {
      this.$Message.error(message)
    }
  },
  created() {
    //全局配置log是否打印,默认为false
    this.$logHelper.openLog = true
    this.$logHelper.filter = "main"
    //全局配置Message 参数分别为距离上部高度、延时关闭秒数
    this.$Message.config({ top: 50, duration: 2 })
    //全局配置Notice 参数分别为距离上部高度、延时关闭秒数
    this.$Notice.config({ top: 100, duration: 2 })
    //全局配置Loading 参数分别为进度条颜色、失败颜色、高度
    this.$Loading.config({ color: '#5cb85c', failedColor: '#f0ad4e', height: 3 })
  },
})