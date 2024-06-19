<template>
  <el-card class="article-card">
    <img :src="cover" class="image" />
    <div class="content">
      <span class="title">{{ title }}</span>
      <div class="bottom clearfix">
        <time class="time">{{ date }}</time>
        <router-link :to="{ name: 'ArticlePage', params: { id: id } }">
          <el-button type="text" class="button">查看详情</el-button>
        </router-link>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    cover: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.article-card {
  margin: 0 0 20px 0; /* 仅设置底部外边距 */
  padding: 0; /* 确保没有填充 */
  /* border: 1px solid red; 调试边框 */
}

.image {
  width: 100%;
  display: block;
}

.content {
  padding: 14px;
}

.title {
  font-size: 1.2em;
  font-weight: bold;
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

.time {
  font-size: 12px;
  color: #999;
}
</style>
