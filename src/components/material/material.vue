<template>
  <div>
    <Row>
      <Col span="4" class="material-tree">
      <my-tree v-model="tableTree" @SaveEdit="saveEdit" @DelNode="delNode" @NodeClick="handleNodeClick"></my-tree>
      </Col>
      <Col span="20">
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
      tableTree: [
        {
          value: 1,
          label: "root",
          status: 0,
          children: [
            {
              value: 2,
              label: "child1",
              status: 0,
              children: []
            },
            {
              value: 3,
              label: "child2",
              status: 0,
              children: []
            }
          ]
        }
      ]
    };
  },
  methods: {
    saveEdit(parentNode, data, next) {
      alert("saveEdit");
    },
    delNode(parentNode, data, canRemove) {
      alert("delete");
    },
    handleNodeClick(nodeData) {
      // alert("nodeclick");
    }
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
