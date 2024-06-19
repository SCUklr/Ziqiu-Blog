<template>
  <div class="article-list">
    <el-row :gutter="20" class="article-list-row">
      <el-col v-for="article in paginatedArticles" :key="article.id" :span="24" class="article-column">
        <article-card 
          :id="article.id"
          :title="article.title"
          :cover="article.cover"
          :date="article.date"
        />
      </el-col>
    </el-row>
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="articles.length"
        :page-size="pageSize"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard.vue';

export default {
  name: 'ArticleList',
  components: {
    ArticleCard
  },
  data() {
    return {
      articles: [
        { id: 'article1', title: '文章标题1', cover: '/images/cover1.jpg', date: '2023-07-10' },
        { id: 'article2', title: '文章标题2', cover: '/images/cover2.jpg', date: '2023-06-28' },
        { id: 'article3', title: '文章标题3', cover: '/images/cover3.jpg', date: '2023-11-14' },
        { id: 'article4', title: '文章标题4', cover: '/images/cover4.jpg', date: '2023-11-14' },
        { id: 'article5', title: '文章标题5', cover: '/images/cover5.jpg', date: '2023-07-10' },
      ],
      currentPage: 1,
      pageSize: 5,
    };
  },
  computed: {
    paginatedArticles() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = this.currentPage * this.pageSize;
      return this.articles.slice(start, end);
    },
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>
.article-list {
  width: 100%;
  margin-top: 0;
}

.article-list-row {
  margin-top: 0;
}

.article-column:first-child .article-card {
  margin-top: 0;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.el-row {
  margin-bottom: 20px;
}
</style>
