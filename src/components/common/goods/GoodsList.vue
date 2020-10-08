<template>
  <div class="GoodsList">
    <!-- 循环遍历每个商品并展示 -->
    <goods-list-item v-for="item in goods" :goods-item="item" :key="item.acm" />
  </div>
</template>

<script>
import GoodsListItem from "components/common/goods/GoodsListItem";
export default {
  name: "goods",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      // 限流， 当 事件加载次数 等于 图片长度时，发送该事件
      this.isImage++;
      if (this.isImage == this.detailImage.length) {
        this.$emit("ImgLoad");
        console.log("图片加载完成");
      }
    },
  }
};
</script>

<style>
.GoodsList {
  overflow: hidden;
  padding-top: 10px;
}
</style>