<template>
    <div class="quote-container">
      <div class="quote-display" :style="{ color: currentColor }">
        <span v-for="line in quoteLines" :key="line">{{ line }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'QuoteDisplay',
    data() {
      return {
        quote: '有志者事竟成，破釜沉舟，百二秦关终属楚；苦心人天不负，卧薪尝胆，三千越甲可吞吴',
        colors: ['red', 'green', 'blue', 'yellow', 'purple', 'orange'],
        currentColor: 'black'
      };
    },
    computed: {
      quoteLines() {
        return this.quote.split('；'); // 按分号分割
      }
    },
    mounted() {
      this.changeColor();
    },
    methods: {
      changeColor() {
        setInterval(() => {
          this.currentColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        }, 1000); // 每隔1秒变换一次颜色
      }
    }
  };
  </script>
  
  <style scoped>
  .quote-container {
    text-align: center;
    margin: 20px 0;
  }
  .quote-display {
    font-size: 48px;
    transition: color 1s; /* 增加颜色变换的过渡效果 */
    font-family: 'ZCOOL KuaiLe', sans-serif; /* 应用新字体 */
  }
  .quote-display span {
    display: block;
  }
  </style>
  