<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);
export default {
  name: "scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scrollMet();
  },
  methods: {
    scrollMet() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        observeDom: true,
        click: true,
        // 由外界决定是否监听滚动
        probeType: this.probeType,
        // 由外界决定是否允许开启上拉事件
        pullUpLoad: this.pullUpLoad,
      });
      // 监听滚动
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
      // 监听scroll滚动到底部
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    },
  },
};
</script>

<style>
.wrapper {
  background-color: #fff;
}
.content {
  background-color: #fff;
}
</style>