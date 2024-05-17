<template>
    <div class="contact-card">
      <img src="@/assets/Anna.jpg" alt="profile" class="profile-image" />
      <h2>{{ name }}</h2>
      <p>{{ bio }}</p>
      <div class="social-icons">
        <a :href="qqLink" target="_blank" title="QQ">
        <icon-qq />
      </a>
      <a :href="bilibiliLink" target="_blank" title="Bilibili">
        <icon-bilibili />
      </a>
      <a :href="wechatLink" target="_blank" title="微信">
        <icon-wechat />
      </a>
      <a :href="githubLink" target="_blank" title="GitHub">
        <icon-github />
      </a>
      </div>
    </div>
  </template>
  
  <script>
import { IconQq, IconBilibili, IconWechat, IconGithub } from '@icon-park/vue';

export default {
  name: 'ContactCard',
  components: {
    IconQq,
    IconBilibili,
    IconWechat,
    IconGithub
  },
  data() {
    return {
      // 注意这里使用了模板字符串来解析路径别名
      profileImage: `@/assets/Anna.jpg`,
      name: "Anna's No.1 Fan: Ziqiu",
      bio: 'Welcome to contact me.',
      qqLink: 'https://qq.com',
      bilibiliLink: 'https://www.bilibili.com',
      wechatLink: 'https://weixin.qq.com',
      githubLink: 'https://github.com'
    };
  }
};
</script>
  
  <style scoped>
  .contact-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
  }
  
  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  
  h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 20px;
    color: #666;
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  
  .social-icons a {
    color: #333;
    font-size: 1.5em;
  }
  
  .social-icons a:hover {
    color: #409EFF;
  }
  </style>
  