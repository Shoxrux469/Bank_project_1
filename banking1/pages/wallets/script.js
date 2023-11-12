import { header } from "../../modules/ui";
import { aside } from "../../modules/ui";
import Chart from 'chart.js/auto';
header();

aside();
let doughnut = document.getElementById('doughnut')
let line_graph = document.querySelector('#line_chart')
let line_graph1 = document.querySelector('#line_chart')
let line_graph2 = document.querySelector('#line_chart')


const doughnut_data = {
  labels: [],
  datasets: [
    {
      label: "My First Dataset",
      data: [50, 300, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
    },
  ],
};

new Chart(doughnut, {
  type: "doughnut",
  data: doughnut_data,
});

const line_graph_data = {
    labels: [5, 10, 15, 20, 25, 30],
    datasets: [{
      label: '+2.59%',
      data: [65, 21, 80, 20, 55, 20, 80, 5],
      borderWidth: 3,
      pointStyle: false,
      borderColor: "rgb(75, 192, 192)",
      fill: false,
      tension: 0.01,
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
  new Chart(line_graph1, {
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
  new Chart(line_graph2, {
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