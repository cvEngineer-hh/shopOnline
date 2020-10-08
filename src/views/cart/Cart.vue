<template>
  <div id="Cart">
    <!-- 顶部导航栏 -->
    <nav-bar class="cart-nav">
      <template #center>
        <div>购物车</div>
      </template>
    </nav-bar>
    <!-- 总商品数量信息 -->
    <div class="cart-head">
      <!-- 当购物车没有商品时 -->
      <div v-if="!cartLength" class="none-goods">
        <h3>哦豁</h3>
        <span>购物车里没有商品哦,快去逛逛吧</span>
        <div class="cart-image">
          <img src="~assets/images/nonegoods.png" width="100%" />
        </div>
      </div>
      <!-- 当购物车有商品时 -->
      <div v-else>
        <h2>购物车</h2>
        <span>共{{ cartLength }}件宝贝</span>
      </div>
    </div>
    <!-- 商品 -->
    <cart-list />
    <!-- 底部工具栏 -->
    <bottom-bar />
  </div>
</template>


<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "views/cart/childComps/CartList";
import BottomBar from "views/cart/childComps/BottomBar";

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    BottomBar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartLength", "totalAmount"]),
  },
};
</script>
<style scoped>
#Cart {
  padding-bottom: 90px;
  padding-top: 44px;
  min-height: 100vh;
  background-color: #f0f0f0;
}
.cart-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: var(--color-high-text);
  color: #fff;
  z-index: 9;
}
.cart-image {
  position: relative;
  left: 50px;
  width: 250px;
}
.cart-head {
  padding-top: 20px;
  margin-left: 15px;
  line-height: 35px;
}
.cart-head span {
  font-size: 12px;
}
.none-goods {
  margin: 150px 20px;
}
</style>