// let i = 10;
// while (i>0) {
//   document.write(`${i} <br>`);
//   i--;
// }
// document.write(`Srecna Nova godina`);
///////////////////////////////////////////

// let a=20;
// let brojac=0;

// while(a<=40){
//   if (a%3==0) {
//     brojac++;
//   }
//   a++;  
// }
// document.write(`${brojac}`);
////////////////////////////////

// let n = parseInt(prompt(`Unesite broj:`));
// zbir = 0;

// while (n) {
//   zbir += n % 10;
//   n = parseInt(n / 10);
// }
// document.write(zbir);
/////////////////////////////////////////////

// let a = Math.floor(Math.random() * 100);
// let b = parseInt(prompt(`Unesi broj:`))

// if (b<a) {
//   document.write(`Vas broj je manji od zamilsljenog`);
//   } else if (b>a) {
//     document.write(`Vas broj je veci od zamilsljenog`);
//   } else {
//     document.write(`Alal ti vera :)`);
//   }
/////////////////////////////////////////////

// let a = Math.floor(Math.random() * 100);
// let b = 0;
// let c = 0;

// while (b!=a) {
//    let b = parseInt(prompt(`Unesi broj:`));
//    if (b>a) {
//     alert(`Vas broj je veci od zamilsljenog`);
//     c++;
//     continue;
//   } if (b<a) {
//     alert(`Vas broj je manji od zamilsljenog`);
//     c++;
//     continue;
//   } if (b==a){
//     c++;
//     alert(`Bravo pogodio si iz ${c} puta`);
//     break;
//   }
// }
/////////////////////////////////////////////////

// let zbir = 0;

// while (true) {
//   let broj = parseInt(prompt(`Unesi broj:`));
//   if (broj < 100) {
//     alert(`Uneti broj je manji od 100`)
//     continue
//   }
//   if (broj > 100) {
//     alert(`Uneti Broj je veci od 100`)
//     continue
//   }
//   if (broj == 100) {
//  break
// }
// }
//////////////////////////////////////
// VOID Funkcija, ne vraca vrednost
//////////////////////////////////////
// function prvaFunkcija(x) {
//   y=2*x;
// }
// prvaFunkcija(prompt(`Unesi broj`));
// document.write(y);
/////////////////////////////////////////
/////Nije void funkcija jer vraca vrednost
//////////////////////////////////////////
// let a = prompt(`Unesi a:`);
// let b = prompt(`Unesi b:`);

// function povrsina(a,b) {
//   y=a*b;
//   return y;
// }
// let rezF = povrsina(a, b);
// document.write(rezF);
////////////////////////////////////////

//  let a = parseInt(prompt(`Unesi a:`));
//  let b = parseInt(prompt(`Unesi b:`));
//  let c = parseInt(prompt(`Unesi c:`));

//  function najBroj(a,b,c) {
//    let maxBroj = a;
//    if (maxBroj<b) {
//      maxBroj = b;
//      } else if (maxBroj<c) {
//        maxBroj = c;
//      }
//      alert(`max broj je: ${maxBroj}`);
//      return maxBroj;
//  }
//  najBroj(a,b,c);
//////////////////////////////////////////

//// Anonimna Funkcija
// b = function () {return 4};
// alert(b());
// Ukoliko pozovemo bez zagrada dobicemo string citav "function () {return 4};", ukoliko dodamo zagrade kod b dobicemo vrednost

///////////////////////////////
////// Arrow funkcija ili ti strelicasta funkcija
// let b = () => 6;
/// Koristi se samo kada vracam neku vrednost, kada se ima return.

// let p = 1;
// let a = parseInt(prompt(`Unesi a:`));
// let b = parseInt(prompt(`Unesi b:`));

//  function proizvod(a,b) {
//    if(a>b) {
//      let pom = a;
//      a = b;
//      b = pom;
//    } else if (a==0 || b==0) {
//     alert(`Rezultat je 0!`);
//     return;
//    }
// for (let i = a; i < b; i++) {
//   p = p * i;
//   }
//   return parseInt;
// } 
// proizvod(5,7);
// alert(p);

//////////////////////////////////////////


