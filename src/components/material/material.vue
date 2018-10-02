<template>
  <div>
    <Row style="height:100%">
      <Col span="6" class="material-tree">
      <Select v-model="productId" style="width:100%;margin-top: 5px" on-chang="productChange()">
        <Option v-for="item in products" :value="item.id" :key="item.id">{{ item.name }}</Option>
      </Select>
      <my-tree v-model="tableTree" @SaveEdit="saveEdit" @DelNode="delNode" @NodeClick="handleNodeClick"></my-tree>
      </Col>
      <Col span="18">
      <router-view></router-view>
      </Col>
    </Row>
  </div>
</template>
<script>
import myTree from "../public/tree/Index";
import materialTable from "./materialTable";
export default {
  data() {
    return {
      // tableTree: [
      //   {
      //     value: 1,
      //     label: "root",
      //     status: 0,
      //     children: [
      //       {
      //         value: 2,
      //         label: "child1",
      //         status: 0,
      //         children: []
      //       },
      //       {
      //         value: 3,
      //         label: "child2",
      //         status: 0,
      //         children: []
      //       }
      //     ]
      //   }
      // ],
      products: [],
      tableTree: [],
      productId: ""
    };
  },
  methods: {
    //获取用户支持的产品，并且设置第一个为默认值
    getProducts() {
      this.$axios.get("/api/getUserProduct").then(
        function(response) {
          if (response.data != null && response.data.length() > 0) {
            products = JSON.parse(response.data);
            productId = products[0].id;
          }
        },
        function(error) {
          console.error(error);
        }
      );
    },
    //获取产品对应的材料列表
    getTrees() {
      this.$axios
        .get("/api/material/queryMaterialGroup/" + this.productId)
        .then(
          function(response) {
            if (response.data != null && response.data.length() > 0) {
              tableTree = JSON.parse(response.data);
            }
          },
          function(error) {
            console.error(error);
          }
        );
    },
    //产品select修改
    productChange() {
      alert(this.productId);
      this.getTrees();
    },
    saveEdit(parentNode, data, next) {},
    delNode(parentNode, data, canRemove) {},
    handleNodeClick(nodeData) {
      this.$router.push({
        name: "materialList",
        query: {
          id: nodeData.value,
          label: nodeData.label
        }
      });
    }
  },
  mounted() {
    //页面初始化后，同步先查询用户所有的支持的产品，并且默认选中第一个
    this.getProducts();
    //然后查询产品下的所有材料分组
    this.getTrees();
  },
  components: {
    myTree
  }
};
</script>
<style>
.material-tree {
  padding: 0px 5px;
  background: #d9d9d9;
  min-height: 500px;
}
</style>
