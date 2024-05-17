<template>
    <div class="post-list">
      <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </template>
  
  <script>
  import PostItem from '@/components/PostItem.vue';
  import api from '@/services/api';
  
  export default {
    name: 'PostList',
    components: {
      PostItem
    },
    data() {
      return {
        posts: []
      };
    },
    created() {
      api.getPosts().then(response => {
        this.posts = response.data.posts;
      });
    }
  };
  </script>
  
  <style>
  .post-list {
    padding: 10px;
  }
  </style>
  