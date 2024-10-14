const character = "!";
const count = 8;
const rows = [];
let inverted = false; //change to invert the pyramid

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

//examples with different type of loops
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

//while loop
/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

//loop to invert the pyramid
/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);