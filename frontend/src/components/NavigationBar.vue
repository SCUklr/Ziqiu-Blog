<template>
  <div class="navbar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="0" class="logo">子丘的个人博客</el-menu-item>
      <el-menu-item index="1">主页</el-menu-item>
      <el-menu-item index="2">文章分类</el-menu-item>
      <el-menu-item index="3">留言板</el-menu-item>
      <el-menu-item index="4">友链</el-menu-item>
      <el-menu-item index="5" class="login-item">登录</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';
export default {
    name: 'NavigationBar',
    data() {
        return {
            activeIndex: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
          if (key === '5') {
        ElMessage({
          message: '登录评论功能敬请期待！',
          type: 'info',
        });
      }
            console.log(key, keyPath);
        }
    }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  height: 50px; /* 调整高度 */
  line-height: 50px; /* 确保文字垂直居中 */
}

.el-menu-demo .el-menu-item {
  color: aqua; /* 设置所有菜单项的文字颜色 */
  margin-right: 20px; /* 增加右侧间距 */
}

.el-menu-demo {
  background-color: transparent;
  color: #fff;
  height: 100%; /* 让菜单项占满整个导航栏高度 */
  display: flex;
  align-items: center; /* 垂直居中 */
}

.el-menu-item {
  color: #fff;
}

.el-menu-item:hover {
  color: #409EFF;
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
