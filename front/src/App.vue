<template>
  <div>
    <header>
      <NavBar />
    </header>
    <RouterView />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import axios from 'axios';
import HomeView from './views/HomeView.vue';

export default {
  components: {
    NavBar,
    HomeView
},
  
};
</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
