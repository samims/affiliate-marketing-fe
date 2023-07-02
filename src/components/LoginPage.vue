<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" placeholder="Enter your email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" placeholder="Enter your password" required>
      </div>
      <div class="form-group">
        <button type="submit">Login</button>
      </div>
    </form>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async login(event) {
      event.preventDefault();
      try {
        // Make an API request to authenticate the user
        const apiUrl = 'http://0.0.0.0:8000'; // Replace with your API URL

        const response = await fetch(apiUrl + "/login/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });

        if (response.ok) {
          // Login successful
          const data = await response.json();

          // Store the authentication token in local storage
          localStorage.setItem('token', data.token);

          // Redirect the user to the home page
          this.$router.push({ name: 'home' });
        } else {
          // Login failed
          const errorData = await response.text();
          this.errorMessage = errorData;
        }
      } catch (error) {
        this.errorMessage = 'An error occurred during login.';
        console.error('An error occurred during login:', error);
      }
    },
  },
  created() {
    // Check if the user is already authenticated
    const token = localStorage.getItem('token');
    if (token) {
      // Redirect the user to the home page
      this.$router.push({ name: 'home' });
    }
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="email"],
input[type="password"] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  padding: 10px;
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

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
