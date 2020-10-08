<template>
  <div id="shop-rule">
    <table class="goodsRule">
      <tr v-for="(item, index) in Params.goodsRule" :key="index">
        <td v-for="(itemS, index) in item" :key="index">{{ itemS }}</td>
      </tr>
    </table>
    <div class="disclaimer">{{ Params.goodsDisclaimer }}</div>
    <!-- **************************************************** -->
    <table class="goodsInfo">
      <tr v-for="(item, index) in Params.goodsInfo" :key="index">
        <td>{{ item.key }}</td>
        <td class="color">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "shopRule",
  props: {
    Params: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
};
</script>

<style scoped>
.goodsRule {
  width: 100vw;
  margin: 8px 5px;
  text-align: center;
  border-collapse: collapse;
}
.goodsRule td {
  padding: 16px 0;
  border-bottom: 1px #999 solid;
}
.goodsInfo {
  width: 100vw;
  margin: 8px;
  border-collapse: collapse;
}
.goodsInfo td {
  padding: 16px 5px;
  min-width: 80px;
  border-bottom: 1px #ccc solid;
}
.color {
  color: var(--color-high-text);
  margin-left: 100px;
}
.disclaimer {
  margin-top: 5px;
  font-size: 12px;
}
</style>