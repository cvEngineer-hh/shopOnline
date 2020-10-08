<template>
  <div class="back-top">
    <i class="el-icon-top" />
  </div>
</template>

<script>
export default {
  name: "backTop",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.back-top {
  position: fixed;
  bottom: 80px;
  right: 21px;
  padding: 6px 6px 3px;

  font-size: 23px;

  border-radius: 32px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>