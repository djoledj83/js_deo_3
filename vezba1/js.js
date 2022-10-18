// // Ucitavamo broj redova

// let n = parseInt(prompt(`Unesite koliko redova zelite da bude jelkica:`)); 
//     let string = "";
//     // Spoljna petlja za redove
//     for (let i = 1; i <= n; i++) {
//       // Petlja koja ispisuje prazna polja
//       for (let j = n; j > i; j--) {
//         string += " ";
//       }
//       // ispis zvezdice
//       for (let k = 0; k < i * 2 - 1; k++) {
//         string += "*";
//       }
//       string += "<br>";
//     }
//     document.write(`<pre>${string}</pre>`);

let n = parseInt(prompt(`Unesite koliko redova zelite da bude jelkica:`)); // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
document.write(`<pre>${string}</pre>`);
