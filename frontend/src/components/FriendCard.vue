<template>
    <div class="friend-card">
      <a :href="friend.url" target="_blank" class="friend-card-link">
        <div class="friend-card-content">
          <img :src="friend.image" alt="Friend Image" class="friend-image" />
          <div class="friend-info">
            <h3>{{ friend.name }}</h3>
            <p>{{ friend.description }}</p>
          </div>
        </div>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FriendCard',
    props: {
      friend: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .friend-card {
    border-radius: 8px;
    overflow: hidden;
    margin: 10px 0;
    transition: box-shadow 0.3s ease;
    background-color: transparent; /* 设置背景色为透明 */
  }
  
  .friend-card:hover {
    box-shadow: none; /* 移除悬停阴影 */
  }
  
  .friend-card-link {
    text-decoration: none; /* 移除链接下划线 */
    color: inherit; /* 保持原有文本颜色 */
  }
  
  .friend-card-content {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    background-color: white; /* 可选：设置内容背景色为白色以区分透明背景 */
    border-radius: 8px; /* 可选：添加圆角 */
  }
  
  .friend-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-right: 1px solid #ddd;
  }
  
  .friend-info {
    padding: 10px;
  }
  
  .friend-info h3 {
    margin: 0;
    font-size: 1.2em;
  }
  
  .friend-info p {
    margin: 5px 0 0;
    color: #666;
  }
  </style>
  