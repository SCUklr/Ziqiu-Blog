<template>
  <div class="home-page">
    <NavigationBar />
    <div class="content">
      <div class="main-content">
        <ArticleList />
      </div>
      <div class="sidebar">
        <ContactCard />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import ArticleList from '../components/ArticleList.vue';
import ContactCard from '../components/ContactCard.vue';

export default {
  name: 'HomePage',
  components: {
    NavigationBar,
    ArticleList,
    ContactCard
  }
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  padding-top: 60px; /* 确保内容不会被导航栏覆盖 */
}

.content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.main-content {
  flex: 1;
  margin-right: 20px;
}

.sidebar {
  width: 300px; /* 设置侧边栏宽度 */
}
</style>
