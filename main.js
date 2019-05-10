// if array 0 is larger than array 15 alert tone
// increment the array

let stockValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tones = ["a", "b", "c", "d", "e", "g", "a", "b", "c", "d", "e", "g"];
let incrementor = 6;

if (stockValue[0] > 1) {
  incrementor++;
  console.log(incrementor);
} else {
  incrementor--;
  console.log(incrementor);
}

// import audio files
// const a = new Audio("./A1.wav");
// a();
