<template>
  <div class="GoodsListItem">
      <div class="GoodsImg">
        <img :src="showImage" @load="imgLoad" @click="itemClick" />
      </div>
      <!-- 介绍 -->
      <div class="GoodsItemText">
        {{ goodsItem.title }}
      </div>
      <div>
        <!-- 价格 -->
        <span class="price">{{ Price }}</span>
        <!-- 收藏 -->
        <span class="iconfont icon-shoucang"></span>
        <span class="shoucang">{{ goodsItem.cfav }}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "goodsItem",
  data() {
    return {
      isGoodsImage: 0,
    };
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  methods: {
    /* 发送load事件 */
    imgLoad() {
      this.$bus.$emit("goodsImgLoad");
    },
    /* 点击后跳转至当前商品的详情页 */
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
    Price() {
      return this.goodsItem.orgPrice || this.goodsItem.discountPrice;
    },
  },
};
</script>

<style>
.GoodsListItem {
  overflow: hidden;
  display: inline-block;
  width: 47vw;
  margin: 10px 0 10px 2vw;
  border-radius: 10px;
  font-size: 12px;
  color: #333;
  line-height: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  text-overflow: ellipsis;
}
.icon-shoucang,
.shoucang {
  float: right;
  color: #999;
  margin: 8px 0 0;
  font-size: 12px;
}
.price {
  display: inline-block;
  margin: 5px 8px;
  color: red;
  font-size: 16px;
  font-weight: 700;
}
.GoodsItemText {
  overflow: hidden;
  margin: 5px 8px;
  white-space: nowrap;
}
.GoodsImg {
  width: 100%;
  height: 40vh;
  background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600423950755&di=3f98a8f55a11a8f037a1cedb5f40b42f&imgtype=0&src=http%3A%2F%2Fwww.ppssdd.com%2Fuploads%2Fallimg%2F180906%2F1-1PZ6094043b3.gif)
    no-repeat center center;
  background-size: contain;
}
.GoodsImg img {
  height: 100%;
}
</style>