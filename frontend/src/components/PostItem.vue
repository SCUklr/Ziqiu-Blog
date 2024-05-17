<template>
    <div class="post-item">
      <h2>{{ post.title }}</h2>
      <router-link :to="`/post/${post.id}`">阅读更多</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostItem',
    props: {
      post: Object
    }
  };
  </script>
  
  <style>
  .post-item {
    margin-bottom: 20px;
  }
  </style>
  