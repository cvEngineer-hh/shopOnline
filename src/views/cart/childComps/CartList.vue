<template>
  <div id="cartList">
    <cart-item
      v-for="(item, index) in $store.state.cartList"
      :key="item.iid"
      :cart="item"
      :index="index"
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
      
    };
  },
  methods: {
  
  },
  components: {
    CartItem,
  },
};
</script>

<style>
</style>