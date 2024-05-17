<template>
  <div class="header">
    <div class="auth-buttons">
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader'
};
</script>

<style>
.header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}
.auth-buttons a {
  margin-left: 10px;
}
</style>
