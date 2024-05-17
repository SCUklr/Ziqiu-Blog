<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  position: relative;
  overflow: hidden;
}

body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/blog_bg.jpg') no-repeat center center fixed;
  background-size: cover;
  opacity: 0.9; /* 设置背景图片透明度 */
  z-index: -1; /* 确保背景图片在所有内容的下面 */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
  z-index: 0; /* 确保内容在背景图片的上面 */
  width: 100%;
  height: 100%;
}
</style>
