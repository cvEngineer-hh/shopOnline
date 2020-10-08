<template>
  <div class="tab-control">
    <!-- 因为本身效果差别不大，所以这里不使用插槽 -->
    <!-- 直接让父组件传入要显示的文字， 然后遍历即可 -->
    <div
      v-for="(item, index) in title"
      :key="index"
      class="tab-control-item"
      :class="{'item-text-color': currentIndex === index}"
      @click="itemClick(index)"
    >
      <h4>{{item}}</h4>
      <div class="item-index" :class="{'item-active': currentIndex === index}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "control",
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
  props: {
    title: {
      type: Array,
    },
  },
};
</script>

<style>
@keyframes grow {
  0% {
    width: 5%;
  }
  100% {
    width: 100%;
  }
}
.tab-control {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.tab-control-fixed {
  position: fixed;
  top: 44px;
}
.tab-control-item {
  width: 40px;
  line-height: 40px;
}
.item-text-color {
  color: var(--color-tint);
}
.item-index {
  height: 2px;
  margin-top: -7px;
  border-radius: 2px;
}
.item-active {
  background-color: var(--color-high-text);
  animation: grow 200ms forwards;
}
</style>