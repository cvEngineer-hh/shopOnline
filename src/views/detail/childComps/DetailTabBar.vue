<template>
  <div id="detailTabBar">
    <tab-bar>
      <div v-for="item in tabBarItem" :key="item.text">
        <div class="tab-bar-item">
          <div class="item-icon" :class="item.class" />
          <div>{{ item.text }}</div>
        </div>
      </div>
      <el-button-group>
        <el-button round type="warning" @click="addToCart"
          >加入购物车</el-button
        >
        <el-button round class="detail-button detail-button2" type="warning"
          >立即购买</el-button
        >
      </el-button-group>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";

export default {
  name: "dateilTabBar",
  components: {
    TabBar,
  },
  data() {
    return {
      tabBarItem: [
        { class: "el-icon-s-shop", text: "店铺" },
        { class: "el-icon-headset", text: "客服" },
        { class: "iconfont icon-shoucang", text: "收藏" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
  },
};
</script>

<style scoped>
#tab-bar {
  height: 43px;
}
.tab-bar-item {
  font-size: 12px;
}
.tab-bar-item .item-icon {
  font-size: 18px;
  margin-top: 4px;
  vertical-align: middle;
}
.el-button-group {
  height: auto;
}
.el-button {
  height: 35px;
  width: 25vw;
  margin-top: 4px;
  padding: 5px 0px !important;
  color: #fff;
  background-image: linear-gradient(to right, #fec600, #fe9502);
}
.detail-button2 {
  background-image: linear-gradient(to right, #fe9502, #fe4c00);
}
</style>