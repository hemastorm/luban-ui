<template>
  <span class="span_item">
    <span @click="Expanded">
      <Input v-if="node.status == 1" style="width: 100px;" v-model="node.label" size="small" autofocus></Input>
      <span v-if="node.status != 1">{{node.label}}</span>
    </span>
    <span v-if="node.status == 1">
      <Button style="margin-left: 2px;" size="small" type="success" icon="md-checkmark" @click.stop="SaveEdit">
      </Button>
      <Button style="margin-left: 2px;" size="small" type="warning" icon="md-close" @click.stop="CancelEdit">
      </Button>
    </span>
    <span class="span_icon">
      <Icon v-if="node.status == 0" style="margin-left: 2px" color="#24ff00" type="ios-create" size="18" @click.stop="OpenEdit"></Icon>
      <Icon v-if="node.status == 0" style="margin-left: 2px" type="md-add-circle" color="#3c78d8" size="18" @click.stop="Append"></Icon>
      <Icon v-if="node.status == 0&& node.children.length < 1" style="margin-left: 2px" type="ios-trash" color="red" size="18" @click.stop="Delete"></Icon>
    </span>
  </span>
</template>

<script>
export default {
  data() {
    return {
      node: this.value,
      nodeData: JSON.parse(JSON.stringify(this.value))
    };
  },
  props: {
    value: {
      default: function() {
        return {};
      }
    },
    treeNode: {
      default: function() {
        return {};
      }
    }
  },
  methods: {
    OpenEdit() {
      this.node.status = 1;
      this.node.isAdd = false;
    },
    Append() {
      //添加节点事件
      this.$emit("Append");
    },
    SaveEdit() {
      //保存节点事件
      this.$emit("SaveEdit", this.nodeData);
    },
    CancelEdit() {
      this.node.status = 0;
      this.$emit("CancelEdit", this.nodeData);
    },
    Delete() {
      this.$emit("Delete", this.nodeData);
    },
    Expanded() {
      this.treeNode.expanded = this.treeNode.expanded ? false : true;
    }
  },
  watch: {
    value: {
      handler: function(val, oldVal) {
        this.node = val;
      },
      deep: true
    },
    node: {
      handler: function(val) {
        this.$emit("input", val);
      },
      deep: true
    }
  }
};
</script>
<style>
.span_item:hover .span_icon {
  display: inline;
}
.span_icon {
  margin-left: 10px;
  display: none;
}
</style>
