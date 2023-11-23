<template>
  <div class="Login-container">
    <div class="center-content">
      <h2 class="animated-title">Login</h2>
      <form @submit.prevent="login" class="animated-form">
        <div class="form-group">
          <input type="email" id="email" v-model="email" placeholder="Email" name="email" required class="animated-input" />
        </div>
        <div class="form-group-pass">
          <input type="password" id="password" v-model="password" placeholder="Password" name="password" required class="animated-input" />
        </div>
        <router-link to="/signup" class="animated-link"><h4>Don't have an account?</h4></router-link>
        <button type="submit" class="animated-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        // Make an HTTP POST request to your server endpoint
        const response = await axios.post('http://localhost:3991/api/login', {
          email: this.email,
          password: this.password
        });

        // Handle the server response
        console.log(response.data); // You can do something with the response

        // Redirect the user or perform any other actions as needed
      } catch (error) {
        console.error('Error submitting signup information:', error);
        // Handle errors, show a message to the user, etc.
      }
    }
  }
};
</script>

<style scoped>
h2.animated-title {
  color: #fff;
  text-align: center;
  font-size: 3em;
  margin-bottom: 1em;
  animation: fadeInDown 1s ease-out;
}
input.animated-input::placeholder {
  color: #ccc;
  font-weight: bold;
  opacity: 1;
  animation: fadeIn 1s ease-out;
}

.Login-container {
  max-width: 600px;
  height: 400px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, .1);
  color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 20px;
  margin-top: 100px;
  margin-bottom: 20px;
  transition: 0.5s;
  backdrop-filter: blur(30px);
  animation: fadeIn 1s ease-out;
}

.form-group-pass {
  margin-top: 20px;
}

.center-content {
  display: flex;
  flex-direction: column;
}

form.animated-form {
  text-align: center;
  animation: fadeInUp 1s ease-out;
}

button.animated-button {
  width: 90%;
  padding: 10px;
  background-color: #a6eeb0;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.5s;
  animation: fadeIn 1s ease-out;
}

button.animated-button:hover {
  background-color: #60ee73;
}

input.animated-input {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  color: #333;
}

h4.animated-link {
  margin-top: 10px;
  color: #60ee73;
  cursor: pointer;
  animation: fadeInUp 1s ease-out;
}
</style>
