<template>
    <a-card
      :hoverable="true"
      class="article-card"
      @click="navigateToArticle"
    >
      <template #cover>
        <img v-if="cover" :alt="title" :src="cover" />
      </template>
      <a-card-meta
        :title="title"
        :description="description"
      />
      <template #footer>
        <div class="footer-info">
          <span>{{ date }}</span>
          <span>{{ comments }}条评论 {{ likes }}点赞 {{ views }}浏览</span>
        </div>
      </template>
    </a-card>
  </template>
  
  <script>
  export default {
    name: 'ArticleCard',
    props: {
      title: String,
      description: String,
      cover: String,
      articleId: [String, Number],
      date: String,
      comments: Number,
      likes: Number,
      views: Number
    },
    methods: {
      navigateToArticle() {
        this.$router.push(`/article/${this.articleId}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .article-card {
    margin-bottom: 16px;
  }
  .footer-info {
    display: flex;
    justify-content: space-between;
  }
  </style>
  