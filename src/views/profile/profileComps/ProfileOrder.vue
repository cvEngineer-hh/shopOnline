<template>
  <div id="parfileOrder">
    <!-- 订单 -->
    <div class="order-head">
      <div>我的订单</div>
      <span>查看全部订单<i class="el-icon-arrow-right" /></span>
    </div>
    <!-- 小图标 -->
    <main class="order-sort">
      <div v-for="item in orderSort" :key="item.text">
        <div><i class="order-icon" :class="item.icon" /></div>
        <div style="font-size: 14px">{{ item.text }}</div>
      </div>
    </main>
    <!-- 物流信息 -->
    <order-info />
  </div>
</template>

<script>
import OrderInfo from "views/profile/profileComps/OrderInfo";
export default {
  name: "profileOrder",
  data() {
    return {
      orderSort: [
        { icon: "el-icon-s-finance", text: "付款" },
        { icon: "el-icon-s-order", text: "发货" },
        { icon: "el-icon-s-claim", text: "收货" },
        { icon: "el-icon-s-comment", text: "评价" },
        { icon: "el-icon-s-release", text: "退款" },
      ],
    };
  },
  components: {
    OrderInfo,
  },
};
</script>

<style>
#parfileOrder {
  margin-top: 15px;
  padding-bottom: 10px;
  background-color: #fff;
  border-radius: 10px;
}
.order-head {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px #e4e4e4 solid;
}
.order-head div {
  color: black;
  font-size: 16px;
  font-weight: 600;
}
.order-head span {
  font-size: 14px;
}
.order-sort {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  text-align: center;
  line-height: 22px;
}
.order-icon {
  font-size: 22px;
  color: #fe9502;
}
</style>