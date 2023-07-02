<template>
    <div class="main-layout">
      <!-- <Header /> -->
      <div class="content">
        <router-view />
      </div>
      <!-- <Footer /> -->
    </div>
  </template>
  
  <script>
  // import Header from '@/components/HeaderComponent.vue';
  // import Footer from '@/components/HeaderComponent.vue';
  
  export default {
    components: {
      // Header,
      // Footer,
    },
  };
  </script>
  
  <style scoped>
  .main-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .content {
    flex-grow: 1;
  }
  </style>
  