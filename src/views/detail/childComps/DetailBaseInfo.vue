<template>
  <div id="detaBaseInfo">
    <div class="mainInfo">
      <!-- 商品介绍 -->
      <div class="detailTitle">
        <h3>{{ goods.title }}</h3>
      </div>
      <!-- 商品价格 -->
      <div class="detailPrise">
        <span>{{ goods.newPrice }}</span>
        <span>{{ goods.oldPrice }}</span>
        <div class="discount">{{ goods.discount }}</div>
      </div>
      <!-- 商品热度 -->
      <div class="goodsfiery">
        <span v-for="(item, index) in goods.columns" :key="index">{{
          item
        }}</span>
      </div>
    </div>
    <!-- 商家承诺 -->
    <div class="promise">
      <span>保障</span>
      <span
        v-for="(item, index) in goods.services"
        :key="index"
        class="promise-item"
      >
        <!-- <img :src="item.icon" /> -->
        {{ item.name }}
      </span>
      <span>></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {},
};
</script>

<style>
.mainInfo {
  padding: 12px 8px 0;
}
.detailTitle {
  color: black;
}
.detailPrise {
  margin: 8px 0;
}
.detailPrise span:first-of-type {
  color: red;
  font-size: 32px;
}
.detailPrise span:last-of-type {
  text-decoration: line-through;
}
.detailPrise div {
  float: right;
  height: 100%;
  padding: 1px 5px;
  font-size: 12px;
  color: #fff;
  background-color: var(--color-tint);
  border-radius: 30px;
}
.goodsfiery {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
}
.promise {
  padding: 0 8px;
  width: 100vw;
  color: #aaa;
  font-size: 14px;
  padding: 35px 0 20px;
  border-bottom: 10px #eee solid;
}
.promise span:first-of-type {
  padding: 0 15px 0 8px;
}
.promise-item {
  color: #333;
}
.promise span:last-of-type {
  float: right;
}
.promise img {
  width: 12px;
  vertical-align: middle;
}
</style>