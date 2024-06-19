<!-- src/pages/FriendsLink.vue -->
<template>
  <div class="friends-link">
    <h1>友链</h1>
    <div class="friend-cards">
      <FriendCard v-for="friend in friends" :key="friend.id" :friend="friend" />
    </div>
  </div>
</template>

<script>
import FriendCard from '../components/FriendCard.vue';

export default {
  name: 'FriendsLink',
  components: {
    FriendCard
  },
  data() {
    return {
      friends: [
        { id: 1, name: 'Canals233', url: 'https://github.com/Canals233', image: 'https://avatars.githubusercontent.com/u/55939284?v=4', description: '学校吧群里认识的前端大佬，在腾讯实习' },
      ],
    };
  },
};
</script>

<style scoped>
.friends-link {
  padding: 20px;
}

.friend-cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
