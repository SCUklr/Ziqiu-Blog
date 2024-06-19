<template>
  <div class="navbar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="0" class="logo">
        子丘的个人博客
      </el-menu-item>
      <el-menu-item index="1">
        <img src="@/assets/icon/navigationbar/home.svg" class="menu-icon" alt="home icon" />
        主页
      </el-menu-item>
      <el-sub-menu index="2" class="category-submenu" popper-class="custom-dropdown">
        <template #title>
          <img src="@/assets/icon/navigationbar/category.svg" class="menu-icon" alt="category icon" />
          <span class="category-title">文章分类</span>
        </template>
        <el-menu-item index="2-1">技术</el-menu-item>
        <el-menu-item index="2-2">生活</el-menu-item>
        <el-menu-item index="2-3">其它</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">
        <img src="@/assets/icon/navigationbar/comment.svg" class="menu-icon" alt="comment icon" />
        留言板
      </el-menu-item>
      <el-menu-item index="4">
        <img src="@/assets/icon/navigationbar/link.svg" class="menu-icon" alt="link icon" />
        友链
      </el-menu-item>
      <el-menu-item index="5" class="login-item">
        <img src="@/assets/icon/navigationbar/login.svg" class="menu-icon" alt="login icon" />
        登录
      </el-menu-item>
    </el-menu>
    <div class="search-container">
      <el-input placeholder="输入标题关键词查询" v-model="searchQuery" class="search-bar" autocomplete="off" />
      <el-button @click="handleSearch" class="search-button">
        <img src="@/assets/icon/search-icon.svg" alt="search icon" class="search-icon" />
      </el-button>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';

export default {
  name: 'NavigationBar',
  data() {
    return {
      activeIndex: '1',
      searchQuery: '',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key == '1') {
        this.$router.push('/');
      } else if (key === '3') {
        ElMessage({
          message: '留言板功能敬请期待！',
          type: 'info',
        });
      } else if (key === '4') {
        this.$router.push('/friends');
      } else if (key === '5') {
        ElMessage({
          message: '登录评论功能敬请期待！',
          type: 'info',
        });
      } else if (key === '6') {
        this.$router.push('/admin-login');
      }
      console.log(key, keyPath);
    },
    handleSearch() {
      if (this.searchQuery.trim()) {
        // 跳转到搜索结果页面，并传递搜索关键词
        this.$router.push({ name: 'SearchResults', query: { q: this.searchQuery } });
      } else {
        ElMessage({
          message: '请输入搜索关键词！',
          type: 'warning',
        });
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: white; /* 将导航栏背景色改为白色 */
  color: black; /* 将导航栏文字颜色改为黑色 */
  height: 50px; /* 调整高度 */
  line-height: 50px; /* 确保文字垂直居中 */
  display: flex; /* 使用 flex 布局 */
  align-items: center; /* 垂直居中 */
  justify-content: space-between; /* 两边对齐 */
}

/* 统一设置菜单项和子菜单标题的颜色 */
.el-menu-demo .el-menu-item,
.el-menu-demo .el-sub-menu__title,
.custom-dropdown .el-menu-item {
  color: black !important; /* 设置所有菜单项和子菜单标题的文字颜色 */
  margin-right: 20px; /* 增加右侧间距 */
  display: flex; /* 使图标和文字水平对齐 */
  align-items: center; /* 使图标和文字垂直居中 */
}

/* 统一设置鼠标悬停时的颜色 */
.el-menu-demo .el-sub-menu__title:hover,
.el-menu-demo .el-menu-item:hover,
.custom-dropdown .el-menu-item:hover {
  color: #409EFF !important;
}

/* 更改下拉菜单的背景颜色和文字颜色 */
.custom-dropdown {
  background-color: white !important; /* 下拉菜单背景色改为白色 */
  color: black !important; /* 下拉菜单文字颜色改为黑色 */
}

.el-menu-demo {
  background-color: white; /* 将菜单背景色改为白色 */
  color: black; /* 将菜单文字颜色改为黑色 */
  height: 100%; /* 让菜单项占满整个导航栏高度 */
  display: flex;
  align-items: center; /* 垂直居中 */
  flex-grow: 1; /* 确保菜单项和搜索栏之间的空间 */
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
  margin-right: 60px;
}

.login-item,
.register-item {
  margin-left: auto;
}

.search-container {
  display: flex;
  align-items: center;
  margin-right: 20px; /* 可根据需要调整 */
}

.search-bar {
  margin-right: 10px;
}

.search-button {
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.search-icon {
  width: 16px; /* 设置图标宽度 */
  height: 16px; /* 设置图标高度 */
}

.menu-icon {
  width: 20px; /* 设置菜单图标宽度 */
  height: 20px; /* 设置菜单图标高度 */
  margin-right: 5px; /* 设置图标和文字之间的间距 */
}

/* 去掉文章分类的箭头 */
.category-submenu .el-sub-menu__icon-arrow {
  display: none;
}

/* 响应式布局，当页面宽度小于768px时，导航栏变为侧边栏 */
@media screen and (max-width: 768px) {
  .el-menu-demo {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
}
</style>
