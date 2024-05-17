// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ArticlePage from '../pages/ArticlePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: ArticlePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
