<template>
  <div class="home-recommend">
    <!-- 将请求来的数据遍历，一一放入对应位置 -->
    <div v-for="item in recommend" :key="item.acm" class="home-recommend-ietm">
      <a :href="item.link">
        <img :src="item.image" alt width="60px" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "homerecommend",
  props: ["recommend"],
};
</script>

<style>
.home-recommend {
  display: flex;
  justify-content: space-around;

  width: 100%;
  margin: 10px 0;
  padding: 10px 0;
  text-align: center;
  font-size: 12px;
  border-radius: 10px;
  box-shadow: 0px -1px 12px 3px rgba(0, 0, 0, 0.1);
}
</style>