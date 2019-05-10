// if array 0 is larger than array 15 alert tone
// increment the array

let stockValue = [403, 402, 399, 400, 407, 399, 404, 405, 309, 350];
let incrementor = 6;
const newArray = [];
const secondArray = [];
const auditoryChart = [];

for (i = 0; i < stockValue.length; i++) {
  newArray.push(stockValue[i]);
}

for (x = 1; x < stockValue.length; x++) {
  secondArray.push(stockValue[x]);
}

function playAudio(key) {
  // console.log(key);
  document.querySelector(`#${key}`).play();
}

for (i = 0; i < stockValue.length; i++) {
  if (newArray[i] > secondArray[i]) {
    incrementor++;
    // console.log(`a${incrementor++}`);
    auditoryChart.push(`a${incrementor}`);
  } else {
    incrementor--;
    // console.log(`a${incrementor--}`);
    auditoryChart.push(`a${incrementor}`);
  }
  // console.log(auditoryChart);
}

// Establish for loop + set time out to play array
let offset = 0;
auditoryChart.forEach(function(tone) {
  setTimeout(function() {
    console.log(tone);
    playAudio(tone);
  }, offset);
  offset += 500;
});
