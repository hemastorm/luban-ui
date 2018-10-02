<style lang="less">
@import "./login.less";
</style>
<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">注册</p>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import LoginForm from "./login-form";
export default {
  data() {
    return {};
  },
  components: {
    LoginForm
  },
  methods: {
    handleSubmit: function(loginInfo) {
      let that = this;
      this.$axios
        .post("/api/login/login", {
          code: loginInfo.userName,
          pwd: loginInfo.password
        })
        .then(function(response) {
          that.$cookieHelper.setCookie(
            global.JWT_COOKIE_NAME,
            "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNTM2NjcyNDEyLCJpc3MiOiJzdG9ybSIsImV4cCI6MTUzNjY3NDIxMn0.psOq7MgDVZCTZVcxd8cvZJNVq_X8Y4nBzVilgV4vjM0",
            global.JWT_COOKIE_EXMIN
          );
          //跳转到主页
          that.$router.push({ path: "/index" });
        })
        .catch(function(error) {});
    }
  }
};
</script>
