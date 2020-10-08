<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: -1px;
  display: flex;
  justify-content: space-around;
  background-color: #f1f1f1;
  box-shadow: 0px -1px 12px 3px rgba(0, 0, 0, 0.1);
}
.tab-bar-item {
  text-align: center;
  height: 49px;
}
</style>