<template>
  <div id="bottomBar">
    <!-- 全选按钮 -->
    <div class="bottom-bar_radio">
      <radio
        :class="{ 'bottom-bar_radio--isActive': barRadio }"
        @click.native="barRadioClick"
      />
      <span class="bottom-bar_text">全选</span>
    </div>
    <!-- 合计金额 -->
    <div class="total">
      合计：<span class="total--color">{{
        "￥" + totalAmount.toFixed(2)
      }}</span>
    </div>
    <!-- 结算按钮 -->
    <div class="settle-accounts">结算</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Radio from "components/common/Radio";
export default {
  name: "buttomBar",
  data() {
    return {};
  },
  methods: {
    barRadioClick() {
      // 当商品全部选中时，点击后全部改为不选中
      if (this.barRadio) {
        this.$store.commit("allFalse");
        // 反之
      } else {
        this.$store.commit("allTrue");
      }
    },
  },
  computed: {
    ...mapGetters(["totalAmount"]),
    barRadio() {
      // 如果购物车没有商品 返回false
      if (!this.$store.state.cartList.length) {
        return false;
        // 如果有商品的 checked 为 false，就为false
      } else {
        return !this.$store.state.cartList.filter((item) => !item.checked)
          .length;
      }
    },
  },
  components: {
    Radio,
  },
};
</script>

<style>
#bottomBar {
  position: fixed;
  bottom: 41px;
  width: 100vw;
  padding: 8px 10px;
  border-top: 1px #ddd solid;
  border-bottom: 1px #ddd solid;
  background-color: #fff;
  overflow: hidden;
}
.bottom-bar_radio {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.bottom-bar_text {
  margin-left: 8px;
}
.bottom-bar_radio--isActive {
  border-color: transparent;
  background-image: linear-gradient(to right, #fec600, #fe9502);
}
.total {
  position: absolute;
  right: 120px;
  bottom: 8px;
}
.total--color {
  color: #fe4c00;
}
.settle-accounts {
  float: right;
  padding: 10px 15px;
  width: 100px;
  color: #fff;
  text-align: center;
  border-radius: 40px;
  background-image: linear-gradient(to bottom, #fec600, #fe4c00);
}
</style>