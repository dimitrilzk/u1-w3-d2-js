let test1;
test1 = 24;
console.log(test1);
test1 = 50;
console.log(test1);
let nome = "Mario";
let cognome = "Bianchi";
console.log(nome + " " + cognome);
console.log(nome + " " + cognome);
let testSomma;
testSomma = 80;
console.log(testSomma);
let testSomma2;
testSomma2 = 5;
console.log(testSomma2);
console.log(testSomma + testSomma2);
console.log(testSomma * testSomma2);
console.log(testSomma + testSomma2 - test1);
const fisso = 10;
console.log(fisso);
console.log(fisso + test1);
console.log(`La somma tra 10 e 50 è: ${fisso + test1}`);
console.log(`${nome + cognome} è capace ci sommare dei numeri: ${testSomma + testSomma2}`);
document.write(`${nome + cognome} è capace di sommare dei numeri: ${testSomma + testSomma2}`);
document.getElementById("vf").innerHTML = "2222222222222";
let frase;
frase = "Vero o Falso?";
console.log(frase);
let sommare;
sommare = 1000;
console.log(sommare);
console.log((sommare += 1));
console.log((sommare *= 2));
console.log((sommare /= 2));
console.log(sommare == 2);
console.log(sommare == 1001);
console.log(`${nome + cognome} afferma che 80 + 5 è uguale a 85: ${testSomma + testSomma2 == 85}`);
let robot = prompt("Se non sei un robot scrivi: non sono un robot");
if (robot === "non sono un robot") {
  document.getElementById("robot").innerHTML = "BENVENUTO!";
} else if (robot !== "non sono un robot") {
  document.getElementById("robot").innerHTML = "VAI VIA ROBOT!!";
}
