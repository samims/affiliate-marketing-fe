<template>
    <div class="main-layout">
      <HeaderComponent />
        
      <main class="main-content">
        <slot>
          <router-view />
        </slot>
      </main>

  
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import Login from '@/componenets/LoginForm.vue'
  
  export default {
    components: {
      HeaderComponent,
      FooterComponent,
      Login
    }
  };
  </script>
  
  <style>
  .main-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .main-content {
    flex-grow: 1;
    padding: 20px;
  }
  </style>
  