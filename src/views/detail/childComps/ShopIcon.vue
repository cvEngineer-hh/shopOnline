<template>
  <div id="shopIcon">
    <i
      class="iconfont icon-gouwuche shop-icon"
      :class="{ 'shop-icon-click': isShop }"
      @click="shopIconClick"
    >
      <div v-if="amount" class="cart-amount">{{ amount }}</div>
    </i>
  </div>
</template>

<script>
export default {
  name: "shopIcon",
  data() {
    return {
      isShop: false,
    };
  },
  methods: {
    shopIconClick() {
      this.$router.replace("/Cart");
    },
  },
  computed: {
    amount() {
      return this.$store.state.cartList.length;
    },
  },
};
</script>

<style>
@keyframes shake {
  0% {
    transform: rotate(25deg);
  }
  20% {
    transform: rotate(-25deg);
  }
  40% {
    transform: rotate(15deg);
  }
  60% {
    transform: rotate(-15deg);
  }
  80% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}
.shop-icon {
  position: fixed;
  bottom: 130px;
  right: 21px;
  padding: 6px 6px 3px;

  font-size: 20px;
  border-radius: 32px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.cart-amount {
  position: absolute;
  top: -4px;
  right: -4px;
  padding: 2px;
  width: 14px;
  height: 14px;
  border-radius: 14px;
  font-size: 10px;
  text-align: center;
  color: #fff;
  background-color: var(--color-high-text);
}
.shop-icon-click {
  animation: shake 300ms 1;
}
</style>