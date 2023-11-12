import { header } from "./modules/ui.js";
import { aside } from "./modules/ui.js";
import Chart from 'chart.js/auto';

header();

aside();

let line_graph = document.getElementById('line_chart')
let spending_line = document.getElementById('spending_line')
let doughnut = document.getElementById('doughnut')

const line_graph_data = {
  labels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 21, 80, 20, 55, 20, 80, 5, 70, 42, 70, 20, 90],
    borderWidth: 3,
    borderColor: "rgb(75, 192, 192)",
    fill: false,
    tension: 0.5,
  }]
};

new Chart(line_graph, {
  type: 'line',
  data: line_graph_data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
})


const doughnut_data = {
  labels: [
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [50, 300, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
  }]
};

new Chart(doughnut, {
  type: 'doughnut',
  data: doughnut_data
})


const spending_line_data = {
  labels: [2, 4, 6, 8, 10, 12, 14, 16],
  datasets: [{
    label: 'My First Dataset',
    data: [3, 34, 26, 58, 45, 81, 59, 92, 84, 100],
    fill: false,
    pointStyle: false,
    borderWidth: 2,
    borderColor: "rgb(75, 192, 192)",
    tension: 0.5,
  }]
};

new Chart(spending_line, {
  type: 'line',
  data: spending_line_data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
})
