<template>
  <div>
    <Charts />
  </div>
</template>

<script>
//import { onMounted, ref } from 'vue';
//import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, LineController, PointElement, LineElement } from 'chart.js';
import Charts from '../components/Charts.vue';

export default{
  name: "chart",
  components:{
    Charts,
  },
};

</script>

<style>
</style>