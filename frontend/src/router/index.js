import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ArticlePage from '../pages/ArticlePage.vue';
import SearchResults from '../components/SearchResults.vue';
import FriendsLink from '../pages/FriendsLink.vue';
import ArticleList from '../components/ArticleList.vue';
import store from '../store';
import BlankLayout from '@/layouts/BlankLayout.vue';
import AdminHome from '@/pages/AdminHome.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/articles',
    name: 'ArticleList',
    component: ArticleList,
  },
  {
    path: '/article/:id',
    name: 'ArticlePage',
    component: ArticlePage,
    props: true,
  },
  {
    path: '/search',
    name: 'SearchResults',
    component: SearchResults,
  },
  {
    path: '/friends',
    name: 'FriendsLink',
    component: FriendsLink,
  },
  {
    path: '/admin',
    component: BlankLayout,
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: AdminHome,
      },
      // 可添加更多后台管理页面
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn && store.getters.user.role === 'admin') {
      next();
    } else {
      next({ name: 'Home' });
    }
  } else {
    next();
  }
});

export default router;
