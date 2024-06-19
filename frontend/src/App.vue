<template>
  <div id="app">
    <NavigationBar v-if="!isAdminPage" />
    <div :class="['main-content', { 'admin-content': isAdminPage }]">
      <router-view />
    </div>
    <FooterBar v-if="!isAdminPage" />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    FooterBar,
  },
  computed: {
    isAdminPage() {
      return this.$route.matched.some(record => record.path.startsWith('/admin'));
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  position: relative;
  height: 100%;
  overflow: auto;
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
  opacity: 0.9;
  z-index: -1;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding-top: 60px; /* Adjust this value to match navbar height */
}

.admin-content {
  flex: 1;
  padding-top: 0; /* No padding for admin content */
  background-color: #f5f5f5; /* Different background for admin */
}

.footer {
  width: 100%;
}
</style>
