<template>
  <div id="orderInfo">
    <div class="orderHead">最新物流</div>
    <!-- 商品信息 -->
    <div>
      <div class="shopimg">
        <img src="~assets/logo.png" width="100%" />
      </div>
      <!-- 物流信息 -->
      <div class="express">
        <div class="expressIcon"><i class="el-icon-circle-check" /> 代取件</div>
        <div class="expressInfo">
          您的快件已暂存至菜鸟驿站，请凭取货码及时领取。如有疑问请拨打
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderInof",
  data() {
    return {};
  },
};
</script>

<style>
#orderInfo {
  overflow: hidden;
  padding: 10px;
  width: 94%;
  margin: 0 3%;
  background-color: #f3f1f1;
  border-radius: 10px;
}
.orderHead {
  margin-bottom: 10px;
  color: black;
}
.shopimg {
  width: 14%;
}
.shopimg {
  float: left;
}
.express {
  float: left;
  width: 84%;
  margin-left: 2%;
  line-height: 1.5em;
}
.expressIcon {
  font-size: 14px;
  color: #2a98ff;
}
.expressInfo {
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>