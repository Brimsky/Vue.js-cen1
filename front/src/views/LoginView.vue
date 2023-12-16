<template>
  <div class="Login-container">
    <div class="center-content">
      <h2 class="title">Login</h2>
      <form @submit.prevent="login" class="form">
        <div class="form-group">
          <input type="email" id="email" v-model="loginEmail" placeholder="Email" name="email" required class="input" />
        </div>
        <div class="form-group-pass">
          <input type="password" id="password" v-model="loginPassword" placeholder="Password" name="password" required class="input" />
        </div>
        <div v-if="loginErrorMessage" class="error-message">{{ loginErrorMessage }}</div>
        <div v-if="loginSuccessMessage" class="success-message">{{ loginSuccessMessage }}</div>
        <router-link to="/signup" class="link"><h4>Don't have an account?</h4></router-link>
        <button type="submit" value="Login" class="button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loginEmail: '',
      loginPassword: '',
      loginErrorMessage: null,
      loginSuccessMessage: null,
    };
  },
  methods: {
    login() {
      const loginData = {
        email: this.loginEmail,
        password: this.loginPassword,
      };

      axios.post('http://localhost:3991/login', loginData)
        .then(response => {
          console.log(response.data);

          if (response.data.message) {
            this.loginSuccessMessage = response.data.message;
          }

          this.loginErrorMessage = null;
        })
        .catch(error => {
          console.error('Error during user login:', error);

          this.loginSuccessMessage = null;

          if (error.response && error.response.status === 401) {
            this.loginErrorMessage = 'Invalid credentials. Please check your email and password.';
          } else {
            this.loginErrorMessage = 'An error occurred during login. Please try again.';
          }
        });
    },
  },
};
</script>


<style scoped>

.error-message {
  width: 90%;
  display: flex;
  padding: 10px;
  background-color: rgb(230, 33, 19);
  color: #fff;
  border-radius: 5px;
  margin: 5%;
  transition: 0.5s;
  justify-content: center;
}
.success-message {
  width: 90%;
  display: flex;
  padding: 10px;
  background-color: rgb(22, 151, 5);
  color: #f5f5f5;
  border-radius: 5px;
  margin: 5%;
  transition: 0.5s;
  justify-content: center;
}
h2.title {
  color: #fff;
  text-align: center;
  font-size: 3em;
  margin-bottom: 1em;
  animation: fadeInDown 1s ease-out;
}
input.input::placeholder {
  color: #ccc;
  font-weight: bold;
  opacity: 1;
  animation: fadeIn 1s ease-out;
}

.Login-container {
  max-width: 600px;
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

form.form {
  text-align: center;
  animation: fadeInUp 1s ease-out;
}

button.button {
  width: 90%;
  padding: 10px;
  background-color: #a6eeb0;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5%;
  transition: 0.5s;
  animation: fadeIn 1s ease-out;
}

button.button:hover {
  background-color: #60ee73;
}

input.input {
  background-color: rgb(44, 43, 43);
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  color: white;
}
::-ms-reveal {
  filter: invert(100%);
}


h4.link {
  margin-top: 10px;
  color: #60ee73;
  cursor: pointer;
  animation: fadeInUp 1s ease-out;
}
</style>
