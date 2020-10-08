<template>
  <div id="profileInfo">
    <div class="profile-main">
      <div class="profile-phofo"></div>
      <div class="profile-name">
        <h3>用户_123456</h3>
        <div style="font-size: 12px">在这里和淘友们分享好物</div>
      </div>
      <div class="profile-icon">
        <i class="el-icon-arrow-right" />
      </div>
    </div>
    <div class="profile-like">
      <div>
        <div>79</div>
        <div>收藏夹</div>
      </div>
      <div>
        <div>51</div>
        <div>关注店铺</div>
      </div>
      <div>
        <div>427</div>
        <div>足迹</div>
      </div>
      <div>
        <div>28</div>
        <div>红包卡券</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "parfileInfo",
};
</script>

<style>
#profileInfo {
  padding-top: 10px;
}
.profile-main {
  position: relative;
  overflow: hidden;
}
.profile-phofo {
  float: left;
  overflow: hidden;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: aqua;
}
.profile-name {
  float: left;
  margin-left: 15px;
  margin-top: 5px;
  line-height: 25px;
}
.profile-icon {
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -10px;
  font-size: 20px;
  color: #999;
  line-height: 100%;
}
.profile-like {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.profile-like div div {
  font-size: 14px;
  text-align: center;
}
</style>