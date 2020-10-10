<template>
  <div id="detail">
    <!-- 顶部导航栏 -->
    <detail-nav-bar @titleClick="titleClick" ref="DetailNavBar" />
    <!-- wrapper -->
    <scroll-pack
      class="detailContent"
      ref="detailScroll"
      :probe-type="3"
      @scroll="detailScroll"
      :pull-up-load="true"
      @pullingUp="loadMopre"
    >
      <template #content>
        <!-- 商品展示 -->
        <detail-carousel :top-image="topImage" ref="topImage" />
        <!-- 商品信息 -->
        <detail-base-info :goods="goods" />
        <!-- 评论信息 -->
        <detail-rate :rate="rate" ref="DetailRate" />
        <!-- 店铺信息 -->
        <detail-shop :shop="shop" />
        <!-- 详情展示 -->
        <detail-images :detail-image="detailImage" ref="DetailImages" />
        <!-- 商品参数 -->
        <shop-params :Params="Params" />
        <!-- 推荐 -->
        <div class="guess">——&nbsp;猜你喜欢&nbsp;——</div>
        <goods-list :goods="recommend" ref="GoodsList" />
      </template>
    </scroll-pack>
    <detail-tab-bar @addToCart="addToCart" />
    <shop-icon ref="shopIcon" />
    <!-- 返回顶部图标 -->
    <back-top @click.native="backTop" v-show="isBackTop" />
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import DetailCarousel from "views/detail/childComps/DetailCarousel";
import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
import DetailShop from "views/detail/childComps/detailshop/DetailShop";
import DetailImages from "views/detail/childComps/DetailImages";
import ShopParams from "views/detail/childComps/ShopParams";
import DetailRate from "views/detail/childComps/DetailRate";
import DetailTabBar from "views/detail/childComps/DetailTabBar";
import ShopIcon from "views/detail/childComps/ShopIcon";

import GoodsList from "components/common/goods/GoodsList";

import ScrollPack from "components/common/ScrollPack";
import BackTop from "components/common/BackTop";

import { imagesLoad } from "../../mixins/index";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  Params,
  Rate,
} from "network/detail";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
      isBackTop: false,
      detailImage: [],
      isload: true,
      Params: {},
      rate: {},
      recommend: [],
      childCompTops: [0],
      isShop: false,
      isImageLoad: 0,
    };
  },
  components: {
    DetailNavBar,
    DetailCarousel,
    DetailBaseInfo,
    DetailShop,
    DetailImages,
    ShopParams,
    DetailRate,
    DetailTabBar,
    ShopIcon,

    GoodsList,

    ScrollPack,
    BackTop,
  },
  methods: {
    detailScroll(position) {
      // 滚动距离超过600时显示 返回顶部按钮
      this.isBackTop = position.y < -600;
      // 滚动到对应内容时对应标题变色
      this.childCompTops.forEach((item, index, value) => {
        if (
          (-position.y >= value[index] && -position.y < value[index + 1]) ||
          -position.y >= value[index]
        ) {
          // NavBar 的状态由 currentIndex 控制
          this.$refs.DetailNavBar.currentIndex = index;
        }
      });
    },
    loadMopre() {},
    // 返回顶部
    backTop() {
      this.$refs.detailScroll.scroll.scrollTo(0, 20, 400);
    },
    ImgLoad() {},
    // 点击导航栏后滚动到对应位置
    titleClick(index) {
      this.$refs.detailScroll.scroll.scrollTo(
        0,
        -this.childCompTops[index],
        400
      );
    },
    addToCart() {
      // 将物品要展示的信息加入Vuex
      const produst = {
        iid: this.iid,
        image: this.topImage[0],
        title: this.goods.title,
        price: this.goods.lowNowPrice,
        shopLogo: this.shop.shopLogo,
        shopName: this.shop.shopName,
        style: this.rate.style,
      };
      this.$store.commit("addCart", produst);
      // 购物车图标晃动
      this.$refs.shopIcon.isShop = true;
      setTimeout(() => {
        this.$refs.shopIcon.isShop = false;
      }, 400);
    },
  },
  computed: {},
  created() {
    // 获取商品的iid
    this.iid = this.$route.params.iid;
    // 请求商品详情数据
    getDetail(this.iid).then((res) => {
      // 获取顶部轮播图信息
      this.topImage = res.result.itemInfo.topImages;
      // 抽离详情页需要的数据
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.shopInfo.services,
        res.result.columns
      );
      // 获取评论信息
      if (res.result.rate.cRate) {
        this.rate = new Rate(res.result.rate);
      } else {
        this.rate.cRate = 0;
      }

      // 获取店铺相关信息
      this.shop = new Shop(res.result.shopInfo);
      // 获取详情图片
      this.detailImage = res.result.detailInfo.detailImage;
      // 获取尺寸信息
      this.Params = new Params(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
    });
    // 获取详情页数据
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    });
  },
  /*   mounted() {
    // 监听商品图片的加载
    this.$bus.$on("goodsImgLoad", () => {
      this.isImageLoad++;
      // 当图片加载完毕时
      if (this.isImageLoad == this.recommend.length) {
        // 重新计算 content 区的高度
        this.$refs.detailScroll.scroll.refresh();
        // 评论区到顶部的距离
        this.childCompTops.push(this.$refs.DetailRate.$el.offsetTop - 44);
        // 获取详情页到顶部的距离
        this.childCompTops.push(this.$refs.DetailImages.$el.offsetTop - 44);
        // 获取详情到顶部的距离
        this.childCompTops.push(this.$refs.GoodsList.$el.offsetTop - 44);
      }
    });
  }, */
  mixins: [imagesLoad],
};
</script>

<style scoped>
#detail {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.detailContent {
  overflow: hidden;
  height: 100vh;
}
.guess {
  width: 100vw;
  margin-top: 18px;
  text-align: center;
  color: var(--color-high-text);
}
.wrapper {
  overflow: hidden;
  height: calc(100vh - 87px);
}
.content {
  margin-bottom: 50px;
}
</style>