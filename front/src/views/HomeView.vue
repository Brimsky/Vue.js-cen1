<template>
    <div class="news-container">
      <div class="news-text">
        <div class="row">
        <img v-for="img in images" v-bind:src="img"/>
      </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          consequuntur perferendis, asperiores dignissimos suscipit temporibus fuga
          minima ad qui soluta id sequi quis unde tenetur debitis totam. Libero,
          aliquid voluptatum.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default{
    data() {
        return {
            images:['https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
        }
    }
  }
  </script>
  
  <style scoped>
  .news-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    margin: 20px 20px ;
    padding: 20px;
    background-color: rgba(255, 255, 255, .1);
    backdrop-filter: blur(30px);
    border-radius: 20px;
    pointer-events:visible;
    transition: 0.5s;
  }

  .news-container:hover {
    box-shadow: 20px;
    color: greenyellow;
  }
  
  img {

    width: 200px;
  }
  .news-text {
    padding: 10px;
  }
  
  p {
    margin: 0;
    color: white;
  }

  </style>