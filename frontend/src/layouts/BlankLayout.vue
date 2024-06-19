<template>
    <div class="blank-layout">
    <div class="content">
      <router-view />
    </div>
    <FooterBar />
  </div>

  </template>
  
  <script>

import FooterBar from '@/components/FooterBar.vue'; // 导入 FooterBar 组件
  export default {
    name: 'BlankLayout',
    components: {
    FooterBar,
  },
  };
  </script>
  
  <style>
  .blank-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: white; /* 你可以根据需要调整背景颜色 */
  }

  .content {
  flex: 1;
  background-color: white;
}
  </style>
  