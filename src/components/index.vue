<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-style: solid;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-left: 20px;
  float: left;
}
.layout-content {
  margin: 5px 10px 0;
  width: 100%;
  min-height: 500px;
}
.layout-footer-center {
  text-align: center;
  height: 20px;
  line-height: 10px;
}
</style>
<template>
  <div class="layout">
    <Layout style="height:100%">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="index">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="order" @click.native="turnToPage('order')">
            <Icon type="md-list-box" /> 订单管理
            </MenuItem>
            <Submenu name="materialFormula">
              <template slot="title">
                <Icon type="ios-hammer" />材料公式
              </template>
              <MenuItem name="style" @click.native="turnToPage('style')">款式管理</MenuItem>
              <MenuItem name="material" @click.native="turnToPage('material')">材料管理</MenuItem>
              <MenuItem name="formula" @click.native="turnToPage('formula')">公式管理</MenuItem>
            </Submenu>
            <MenuItem name="setup">
            <Icon type="ios-settings" /> 系统配置
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content class="layout-content">
        <router-view></router-view>
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    turnToPage(name) {
      this.$router.push({
        name: name
      });
    }
  }
};
</script>
