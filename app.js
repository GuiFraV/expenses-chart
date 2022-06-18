const labels = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun',
  ];

let rNumber = Math.floor(Math.random()*60);
let n4 = Math.floor(Math.random()* 60);
let n3 = Math.floor(Math.random() * 60);
let n2 = Math.floor(Math.random() * 60);
let n1 = Math.floor(Math.random() * 60);

  const data = {
    labels: labels,
    datasets: [{
      backgroundColor: 'rgba(236, 117, 93, 1)',
      borderColor: 'rgba(236, 117, 93, 1)',
      label: "$",
      data: [n1, n2, 52.36, 31.07, n3, n4, rNumber],
      borderRadius: 5,
      borderSkipped: false,
      hoverBackgroundColor: 'rgba(180, 224, 229, 1)',
      barThickness : 50.36
    }]
  };

  // tooltip
const titleTooltip = (tooltipItems) => {
  return '';
};

var labelTooltip = data.datasets[0].data.forEach(function(tooltipItems) {
  console.log('$'+ tooltipItems);
  return "$"+ tooltipItems;
});

console.log(labelTooltip);

  const config = {
    type: 'bar',
    data: data,
    options: {      
        maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          display: false,
        },
        tooltip: {
          yAlign: 'bottom',
          displayColors: false,
          callbacks: {
            title: titleTooltip,
            label: labelTooltip,
          }
      },
        title: {
          display: false,
          text: 'Chart.js Bar Chart'
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
          }
        },
        y: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks:{
            display: false,
          }
        }
      },

    },
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );