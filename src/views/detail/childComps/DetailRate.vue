<template>
  <div id="goodsRate">
    <div v-if="rate.cRate">
      <div class="rate-head">
        <span>{{ "宝贝评价" + "(" + rate.cRate + ")" }}</span>
        <a href="#" style="color: var(--color-high-text)">
          查看全部 <i class="el-icon-arrow-right" />
        </a>
      </div>
      <div class="user">
        <!-- 头像 -->
        <div class="user-phpoto"><img :src="rate.userPhoto" /></div>
        <div>
          <!-- 用户名 -->
          <div class="user-name">{{ rate.userName }}</div>
          <!-- 发布时间 以及 购买物品信息-->
          <div style="color: #aaa">
            <span>
              {{ rateYear || rateMonth || rateDay || rateHour || "刚刚" }}
            </span>
            <span>
              {{ "| " + rate.style }}
            </span>
          </div>
        </div>
      </div>
      <div class="rate-content">
        {{ rate.rateContent }}
        <div class="rate-images">
          <div v-for="item in rate.rateImages" :key="item">
            <img :src="item" />
          </div>
        </div>
      </div>
    </div>
    <div class="rateNonexistent" v-else>
      <h4 class="rate-head">当前没有评论哦</h4>
      <div>
        <i class="rate-icon">问大家</i>
        <span> 宝贝好不好，问问已买过的人</span>
        <div class="rate-button">去提问</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Time } from "common/time";
export default {
  name: "goodsReta",
  components: {},
  data() {
    return {
      RateTime: null,
    };
  },
  mounted() {},
  props: {
    rate: {
      tyep: Object,
      default() {},
    },
  },
  computed: {
    rateYear() {
      return new Time(this.rate.rateTime).y + "年前";
    },
    rateMonth() {
      return new Time(this.rate.rateTime).m + "月前";
    },
    rateDay() {
      return new Time(this.rate.rateTime).d + "天前";
    },
    rateHour() {
      return new Time(this.rate.rateTime).h + "小时前";
    },
  },
};
</script>

<style>
#goodsRate {
  width: 100vw;
  padding: 5px 10px;
  border-bottom: 10px #eee solid;
}
.rate-head {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.user {
  overflow: hidden;
}
.user > div {
  float: left;
  font-size: 12px;
  margin-right: 8px;
  line-height: 1.3em;
}
.user-phpoto {
  overflow: hidden;
  width: 30px;
  height: 30px;
  border: 0.5px #ccc solid;
  border-radius: 100%;
}
.user-phpoto img {
  width: 100%;
}
.user-name {
  font-size: 14px;
  color: black;
}
.rate-content {
  overflow: hidden;
  margin: 20px 0px 10px;
  color: #666;
}
.rate-images {
  display: inline-block;
  overflow: hidden;
  border-radius: 5px;
  margin-top: 10px;
}
.rate-images div {
  float: left;
  overflow: hidden;
  width: 80px;
  max-height: 100px;
  margin-right: 5px;
}
.rate-images div:last-child {
  margin: 0;
}
.rate-images img {
  width: 100%;
  height: 100px;
}
.rateNonexistent {
  overflow: hidden;
  margin: 0 10px 10px 10px;
}
.rate-icon {
  display: inline-block;
  padding: 1px;
  margin-top: -2px;
  font-size: 14px;
  font-style: normal;
  border-radius: 2px;
  color: #fff;
  background-image: linear-gradient(to right, #fe9502, #fe4c00);
}
.rate-button {
  float: right;
  font-size: 12px;
  padding: 3px 8px;
  margin-top: -3px;
  color: #fe4c00;
  border: 1px #fe4c00 solid;
  border-radius: 15px;
  background-color: #fff;
}
</style>