<template>
    <div>
      <el-row :gutter="20">
        <el-col v-for="article in paginatedArticles" :key="article.id" :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="article.cover" class="image" />
            <div style="padding: 14px;">
              <span>{{ article.title }}</span>
              <div class="bottom clearfix">
                <time class="time">{{ article.date }}</time>
                <el-button type="text" class="button">查看详情</el-button>
              </div>
            </div>
          </el-card>
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
  export default {
    name: 'ArticleList',
    data() {
      return {
        articles: [
          { id: 1, title: '文章标题1', cover: 'path/to/cover1.jpg', date: '2023-07-10' },
          { id: 2, title: '文章标题2', cover: 'path/to/cover2.jpg', date: '2023-06-28' },
          // 更多文章数据...
        ],
        currentPage: 1,
        pageSize: 5
      };
    },
    computed: {
      paginatedArticles() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = this.currentPage * this.pageSize;
        return this.articles.slice(start, end);
      }
    },
    methods: {
      handlePageChange(page) {
        this.currentPage = page;
      }
    }
  };
  </script>
  
  <style scoped>
  .image {
    width: 100%;
    display: block;
  }
  
  .bottom {
    margin-top: 10px;
    line-height: 12px;
  }
  
  .button {
    float: right;
    padding: 0;
    margin: 0;
    font-size: 12px;
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  </style>
  