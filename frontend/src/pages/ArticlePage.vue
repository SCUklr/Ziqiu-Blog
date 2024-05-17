<template>
    <div class="article-page">
      <h1>{{ article.title }}</h1>
      <img :src="article.cover" alt="cover" />
      <p>{{ article.content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ArticlePage',
    data() {
      return {
        article: {
          title: '',
          cover: '',
          content: ''
        }
      };
    },
    created() {
      const articleId = this.$route.params.id;
      this.fetchArticleDetails(articleId);
    },
    methods: {
      fetchArticleDetails(articleId) {
        // 模拟异步获取文章详情
        const articles = [
          { id: 1, title: '文章标题1', cover: 'path/to/cover1.jpg', content: '文章内容1' },
          { id: 2, title: '文章标题2', cover: 'path/to/cover2.jpg', content: '文章内容2' },
          // 更多文章数据...
        ];
  
        const article = articles.find(a => a.id == articleId);
        if (article) {
          this.article = article;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .article-page {
    padding: 24px;
    background: #fff;
  }
  </style>
  