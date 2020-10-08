<template>
  <div id="shop">
    <div class="shop-head">
      <!-- 店铺 logo 及名称 -->
      <shop-name :logo="shop.shopLogo" :name="shop.shopName" />
      <!-- 店铺评分 -->
      <shop-score :shop="shop" />
    </div>
    <shop-heat :shop="shop" />
  </div>
</template>

<script>
import ShopName from "./ShopName";
import ShopScore from "./ShopScore";
import ShopHeat from "./ShopHeat";
export default {
  name: "shop",
  components: {
    ShopName,
    ShopScore,
    ShopHeat,
  },
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
};
</script>

<style>
.shop-head {
  display: flex;
  justify-content: space-between;
  margin: 0 8px;
  padding: 20px 0 10px;
}
</style>