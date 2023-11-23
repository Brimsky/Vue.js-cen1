<template>
    <nav class="navbar">
      <div class="navbar-logo">Logo</div>
      <router-link to="/"><div class="btn">Home</div></router-link>
      <router-link to="/chart"><div class="btn">Charts</div></router-link>
      <router-link to="/news"><div class="btn">News</div></router-link>
      <router-link to="/login"><div class="btn">Login</div></router-link>
      <router-link to="/signup"><div class="btn">Signup</div></router-link>
    </nav>
  </template>
  
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<style>
.btn{
  font-size: 20px;
  height: 50px;
  width: 100px;
  background: #333;
  text-align: center;
  border-radius: 15px;
  user-select: none;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn:hover {
  background: hsl(0, 0%, 48%);
  color: black;

}
.navbar {
    background-color: #333;
    color: #fff;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
}
.navbar-logo{
  margin-left: 50px;
}
  
.navbar-logo {
    font-size: 24px;
    font-weight: bold;
}
  
.router-link {
    color: #fff;
    text-decoration: none;
    margin-left: 20px;
}

</style>