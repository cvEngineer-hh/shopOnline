<template>
  <div>
    <nav-bar>
      <template #left>
        <div @click="backClick"><span class="el-icon-arrow-left"></span></div>
      </template>
      <template #center>
        <div class="title">
          <div
            v-for="(item, index) in titles"
            :key="index"
            class="title-item"
            @click="titleClick(index)"
            :class="{ 'title-item-active': currentIndex === index }"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "detailNavBar",
  data() {
    return {
      titles: ["商店", "评论", "详情", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  created() {},
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  flex-wrap: nowrap;
}
.title-item {
  flex: 1;
}
.title-item-active {
  color: var(--color-high-text);
}
</style>