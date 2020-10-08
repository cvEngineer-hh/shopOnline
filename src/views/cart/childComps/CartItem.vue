<template>
  <div id="cartItem">
    <!-- 复选框 -->
    <radio
      @click.native="radioClick(cart.iid)"
      class="shop-item_radio"
      :class="{ 'cart-item_radio--isActive': cart.checked }"
    />
    <div>
      <!-- 商家信息 -->
      <div class="cart-item-head">
        <div class="goods-logo">
          <img :src="cart.shopLogo" width="100%" />
        </div>
        <!-- 商家名称 -->
        <div class="goods-name">
          {{ cart.shopName }}
          <i class="el-icon-arrow-right" style="color: #ccc" />
        </div>
      </div>
      <!-- 主体 -->
      <div class="cart-item-main">
        <!-- 商品图片 -->
        <div class="img"><img :src="cart.image" width="100%" /></div>
        <!-- 商品信息及商品样式 -->
        <div class="cart-goods-info">
          <div class="cart-goods-title">{{ cart.title }}</div>
          <div class="cart-goods-style">{{ cart.style }}</div>
          <div>
            <!-- 价格 -->
            <span style="color: red">{{ cart.price }}</span>
            <!-- + -->
            <div class="add" @click="add(cart.iid)" v-if="!isOrder">+</div>
            <!-- 数量 -->
            <div class="order" @click="orderClick">
              {{ cart.amount }}
            </div>
            <!-- - -->
            <div class="sub" @click="sub(cart.iid)" v-if="!isOrder">-</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Radio from "components/common/Radio";
export default {
  name: "carItem",
  data() {
    return {
      isOrder: true,
      isRadio: false,
    };
  },
  components: {
    Radio,
  },
  props: ["cart", "index"],
  methods: {
    orderClick() {
      this.isOrder = false;
    },
    radioClick(iid) {
      this.$store.commit("cartRadio", iid);
    },
    add(iid) {
      this.$store.commit("amountAdd", iid);
      this.$forceUpdate();
    },
    sub(iid) {
      this.$store.commit("amountSub", iid);
      this.$forceUpdate();
    },
  },
  computed: {},
};
</script>

<style scoped>
#cartItem {
  overflow: hidden;
  padding: 14px 10px;
  margin: 12px auto;
  width: 95vw;
  border-radius: 10px;
  vertical-align: bottom;
  background-color: #fff;
}
.shop-item_radio {
  margin-top: 60px;
  margin-right: 10px;
}
.cart-item_radio--isActive {
  border-color: transparent;
  background-image: linear-gradient(to right, #fec600, #fe9502);
}
.cart-item-head {
  overflow: hidden;
  margin: 10px 0;
}
.goods-logo {
  float: left;
  overflow: hidden;
  height: 20px;
  width: 20px;
}
.goods-name {
  float: left;
  margin-left: 5px;
  font-weight: 400;
}
.img {
  float: left;
  overflow: hidden;
  width: 21%;
  height: 80px;
  border-radius: 5px;
}
.cart-goods-info {
  float: left;
  margin-left: 3%;
  width: 65%;
  font-size: 14px;
}
.cart-goods-title,
.cart-goods-style {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cart-goods-style {
  width: 100%;
  height: 25px;
  padding: 0 8px;
  margin: 12px 0;
  line-height: 25px;
  background-color: #f3f3f3;
  color: #bbb;
  font-size: 12px;
  border-radius: 5px;
}
.order {
  float: right;
  height: 25px;
  width: 25px;
  font-size: 12px;
  text-align: center;
  line-height: 25px;
  border: 0.5px #d8d8d8 solid;
  border-radius: 5px;
}
.add,
.sub {
  float: right;
  height: 19px;
  width: 19px;
  margin: 3px 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 19px;
  border: 0.5px #d8d8d8 solid;
  border-radius: 25px;
  background-color: #fe9502;
}
</style>