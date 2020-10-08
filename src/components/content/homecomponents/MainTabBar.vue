<template>
  <div>
    <tab-bar>
      <!--  首页 -->
        <tab-bar-item v-for="item in tabBarItem" :key="item.text" :path="item.path" activeColor="var(--color-high-text)">
        <template #itemIconfont>
          <div :class="item.icon"></div>
        </template>
        <template #itemText>
          <div>{{item.text}}</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "mainTabBar",
  data() {
    return {
      tabBarItem: [
        { icon: "iconfont icon-shouye", text: "首页", path:"/Home" },
        { icon: "iconfont icon-gouwuche", text: "购物车", path:"/Cart" },
        { icon: "iconfont icon-wode", text: "我的", path:"/Profile" },
      ],
    };
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>