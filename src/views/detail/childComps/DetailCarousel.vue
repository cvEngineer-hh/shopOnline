<template>
  <div id="detail-carousel">
    <el-carousel height="300px" :autoplay="false" arrow="always">
      <el-carousel-item v-for="item in topImage" :key="item">
        <img :src="item" width="100%" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "detailCarousel",
  props: {
    topImage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
#detail-carousel {
  overflow: hidden;
}
.el-carousel__indicators {
  display: flex;
  flex-flow: row nowrap;
}
</style>