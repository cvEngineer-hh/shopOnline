<template>
  <div id="shopScore">
    <div class="shopscore">
      <table>
        <tr v-for="item in shop.shopScore" :key="item.name">
          <td>{{ item.name + ":" }}</td>
          <td>{{ item.score }}</td>
          <td>
            <em
              :class="{
                'score-bad': item.isBetter,
                'score-good': !item.isBetter,
              }"
              >{{ item.isBetter ? "高" : "低" }}</em
            >
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopScore",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.shopscore table {
  text-align: right;
  font-size: 12px;
  border-spacing: 5px 5px;
}
.shopscore em {
  display: inline-block;
  padding: 2px;
  font-weight: 200;
  border-radius: 30px;
  font-style: normal;
}
.score-bad {
  color: var(--color-high-text);
  background-color: #fff1e4;
}
.score-good {
  color: #06e919;
  background-color: #e7ffe9;
}
</style>