<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, LineController, PointElement, LineElement } from 'chart.js';

export default {
  mounted() {
    const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Wood',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: [12, 19, 3, 5, 2],
        },
        {
          label: 'Tara',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: [8, 12, 6, 8, 4],
        },
      ],
    };

    const chartOptions = {
      scales: {
        x: {
          type: CategoryScale,
          labels: ['January', 'February', 'March', 'April', 'May'],
        },
        y: {
          type: LinearScale,
          beginAtZero: true,
        },
      },
      plugins: {
        title: {
          display: true,
          text: 'Sample Chart',
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
    };

    // Use ref to access the canvas element
    const canvasRef = ref(null);

    onMounted(() => {
      // Access the canvas element through the ref
      const ctx = canvasRef.value.getContext('2d');

      new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions,
        plugins: [Title, Tooltip, Legend, LineController, CategoryScale, LinearScale, PointElement, LineElement],
      });
    });
  },
};
</script>

<style>
</style>