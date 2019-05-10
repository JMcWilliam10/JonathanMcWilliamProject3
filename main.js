// if array 0 is larger than array 15 alert tone
// increment the array

let stockValue = [403, 402, 399, 400, 407, 399, 404, 405, 309, 350];
let tones = ["a", "b", "c", "d", "e", "g", "a", "b", "c", "d", "e", "g"];
let incrementor = 6;
var synth = new Tone.Synth().toMaster();

// for (i = 0; i < stockValue.length; i++) {
//   console.log(stockValue[i]);
//   for (x = 1; x < stockValue.length; x++) {
//     console.log(stockValue[x], stockValue[i]);
//     if (stockValue[i] > stockValue[x]) {
//       incrementor++;
//       synth.triggerAttackRelease("C4", "16n");
//       // console.log("up");
//     } else {
//       incrementor--;
//       synth.triggerAttackRelease("B4", "16n");
//       // console.log("down");
//     }
//     console.log(i);
//   }
// }

const newArray = [];
let secondArray = [];

for (i = 0; i < stockValue.length; i++) {
  newArray.push(stockValue[i]);
  console.log(newArray);
}

for (x = 1; x < stockValue.length; x++) {
  secondArray.push(stockValue[x]);
  console.log(secondArray);
}

for (i = 0; i < stockValue.length; i++) {
  // console.log(newArray[i], secondArray[i]);
  if (newArray[i] > secondArray[i]) {
    incrementor++;
    console.log(incrementor);
  } else {
    incrementor--;
    console.log(incrementor);
  }
}

//create a synth and connect it to the master output (your speakers)
// var synth = new Tone.Synth().toMaster();

//play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "16n");

// import audio files
// const a = new Audio("./A1.wav");
// a();
