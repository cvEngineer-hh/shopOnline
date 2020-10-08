<template>
  <div id="profile">
    <nav-bar class="cart-nav">
      <template #center>
        <div>用户中心</div>
      </template>
    </nav-bar>
    <profile-info />
    <profile-order />
    <my-attention />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ProfileInfo from "views/profile/profileComps/ProfileInfo";
import ProfileOrder from "views/profile/profileComps/ProfileOrder";
import MyAttention from "views/profile/profileComps/MyAttention";
export default {
  name: "profile",
  components: {
    NavBar,
    ProfileInfo,
    ProfileOrder,
    MyAttention,
  },
};
</script>

<style>
#profile {
  min-height: 100vh;
  padding: 10px;
  padding-top: 55px;
  margin-bottom: 50px;
  background-color: #f0f0f0;
}
.cart-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: var(--color-high-text);
  color: #fff;
  z-index: 9;
}
</style>