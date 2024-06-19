<template>
    <div class="search-results">
      <h2>搜索结果</h2>
      <div v-if="results.length">
        <div v-for="result in results" :key="result.id" class="result-item">
          <h3>{{ result.title }}</h3>
          <p>{{ result.summary }}</p>
          <router-link :to="{ name: 'ArticlePage', params: { id: result.id } }">查看详情</router-link>
        </div>
      </div>
      <div v-else>
        <p>未找到相关结果。</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchResults',
    data() {
      return {
        results: [],
      };
    },
    created() {
      const query = this.$route.query.q;
      this.searchArticles(query);
    },
    methods: {
      searchArticles(query) {
        // 模拟异步搜索文章数据
        const allArticles = [
          { id: 1, title: '文章标题1', summary: '文章内容1摘要' },
          { id: 2, title: '文章标题2', summary: '文章内容2摘要' },
          // 更多文章数据...
        ];
        this.results = allArticles.filter(article => article.title.includes(query));
      },
    },
  };
  </script>
  
  <style scoped>
  .search-results {
    padding: 20px;
  }
  
  .result-item {
    margin-bottom: 20px;
  }
  </style>
  