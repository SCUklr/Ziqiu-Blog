<template>
  <footer class="footer">
    <p>托管于 Gitea、阿里云 提供静态文件存储服务、百度统计 提供网站统计服务、CloudXNS 提供 DNS 解析服务。</p>
    <p>© 2024 ziqiu.icu (关联系统) 由 Vue3、Flask 等技术实现</p>
    <p>Made with ❤️ by Ziqiu，苏ICP备20012725号-1</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
};
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  text-align: center;
  padding: 20px 0;
  position: relative;
}
</style>
