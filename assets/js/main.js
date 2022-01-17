document.write("To see the JS Code, use the console ;)")
document.write("<h1>Lev1_7 Variablen</h1>");

var helloworld = "Hello World";
const pi = 3.14;
const burjdubai = "828m";
var fullname = "Jan Schmidt";
const eifeltower = "324m";
const camelcase = "camelCase";
var kursstatus = true;

document.write("<h1>Lev1_1 console.log</h1>");

a = 12;
b = a * 3;
console.log(b);
document.write(b);

console.log(document.URL);

document.write("<br><br>");

console.log("Hell world!");

console.log("Anton");
let Name = "Anton";
console.log(Name);

var age = 28;
console.log(age);

var job = "Trainer";
console.log(job);

var married = true;
console.log(married);

console.log(Name + " ist " + age + " Jahre alt und ist verheiratet: " + married);

document.write("<h2>Lev1_6 variablen </h2>");

var z = 34;
var z = 67;
console.log(z);

// let x = 34;
// let x = 67;
// console.log(x);

// const y = 34;
// const y = 67;
// console.log(y);

// -> in diesem Fall lässt sich nur var überschreiben. const lässt sich generell nicht überschreiben, let nur innerhalb eines Blocks.

document.write("<h2>Lev1_5 variablen</h2>");

var carName = "BMW";
var x = 150;
var y = 50;
var z = x + y;

let firstName = "John";
let lastName = "Doe";
let age2 = 35;

var person = firstName + " " + lastName + ", age:" + age2;
console.log(person);

document.write("<h3>Lev1_12 Arithmetik</h3>");

let score = 5 + 5 * 10;
console.log('Ergebnis: ' + score);

let score2 = (5 + 5) * 10;
console.log('Ergebnis: ' + score2);

let score3 = 0;
score3 = score3 + 10;
console.log('Ergebnis: ' + score3);

score4 = 0;
score4 += 10;
console.log('Ergebnis: ' + score4);

let zahl = 1;
zahl = zahl + 1;
zahl += 1;
console.log(zahl); //1 -> 1+1 -> 2+1

zahl++
console.log(zahl);

zahl--
console.log(zahl);

document.write("Lev1_13 Arithmetische Wiederholung");

//Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);

//Subtraction
let subtraction_operator = 2 - 1;
console.log("subtraction: " + subtraction_operator);

//Multiplication
let multiplication_operator = 2 * 2;
console.log("Multiplication: " + multiplication_operator);

//Division
let division_operator = 4 / 2;
console.log("Division: " + division_operator);

//Modulus / Modulo
let modulus_operator = 14 % 5;
console.log("Modulus: " + modulus_operator);

document.write("<h2>Lev1_1 document.write");
document.write("<br>It starts: here: -></h2>");

document.write("<h1>Hello World!</h1>");
document.write("<p>Have a nice day1</p>");
var myText = "Hello again";
document.write(myText);
var myName = "Steff";
var myLastname = "Well...";
document.write("<br>Name: " + myName);
document.write("<br>Nachname: " + myLastname);

document.write("<h2>lev1_11 strings</h2>");

x = "Hello";
y = "World<br>";
z = x + y;
document.write(z);

n = x + " " + y;
document.write(n);

x += y;
document.write(x);

document.write("<h2>Lev1_4 popup boxes</h2>");

// window.alert("Hallo Welt");
// window.prompt("Bitte geben Sie Ihren Namen ein.");
// window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
// window.confirm("Stimmen Sie meiner Meinung zu?");

// let alter = prompt("Gib mir bitte dein Alter:");
// console.log(alter);

// let b2 = 5;
// let a2 = b2 * 5 - 3;
// alert(a2);

// let mann = "Robert Wadlow ist der größte Mann der Welt : ";
// let grosse = "2,72m";
// alert(mann + grosse);

/* Alert box with line-breaks:

alert("Hello\nHow are you?");*/

/*Window Prompt:

let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
// }
->> greets you
*/

/* Examples with cases:

let text;
let favDrink = prompt("What's your favorite cocktail drink?");
switch(favDrink) {
    case "Coca-Cola":
        text = "Excellent choice! Coca-Cola is good for your soul.";
    break;
    case "Pepsi":
        text = "Pepsi is my favorite too!";
    break;
    case "Sprite":
        text = "Really? Are you sure the Sprite is your favorite?";
    break;
    default:
        text = "I have never heard of that one!";
} */

// Window Confirm:

/* confirm("Press a button!");
-> press a button to get rid of the pop-up */

/* confirm("Press a button!\nEither OK or Cancel.");
-> press a button or use ok/cancel to get rid of*/

/* let text;
if (confirm("Press a button!") == true) {
    text = "You pressed OK!";
} else {
    text = "You canceled!";
} */
