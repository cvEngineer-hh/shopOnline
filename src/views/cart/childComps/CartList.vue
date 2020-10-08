<template>
  <div id="cartList">
    <cart-item
      v-for="(item, index) in $store.state.cartList"
      :key="item.iid"
      :cart="item"
      :index="index"
      @click.native="cartItemClick(index)"
    >
    </cart-item>
  </div>
</template>

<script>
import CartItem from "views/cart/childComps/CartItem";
export default {
  name: "cartList",
  data() {
    return {
      totalPrice: null,
    };
  },
  methods: {
    cartItemClick(index) {
      this.totalPrice =
        this.$store.state.cartList[index].amount *
        this.$store.state.cartList[index].price;
    },
  },
  components: {
    CartItem,
  },
};
</script>

<style>
</style>