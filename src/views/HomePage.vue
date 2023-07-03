<template>
  <div class="home-page">
    <h1>Welcome to the Home Page</h1>
    <p>Feel free to explore our content!</p>
    <button v-if="isLoggedIn" @click="logout">Logout</button>

    <ckeditor :editor="editor" v-model="content"></ckeditor>
    <button @click="saveContent">Save Content</button>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';

export default {
  components: {
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      isLoggedIn: false,
      content: '<p>Start typing here...</p>',
      editor: ClassicEditor,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push({ name: 'login' });
    },
    saveContent() {
      console.log('Editor content:', this.content);
      // Implement saving logic here
    },
  },
};
</script>

<style scoped>
.home-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: #777;
  margin-bottom: 30px;
}

button {
  padding: 10px 20px;
  background-color: #17c350;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
