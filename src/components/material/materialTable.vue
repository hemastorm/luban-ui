<template>
  <div>{{msg}}</div>
</template>
<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    getParams() {
      this.msg = this.$route.query.label;
    }
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    $route: "getParams"
  }
};
</script>
