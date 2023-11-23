<template>
  <div>
    <header>
      <NavBar />
    </header>
    <div v-if="loading">Loading...</div>
    <div v-if="data">
      <HomeView/>
    </div>
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
  data() {
    return {
      loading: true,
      data: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.post('http://your-api-endpoint/data', {
        
        });

        this.data = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    },
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
