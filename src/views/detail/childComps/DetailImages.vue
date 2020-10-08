<template>
  <div id="shopImages">
    <div v-for="item in detailImage" :key="item.anchor">
      <div>{{ item.key }}</div>
      <div v-for="itemS in item.list" :key="itemS">
        <img :src="itemS" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopImages",
  data() {
    return {
      loadTime: 0,
      isImage: 0,
    };
  },
  props: {
    detailImage: {
      type: Array,
      default() {},
    },
  },
  /*   methods: {
    imgLoad() {
      // 限流， 当 事件加载次数 等于 图片长度时，发送该事件
      this.isImage++;
      if (this.isImage == this.detailImage.length) {
        this.$emit("ImgLoad");
        console.log("图片加载完成");
      }
    },
  }, */
};
</script>

<style>
</style>