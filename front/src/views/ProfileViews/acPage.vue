<template>
  <div class="page">
    <div class="Profile-container">
        <!-- profila fona bilde -->
        <div>{{ UserWhall }}</div> 
    </div>
    <div class="user-info">
        <div class="user-pic"></div>
        <div class="user-name-surname">
            {{ username }} {{ name }} {{ surname }}
        </div>
        <div class="user-settings-btn"></div>
        <div class="profile-edit-btn"></div>
        <!-- poga kas parāda tavas mīļākās izveletās kategorijas kam sekot -->
        <div class="my-favorite-cayegories"></div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default{
  data(){
    return{
      UserWhall:'',
      username:'',
      name:'',
      surname:'',
    };
  },
  methods:{
    showUserData(){

    }
  }

}
</script>

<style>
.Profile-container{
  margin:auto;
  width: 100%;
  height: 80%;
  color: red;
}
</style>