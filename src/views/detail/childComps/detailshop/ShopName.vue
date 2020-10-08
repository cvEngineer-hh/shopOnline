<template>
  <div id="shopName">
    <div class="shopName">
      <img :src="logo" />
      {{name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "shopName",
  props: ["logo", "name"],
};
</script>

<style>
.shopName {
  font-size: 18px;
  font-weight: 400;
}
.shopName img {
  height: 60px;
  border-radius: 60px;
  border: 2px #eee solid;
  vertical-align: middle;
}
</style>