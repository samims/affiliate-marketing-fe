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
    <div class="search-bar">
      <input type="text" placeholder="Search">
      <button>Search</button>
    </div>
    <div class="user-account">
      <router-link to="/login">Login</router-link>
      <a href="/signup">Sign Up</a>
    </div>
  </header>
</template>

<style>
.main-header {
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
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

.nav-menu ul {
  list-style: none;
  display: flex;
}

.nav-menu ul li {
  margin-right: 15px;
}

.nav-menu ul li a {
  text-decoration: none;
  color: #333;
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

.user-account a {
  margin-left: 10px;
  text-decoration: none;
  color: #333;
}
</style>
