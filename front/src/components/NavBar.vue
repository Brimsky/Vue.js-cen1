<template>
  <nav class="navbar" :class="`${is_expanded && 'is_expanded'}`">
    <div class="navbar-logo">StatStream</div>

    <div class="navbar-links" :class="`${is_expanded && 'is_expanded'}`">
      <router-link to="/"><div class="btn">Home</div></router-link>
      <router-link to="/chart"><div class="btn">Charts</div></router-link>
      <router-link to="/news"><div class="btn">News</div></router-link>
      <router-link to="/login"><div class="btn">Login</div></router-link>
      <router-link to="/signup"><div class="btn">Sign up</div></router-link>
    </div>

    <div class="navbar-mobile-wrapper">
      <div class="menu-toggle">
        <div class="navbar-toggle" @click="ToggleMenu">
          <span v-if="!is_expanded" class="material-symbols-outlined">menu</span>
          <span v-else class="material-symbols-outlined close-icon">close</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { RouterLink, RouterView } from 'vue-router';

const is_expanded = ref(false)

const ToggleMenu = () =>{
  is_expanded.value = !is_expanded.value
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: #fff;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 15px;
  transition: 0.9s ease-out;
}

.btn {
  user-select: none;
  font-size: 20px;
  height: 50px;
  min-width: 100px;
  background: #333;
  text-align: center;
  border-radius: 15px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}

a{
  border-radius: 20px;
}

.navbar-logo {
  font-size: 24px;
  font-weight: bold;
}

.navbar-links {
  display: flex;
  flex-direction: row;
  transition: 1s ease-is-out;
}

@media screen and (min-width: 769px) {
  .navbar-links {
    display: flex !important; /* Show .navbar-links */
  }

  .navbar-mobile-wrapper {
    display: none; /* Hide .navbar-mobile-wrapper */
  }
}

/* Show .navbar-links and hide .navbar-mobile-wrapper when screen width is 768px or below */
@media screen and (max-width: 768px) {
  .navbar-links {
    display: none; /* Hide .navbar-links */
  }

  .navbar-mobile-wrapper {
    display: block; /* Show .navbar-mobile-wrapper */
  }
}

.navbar-toggle {
  height: 30px;
  width: 30px;
  background: #33333300;
  transition: background 0.5s ease;
}

.material-symbols-outlined {
  cursor: pointer;
  user-select: none;
  background: #33333300;
  transition: background 0.5s ease; /* Add a transition property */
}

.material-symbols-outlined:hover {
  background: #555;
}

/* Add styles for expanded navbar */
.is_expanded .navbar-links {
  transition: 0.5s ease-out;
}

.is_expanded .navbar-links {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px; /* Adjust as needed based on your navbar height */
  left: 0;
  width: 100%;
  background-color: #333;
  z-index: 1;
}

.is_expanded .btn {
  display: block;
  width: 100%;
  text-align: center;
  margin: 0;
}

.close-icon {
  position: relative;
  transform: rotate(90deg);
  opacity: 1;
}

.material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 30px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
}

</style>

