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
      合计：<span class="total--color">
        {{ totalAmount | amount }}
      </span>
    </div>
    <!-- 结算按钮 -->
    <div class="settle-accounts">
      <el-button-group>
        <el-button round type="warning">
          结算{{ "(" + totalLength + ")" }}
        </el-button>
        <el-button
          round
          class="detail-button detail-button2"
          type="warning"
          @click="deleteShop"
        >
          删除
        </el-button>
      </el-button-group>
    </div>

    <!-- <div >结算</div> -->
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
    deleteShop() {
      this.$store.commit("deleteSelect");
    },
  },
  computed: {
    ...mapGetters(["totalAmount", "totalLength"]),
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
  filters: {
    amount(totalAmount) {
      return "￥" + totalAmount.toFixed(2);
    },
  },
};
</script>

<style scoped>
#bottomBar {
  position: fixed;
  top: calc(100vh - 105px);
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
  right: 170px;
  bottom: 8px;
}
.total--color {
  color: #fe4c00;
}
.settle-accounts {
  float: right;
}
.el-button {
  width: 70px;
  margin-top: 4px;
  padding: 10px 15px !important;
  color: #fff;
  background-image: linear-gradient(to right, #fec600, #fe9502);
}
.detail-button2 {
  background-image: linear-gradient(to right, #fe9502, #fe4c00);
}
</style>