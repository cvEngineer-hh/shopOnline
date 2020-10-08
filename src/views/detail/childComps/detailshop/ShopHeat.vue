<template>
  <div id="shopHeat">
    <span>{{ "收藏 : " + getFans + "万" }}</span>
    <span>{{ "商品 : " + shop.shopGoods }}</span>
    <span>{{ "总销量 : " + getSells + "万" }}</span>
  </div>
</template>

<script>
export default {
  name: "shopHeat",
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      default() {},
    },
  },
  computed: {
    getFans() {
      const fans = this.shop.shopFans / 10000;
      return fans.toFixed(1);
    },
    getSells() {
      const fans = this.shop.shopSells / 10000;
      return fans.toFixed(1);
    },
  },
};
</script>

<style>
#shopHeat {
  display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
  font-size: 14px;
}
#shopHeat span {
  display: inline-block;
  padding: 5px 15px;

  background-color: #eee;
  border-radius: 50px;
}
</style>