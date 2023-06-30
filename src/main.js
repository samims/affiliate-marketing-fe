// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
// import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/LoginForm.vue'
//import Login from './components/LoginForm.vue';

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       path: '/login',
//       name: 'login',
//       component: App.Login
//     }
//   ]
// })

// createApp(App).use(router).mount('#app')
createApp(App).component('Login', Login).mount('#app')



