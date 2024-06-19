<template>
  <div class="contact-card">
    <img src="@/assets/Anna.jpg" alt="profile" class="profile-image" />
    <h2>{{ name }}</h2>
    <p>{{ bio }}</p>
    <div class="social-icons">
      <div 
        class="social-icon" 
        @mouseenter="showQRCode('qq')" 
        @mouseleave="hideQRCode" 
        title="QQ">
        <img :src="qqLogo" alt="QQ Logo" class="social-logo" />
        <img v-if="showingQRCode === 'qq'" :src="qqQRCode" alt="QQ QR Code" class="qr-code" />
      </div>
      <div 
        class="social-icon" 
        title="Bilibili">
        <a :href="bilibiliLink" target="_blank">
          <img :src="bilibiliLogo" alt="Bilibili Logo" class="social-logo" />
        </a>
      </div>
      <div 
        class="social-icon" 
        @mouseenter="showQRCode('wechat')" 
        @mouseleave="hideQRCode" 
        title="微信">
        <img :src="wechatLogo" alt="WeChat Logo" class="social-logo" />
        <img v-if="showingQRCode === 'wechat'" :src="wechatQRCode" alt="WeChat QR Code" class="qr-code" />
      </div>
      <div 
        class="social-icon" 
        title="GitHub">
        <a :href="githubLink" target="_blank">
          <img :src="githubLogo" alt="GitHub Logo" class="social-logo" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCard',
  data() {
    return {
      name: "Anna's No.1 Fan: Ziqiu",
      bio: 'Welcome to contact me.',
      bilibiliLink: 'https://space.bilibili.com/123352664?spm_id_from=333.1007.0.0',
      githubLink: 'https://github.com/SCUklr',
      qqLogo: require('@/assets/icon/qq.svg'),
      bilibiliLogo: require('@/assets/icon/bilibili.svg'),
      wechatLogo: require('@/assets/icon/wechat.svg'),
      githubLogo: require('@/assets/icon/github.svg'),
      qqQRCode: require('@/assets/QRCode/qq-qrcode.jpg'),
      wechatQRCode: require('@/assets/QRCode/wechat-qrcode.jpg'),
      showingQRCode: null
    };
  },
  methods: {
    showQRCode(platform) {
      this.showingQRCode = platform;
    },
    hideQRCode() {
      this.showingQRCode = null;
    }
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
  margin-top: 0; /* 确保顶部没有额外的 margin */
  border: 1px solid yellow; /* 调试边框 */
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

.social-icon {
  position: relative;
}

.social-logo {
  width: 24px;
  height: 24px;
}

.qr-code {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 150px; /* 最大宽度 */
  width: auto;
  height: auto;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
