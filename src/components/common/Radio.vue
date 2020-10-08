<template>
  <div id="radio">
    <div class="cart-item_radio" @click="radioColor">
      <i class="el-icon-check" />
    </div>
  </div>
</template>

<script>
export default {
  name: "radio",
  data() {
    return { isRadio: false };
  },
  methods: {
    radioColor() {
      this.isRadio = !this.isRadio;
    },
  },
};
</script>

<style>
#radio {
  float: left;
  border-radius: 17px;
}
.cart-item_radio {
  float: left;
  width: 17px;
  height: 17px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  line-height: 18px;
  border: 1px #aaa solid;
  border-radius: 17px;
}
</style>