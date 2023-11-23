<template>
  <div class="Signup-container">
    <div class="center-content">
      <h2 class="animated-title">Signup</h2>
      <form @submit.prevent="signup" class="animated-form">
        <div class="form-group">
          <input type="text" id="username" placeholder="Username" v-model="username" name="username" required class="animated-input" />
        </div>
        <div class="form-group">
          <input type="text" id="surname" placeholder="Surname" v-model="surname" name="surname" required class="animated-input" />
        </div>
        <div class="form-group">
          <input type="email" id="email" placeholder="Email" v-model="email" name="email" required class="animated-input" />
        </div>
        <div class="form-group">
          <input type="password" id="password" placeholder="Password" name="Password" v-model="password" required class="animated-input" />
        </div>
        <router-link to="/login" class="animated-link"><h4>Don't have any account?</h4></router-link>
        <button type="submit" class="animated-button">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      surname: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async signup() {
      try {
        // Make an HTTP POST request to your server endpoint
        const response = await axios.post('http://localhost:3991/api/signup', {
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
.form-group {
  margin-bottom: 25px;
}
.Signup-container {
  max-width: 600px;
  height: 500px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, .1);
  color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  border-radius: 20px;
  margin-top: 110px;
  margin-bottom: 20px;
  transition: 0.5s;
  backdrop-filter: blur(30px);
  animation: fadeIn 1s ease-out;
}

.center-content {
  display: flex;
  flex-direction: column;
}

label.animated-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  animation: fadeInLeft 1s ease-out;
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
  animation: fadeInRight 1s ease-out;
}

h4.animated-link {
  margin-top: 10px;
  color: #60ee73;
  cursor: pointer;
  animation: fadeInUp 1s ease-out;
}

</style>
