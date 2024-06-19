<template>
  <div class="home-page">
    <div class="quote-section">
      <QuoteDisplay />
    </div>
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
import ArticleList from '../components/ArticleList.vue';
import ContactCard from '../components/ContactCard.vue';
import QuoteDisplay from '../components/QuoteDisplay.vue';

export default {
  name: 'HomePage',
  components: {
    ArticleList,
    ContactCard,
    QuoteDisplay,
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent; /* 确保背景透明 */
}

.quote-section {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 10px;
  background: transparent; /* 确保背景透明 */
}

.main-content {
  flex: 1;
  max-width: 600px;
  margin-right: 20px;
  /* border: 1px solid blue; 调试边框 */
  padding: 0px;
  background: transparent; /* 确保背景透明 */
}

.sidebar {
  width: 300px;
  /* border: 1px solid yellow; 调试边框 */
  background: transparent; /* 确保背景透明 */
}
</style>
