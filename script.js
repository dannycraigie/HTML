"use strict";

//let first_name = "Danny";
//let last_name = "Craigie";
//let area = "Manchester";
//let star_sign = "Libra";

//console.log(first_name);
//console.log(last_name);
//console.log(area);
//console.log(star_sign);

//console.log("This is a %c test formatting message with some CSS. By "+first_name, "color: orange; font-style: bold; background-color: black; padding: 10px; fontfamily: fantasy:");

//let favcar = "Bike";
//let bikebrand = "Planet X";

//console.log(`My favourite car is a ${favcar} and the brand is ${bikebrand}`);

//let myObject = {
//    key : "value",
//    anotherkey : 12345
//}
//console.log(myObject);

//let string1 = '34 * 872 = ';
//let result = 34*872;
//console.log(string1 + result);
//
//let string2 = `34 * 872 = ${34*872}`;
//console.log(string2);

// ASI 
// A Automatic
// S Semi-colon
// I Insertion

//let a;
//let b = "12345";
//let c = 12344;
//let d = true;
//let e = {a:"JavaScript"};

//console.log(typeof(a));
//console.log(typeof(b));
//console.log(typeof(c));
//console.log(typeof(d));
//console.log(typeof(e));

//let totalMoney = 4000;
//let moneyPaidSoFar = 2348;
//let totalLeftToPay = totalMoney-moneyPaidSoFar;

//console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £$///{totalLeftToPay}`);

// FOR
// uses a counter
// run until condition is met
//for( let i = 0; i < 10; i++) {
//    console.log(`i = ${i}`);
//}

//let condition = true;
//let i = 0;

//While
//while(condition == true) {
//    console.log(`increment me!`);
//   i++;

//    if( i >= 3) {
//        condition = false;
//    }
//}

// Do While
//let a = false;
// do {
//     console.log(` run forest run`);
// } while(a==true);

// Switch cases
// run  until break or return
// often more effective than large if else statements
//let num = 1
//switch(num) {
//    case 0:
//    console.log(`number is zero`);
//    break;
//    case 1:
//    console.log(`We are now at one`);
//   case 4:
//    console.log(`we've reached four`);
//    case 10:
//    console.log(`we've reached ten!`);
//    break;
//    default:
//    console.log(`soemthing went wrong`);
//}

//let t = 100;
//while (t <= 200) {
//    t++;
//    console.log(`A = ${t}`);
//}

//let y = 100;
//while (y <= 200) {
//   if (a % 2 == 0) {
//    console.log("-");
//}       else {
//    console.log("*");
//}
//y++;
//}

//for (let i = 0; i < 10; i++) {
//    for (let j = 1; j <= 10; j++) {
//        console.log(j);
//    }
//}

//for (let t = 100; t <= 200; t++) {
//    console.log(`A = ${t}`);
//}

//for (let y = 100; y <= 200; y++) {
//    if (a % 2 == 0) {
//        console.log("-");
//    } else {
//        console.log("*");
//    }
//}

//let day = 0;
//switch(day) {
//    case 0:
//        console.log(`Today is Tuesday`);
//    case 1:
//        console.log(`Today is Wednesday`);
//    case 2:
//        console.log(`Today is Thursday`);
//    case 3:
//        console.log(`Today is friday`);
//    case 4:
//        console.log(`Today is Saturday`);
//    case 5:
//        console.log(`Today is Sunday`);
//    case 6:
//        console.log(`Today is Monday`);
//    break;
//    default:
//        console.log(`invalid range`);
//}

// CONDITIONALS
// Truthy and Falsey
//
// Falsey listed below
// False
// 0
// ''
// undefined
// null
// NaN - not a number
//
// everything else is Truthy

// IF  (ELSE IF AND ELSE)
// check a condition -> run a code block if condition is met

//let a = 0;
//
//if(a == 0)  {
//    console.log(`sunshine`);
//}   else if(a != 2) {
//    console.log(`moonlight`);
//}   else {
//    console.log(`boogie`);
//}

// TERNARY IF is a shorthand version on one line of an if statement if / else.
// x == 2 ? console.log(`x is 2`) : console.log(`x is not 2`);

// strictly equal operator
// ===
// also checks data type
// x === `1` ? console.log(`true`) : console.log(`false`);

//Number.prototype.between = function(a, b) {
//    var min = Math.min.apply(Math, [a, b]),
//      max = Math.max.apply(Math, [a, b]);
//    return this > min && this < max;
//  };
//
//let age = 45;
//
//if (age.between(18, 65, true)) {
//    console.log(`You are in range at ${age}`);
//}   else if (age < 18) {
//    console.log(`You are ${age} which is underage`);
//}   else {
//    console.log(`You are out of range at ${age}`);
//}

let age = 49;
age <= 50 ? console.log(`You are under 50 at ${age}`) : console.log(`You are over 50 at ${age}`);

