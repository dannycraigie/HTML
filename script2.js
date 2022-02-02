"use strict";

// OBJECTS, ARRAYS and JSON
//
// OBJECTS
//
// Collection of data in ANY order made up of KEY : VALUE pairs
//
// Creating an object

let animal = new Object();
console.log(typeof(animal));

animal["name"] = "Clifford";
animal["type"] = "Dog";
animal["size"] = "Big";

console.log(animal);

// You can expand OBJECTS whenever you lie using a .

animal.color = "Red";

console.log(animal);

// normal FOR loop

let x = [1,2,3,4,5];

for(let i = 0; i < x.length; i ++) {
    console.log(x[i]);
}

// Enhanced FOR loops

let y = ["a","b","c","d","e"];

for (let item of y) {
    console.log(item);
}

// ARRAY OBJECT METHODS
// mutates original array

// reverse method
console.log(y.reverse());

// join method
console.log(y.join(" ! "));

// JSON
// Javascript Object Notation
// the LITERAL notation for objects

let newJSON = {
    "name" : "cameron",
    "age" : 29,
    "key" : "value"
}

// convert JSON to String
let str = JSON.stringify(newJSON);
console.log(newJSON);
console.log(str);

// Convert JSON to a string

let notAString = JSON.parse(str);
console.log(notAString.name);

let darthVader = {
    "allegiance" : "empire",
    "weapon" : "lightsabre",
    "sith" : true
}
console.log(darthVader);
console.log(`Darths allegiance is ${darthVader.allegiance}`);
console.log(`Darths preffered weapon is ${darthVader.weapon}`);
console.log(`Darth is a Sith? ${darthVader.sith}`);
console.log(`Darth is a Jedi? ${darthVader.sith ? "false" : "true"}`);

let myArray = Array("hello", "everyone");
console.log(myArray.length);
console.log(myArray.push("this", "is", "push"));
console.log(myArray.length);
console.log(myArray.shift());

for (let item of myArray) {
    console.log(item);
}