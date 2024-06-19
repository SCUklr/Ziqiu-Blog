<template>
  <div class="article-page">
    <div class="article-content">
      <h1 class="article-title">{{ articleTitle }}</h1>
      <div class="article-text" v-html="articleContent"></div>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked';

// 动态导入 Markdown 文件
const markdownFiles = {
  'article1': require('@/articles/article1.md'),
  'article2': require('@/articles/article2.md'),
  'article3': require('@/articles/article3.md'),
  'article4': require('@/articles/article4.md'),
  'article5': require('@/articles/article5.md'),
};

export default {
  name: 'ArticlePage',
  data() {
    return {
      articleTitle: '',
      articleContent: '',
    };
  },
  created() {
    const articleId = this.$route.params.id;
    this.loadArticle(articleId);
  },
  methods: {
    loadArticle(articleId) {
      const articles = {
        'article1': '文章标题1',
        'article2': '文章标题2',
        'article3': '文章标题3',
        'article4': '文章标题4',
        'article5': '文章标题5',
      };

      if (articles[articleId] && markdownFiles[articleId]) {
        this.articleTitle = articles[articleId];
        const fileContent = markdownFiles[articleId].default;
        if (typeof fileContent === 'string') {
          this.articleContent = marked(fileContent);
        } else {
          console.error('Expected string but got:', typeof fileContent);
          this.articleContent = '文章内容未找到';
        }
      } else {
        this.articleTitle = '文章未找到';
        this.articleContent = '文章内容未找到';
      }
    },
  },
};
</script>

<style scoped>
.article-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
  min-height: 100vh;
}

.article-content {
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 20px;
}

.article-title {
  font-size: 2em;
  margin-bottom: 10px;
  font-weight: bold;
}

.article-text {
  font-size: 1.2em;
  line-height: 1.6;
  color: #333;
}
</style>
