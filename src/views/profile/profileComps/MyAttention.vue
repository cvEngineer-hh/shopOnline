<template>
  <div id="myAttention">
    <div class="attention-item" v-for="item in attention" :key="item.name">
      <!-- 关注的板块名称、信息 -->
      <header>
        <div class="name">
          <div class="name_image">
            <img :src="item.image" width="15px" />
          </div>

          <span>{{ item.name }}</span>
        </div>
        <div class="title">{{ item.title }}</div>
      </header>
      <!-- 主体 -->
      <main class="main">
        <div class="main-name">{{ item.main.name }}</div>
        <div class="main-title">{{ item.main.title }}</div>
        <div class="main-button">{{ item.main.button }}</div>
      </main>
      <!-- 底部功能 -->
      <footer class="footer">
        <div class="icon-left">
          <div class="footer-icon"><i :class="item.iconLeft" /></div>
          <div class="footer-text">{{ item.leftText }}</div>
        </div>
        <div class="divide"></div>
        <div class="icon-right">
          <div class="footer-icon"><i :class="item.iconRight" /></div>
          <div class="footer-text">{{ item.rightText }}</div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "myAttention",
  data() {
    return {
      attention: [
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601547974436&di=539c0e66ab2168a2cc2cec15e024bfcd&imgtype=0&src=http%3A%2F%2Fimgres.iefans.net%2Fiefans%2F223%2F1114910-202009071427175f55d2c55a571.jpg",
          name: "支付宝",
          title: "生活好 支付宝",
          main: {
            name: "花呗额度",
            title: "按时还 免费用",
            button: "查看更多服务",
          },
          iconLeft: "el-icon-wallet",
          leftText: "我的钱包",
          iconRight: "el-icon-view",
          rightText: "查看积分",
        },
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601548099893&di=6552e2c234bcc1dce50895e700c50eac&imgtype=0&src=http%3A%2F%2Fcuimg.zuyushop.com%3A8013%2FcuxiaoPic%2F201611%2F2016110009075813437.png",
          name: "菜鸟裹裹",
          title: "购物达人的包裹管家",
          main: { name: "一个包裹", title: "代取件", button: "立即查看" },
          iconLeft: "el-icon-s-promotion",
          leftText: "优惠寄件",
          iconRight: "el-icon-s-custom",
          rightText: "我的包裹",
        },
      ],
    };
  },
  components: {},
};
</script>

<style>
#myAttention {
  display: flex;
  justify-content: space-between;
}
.name {
  font-weight: 600;
}
.name_image {
  float: left;
  margin-right: 5px;
  width: 15px;
  height: 15px;
  border-radius: 3px;
  overflow: hidden;
}
.title {
  color: var(--color-text);
}
.attention-item {
  float: left;
  overflow: hidden;

  width: 45vw;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  font-size: 12px;
  color: #333;
  line-height: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  text-overflow: ellipsis;
}
.main {
  width: 100%;
  margin: 10px auto;
  padding: 25px 10px;
  text-align: center;
  border-radius: 6px;
  background-color: #f1f1f1;
}
.main-name {
  margin-bottom: 8px;
  letter-spacing: 5px;
  font-size: 24px;
  color:#f8640e;
}
.main-title {
  margin-bottom: 12px;
  color: #555;
  font-size: 14px;
}
.main-button {
  display: inline-block;
  font-size: 12px;
  color: #f8640e;
  padding: 2px 8px;
  border-radius: 100px;
  background-color: #ffede5;
}
.footer {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.footer-icon {
  padding: 11px;
  color: #f8640e;
  font-size: 24px;
  border-radius: 100px;
  background-color: #f1f1f1;
}
.divide {
  width: 0;
  border-right: 1px #dddddd solid;
  border-radius: 100px;
}
</style>