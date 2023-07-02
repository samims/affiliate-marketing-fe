<template>
  <header class="main-header">
    <div class="logo">
      <img src="/assets/logo.png" alt="Logo">
      <h1>Review Hive</h1>
    </div>
    <nav class="nav-menu">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <div class="user-account">
      <router-link v-if="!isAuthenticated" to="/login">Login</router-link>
      <!-- <router-link v-if="!isAuthenticated" to="/signup">Sign Up</router-link> -->
      <router-link v-if="isAuthenticated" to="/logout" @click="logout">Logout</router-link>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Search">
      <button>Search</button>
    </div>
    
  </header>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      const token = localStorage.getItem('token');
      return !!token;
    },
  },
  methods: {
    logout() {
      // Perform the logout logic here
      // Clear the authentication token from local storage
      localStorage.removeItem('token');
      this.isAuthenticated

      // Redirect the user to the login page or any other appropriate page
      this.$router.push({ name: 'login' });
    },
  },
  watch: {
    // Watch for changes in the isAuthenticated property
    isAuthenticated: {
      immediate: true, // Trigger the watcher immediately when the component is created
      handler(newValue) {
        // If isAuthenticated becomes false, redirect the user to the login page
        if (!newValue) {
          this.$router.push({ name: 'login' });
        }
      },
    },
  },
};
</script>




<style scoped>
.main-header {
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.user-account {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.user-account a {
  margin-left: 10px;
  text-decoration: none;
  color: #333;
}

.nav-menu ul {
  list-style: none;
  display: flex;
  margin-top: 10px;
}

.nav-menu ul li {
  margin-right: 15px;
}

.nav-menu ul li a {
  text-decoration: none;
  color: #333;
}

.search-bar {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.search-bar input[type="text"] {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-bar button {
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .main-header {
    flex-direction: column;
    padding: 10px;
  }

  .logo {
    margin-bottom: 10px;
    text-align: center;
  }

  .nav-menu {
    margin-bottom: 10px;
  }

  .user-account {
    margin: 0;
    text-align: center;
  }

  .search-bar {
    justify-content: center;
  }
}
</style>
