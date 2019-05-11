let app = {};
const stockValue = [100, 150, 200, 250, 200, 300, 200, 250, 300, 350, 400];
// const stockValue = [1, 2, 3, 4, 5, 6, 7];
// const stockValue = [7, 6, 5, 4, 3, 2];
let incrementor = 7;
// const newArray = [];
const secondArray = [];
const auditoryChart = [];

// Make arrays
// for (i = 0; i < stockValue.length; i++) {
//   newArray.push(stockValue[i]);
// }
for (x = 1; x < stockValue.length; x++) {
  secondArray.push(stockValue[x]);
}
// const stockValue2 = stockValue.shift();

// function to
function playAudio(key) {
  document.querySelector(`#${key}`).play();
}
// loop to compare array values and increment which tone file to call
for (i = 0; i < stockValue.length; i++) {
  if (stockValue[i] < secondArray[i]) {
    console.table(stockValue[i], secondArray[i]);
    incrementor++;
    auditoryChart.push(`a${incrementor}`);
  } else if (stockValue[i] > secondArray[i]) {
    incrementor--;
    auditoryChart.push(`a${incrementor}`);
  }
}
// Establish for loop + set time out to play array
let offset = 1000;
auditoryChart.forEach(function(tone) {
  setTimeout(function() {
    console.log(tone);
    playAudio(tone);
  }, offset);
  offset += 1000;
});

// Chart js

let ctx = document.getElementById("myChart").getContext("2d");
let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: stockValue,
    datasets: [
      {
        label: "Auditory Charts",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: stockValue
      }
    ]
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: "#FFFFFF"
          },
          ticks: {
            beginAtZero: false
          }
        }
      ]
    }
  }
});
