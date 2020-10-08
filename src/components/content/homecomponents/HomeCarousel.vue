<template>
  <div class="home-carousel">
    <el-carousel height="200px">
      <el-carousel-item v-for="item in sonBanner" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" width="100%" height="100%" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "homeCarousel",
  temponents: {},
  props: ["sonBanner"],
};
</script>

<style>

</style>