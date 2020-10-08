<template>
  <div class="tab-bar-item" :style="isStyle" @click="itemClick">
    <slot name="itemIconfont"></slot>
    <slot name="itemText"></slot>
  </div>
</template>

<script>
import "./TabBar.vue";
export default {
  props: {
    path: String,
    // 可传入点击图标后想展示的颜色
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  computed: {
    // 判断当前活跃的路由和当前选中的路由是否一致
    // 选中当前活跃的路由
    isActive() {
      return this.$route.path === this.path;
    },
    // 给选中的路由动态绑定style
    isStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      // 组件被点击时，将当前组件对应的path加入url
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item .iconfont {
  font-size: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>