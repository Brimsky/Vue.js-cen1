<template>
  <div class="Signup-container">
    <div class="center-content">
      <h2 class="title">Sign up</h2>
      <form @submit.prevent="signup" class="form">
        <div class="form-group">
          <input type="text" id="name" placeholder="Name" v-model="username" name="name" required class="input" />
        </div>
        <div class="form-group">
          <input type="text" id="surname" placeholder="Surname" v-model="surname" name="surname" required class="input" />
        </div>
        <div class="form-group">
          <input type="email" id="email" placeholder="Email" v-model="email" name="email" required class="input" />
        </div>
        <div class="form-group">
          <input type="password" id="password" placeholder="Password" name="Password" v-model="password" required class="input" />
        </div>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
        <router-link to="/login" class="animated-link"><h4>Already have account?</h4></router-link>
        <button type="submit" class="button">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            surname: '',
            email: '',
            password: '',
            errorMessage: null,
            successMessage: null,
        };
    },
    methods: {
        signup() {
            const signupData = {
                name: this.username,
                surname: this.surname,
                email: this.email,
                password: this.password
            };

            // Make a POST request to the server
            axios.post('http://localhost:3991/signup', signupData)
                .then(response => {
                    console.log(response.data);

                    // Check the content of the response and set the success message accordingly
                    if (response.data.message) {
                        this.successMessage = response.data.message;
                    }

                    this.errorMessage = null;
                })
                .catch(error => {
                    console.error('Error submitting signup information:', error);
                    this.successMessage = null; 

                    if (error.response && error.response.status === 400 && error.response.data.error === 'Email address is already in use. Please use a different email address.') {
                        this.errorMessage = 'Email address is already in use. Please use a different email address.';
                    } else {
                        this.errorMessage = 'An error occurred during signup. Please try again.';
                    }
                });
        }
    }
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
.form-group {
  margin-bottom: 25px;
}
.Signup-container {
  max-width: 600px;
  /* height: 500px; */
  margin: 0 auto;
  background-color: rgba(255, 255, 255, .1);
  color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  border-radius: 20px;
  margin-top: 110px;
  margin-bottom: 20px;
  transition: 0.5s;
  backdrop-filter: blur(30px);
  transition: height 0.3s
}

.center-content {
  display: flex;
  flex-direction: column;
}

label.label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  animation: fadeInLeft 1s ease-out;
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
  animation: fadeInRight 1s ease-out;
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
