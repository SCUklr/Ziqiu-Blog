<template>
  <div class="sidebar">
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ArticleSidebar',
  data() {
    return {
      categories: [
        { id: 1, name: '分类1' },
        { id: 2, name: '分类2' },
        { id: 3, name: '分类3' }
      ]
    };
  }
};
</script>

<style>
.sidebar {
  width: 200px;
  padding: 10px;
}
</style>
