<template>
  <div>
    <!-- 顶部栏 -->
    <nav-bar class="home-nav">
      <template #center>
        <div><span class="iconfont icon-gouwuche1"></span> 购物街</div>
      </template>
    </nav-bar>
    <!-- 吸顶导航 -->
    <tab-control
      :title="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControlTop"
      class="tab-control-top"
      v-show="isTabControl"
      @click.native="stickyClick"
    />
    <!-- 
      设置 scroll 允许监听 content 滚动，滚动包括惯性
      接收子组件传输的当前滚动位置
      设置 scroll 允许开启 pullUpLoad 事件 
      接收子组件传输 当前触发 pullUpLoad 事件
    -->
    <scroll-pack
      class="content"
      ref="scroll"
      :probe-type="2"
      @scroll="scroll"
      :pull-up-load="true"
      @pullingUp="loadMopre"
    >
      <template #content>
        <!-- 轮播图 -->
        <home-carousel :sonBanner="banner" />
        <!-- 推荐 -->
        <div>
          <home-recommend :recommend="recommend" />
        </div>
        <!-- 本周流行 -->
        <feature></feature>
        <!-- 导航 -->
        <tab-control
          :title="['流行', '新款', '精选']"
          @tabClick="tabClick"
          ref="tabControl"
        />
        <!-- 内容 -->
        <goods-list :goods="goods[currentType].list" />
        <!-- 加载图标 -->
        <div class="scrollImg" v-if="loadActive">
          <i class="el-icon-loading" />
        </div>
      </template>
    </scroll-pack>
    <!-- 回到顶部 -->
    <back-top @click.native="backTop" v-show="isBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/common/tabControl/TabControl";
import GoodsList from "components/common/goods/GoodsList";
import ScrollPack from "components/common/ScrollPack";
import BackTop from "components/common/BackTop";

import { getHomeData, getHomeGoods } from "network/home";

import HomeCarousel from "components/content/homecomponents/HomeCarousel";
import HomeRecommend from "components/content/homecomponents/HomeRecommend";
import Feature from "components/content/homecomponents/Feature";

export default {
  name: "home",
  emthods: {},
  components: {
    NavBar,
    TabControl,
    GoodsList,
    ScrollPack,
    BackTop,

    HomeCarousel,
    HomeRecommend,
    Feature,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      currentType: "pop",
      isBackTop: false,
      loadActive: false,
      taboffsetTop: 6,
      isload: true,
      isTabControl: false,
      tabControl: 0,
      isImageLoad: 0,
      goods: {
        // 分页查询
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  created() {
    // 通过调用方法的方式请求数据
    this.getHomeData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    console.log("数据获取成功");
  },
  mounted() {
    // 监听商品图片的加载
    this.$bus.$on("goodsImgLoad", () => {
      this.isImageLoad++;
      // 当图片加载完毕时
      if (this.isImageLoad == this.goods[this.currentType].list.length) {
        // 重新计算 content 区的高度
        this.$refs.scroll.scroll.refresh();
        // 获取导航栏到顶部的距离
        this.taboffsetTop = this.$refs.tabControl.$el.offsetTop - 44;
      }
    });
  },
  methods: {
    /*
     数据请求类方法 
     */
    getHomeData() {
      getHomeData().then((res) => {
        // 保存 轮播图 的数据
        this.banner = res.data.banner.list;
        // 保存 推荐栏 的数据
        this.recommend = res.data.recommend.list;
      });
    },
    // 获取商品的相关数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;

      getHomeGoods(type, page).then((res) => {
        // 将新页码的数据添加进页面
        // ...res res内所有的元素
        this.goods[type].list.push(...res.data.list);
        // 每次请求页码 +1
        this.goods[type].page++;
        // 当完成上拉刷新后，开启上拉刷新
        this.$refs.scroll.scroll.finishPullUp();
      });
    },
    // ----------------------------------------------------------------------
    /*
    事件监听事件 
    */

    // 导航栏点击监听
    tabClick(index) {
      // 利用 被点击按钮的index 绑定相应的数据
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      // 绑定两个导航栏的点击状态
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControlTop.currentIndex = index;
    },
    // 吸顶导航栏监听
    stickyClick() {
      // 当导航栏发生点击时回到第一个商品展示位置
      this.$refs.scroll.scroll.scrollTo(0, -this.taboffsetTop, 400);
    },
    // 获取子组件的scroll对象 并实现返回顶部功能
    backTop() {
      // (x, y, 时间)
      this.$refs.scroll.scroll.scrollTo(0, 20, 400);
    },
    // 监听内容滚动
    scroll(position) {
      this.isBackTop = position.y < -600;
      this.isTabControl = position.y < -this.taboffsetTop;
    },
    // 执行上拉加载
    loadMopre() {
      this.getHomeGoods(this.currentType);
      // 每当图片加载完毕，就让 BScroll 重新计算一次 content的高度
      this.loadActive = true;
    },
  },
};
</script>

<style scoped>
.home-nav {
  overflow: hidden;
  background-color: var(--color-high-text);
  color: #fff;
  z-index: 9;
}
.tab-control-top {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  background-color: #fff;
  margin-top: -1px;
  padding-bottom: 5px;
  z-index: 8;
}
.home-carousel {
  overflow: hidden;
  margin: 0 auto;
  height: 200px;
  width: 98%;
  border-radius: 20px;
}
.wrapper {
  overflow: hidden;
  height: calc(100vh - 99px);
  margin-top: 5px;
}
.scrollImg {
  margin: 5px auto;
  width: 32px;
  height: 32px;
  font-size: 32px;
}
</style>