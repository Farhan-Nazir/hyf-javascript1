//Ans 1. Write hello world
console.log("Hello world!");

//Ans 2. SyntaxError
console.log("I'm awesome");

//Ans 3.Declare a variable
let x;
console.log("the value of my variable x will be: 5");
console.log(x);
x = 225;
console.log("The value of x is 225 ");
console.log("the real value is: " + x);

//Ans 4. Assign different values to String variable
const stringX = "X-side";
const stringY = "Y-side";
console.log(`The value of X is ${stringX}\nThe value of Y is ${stringY}`);

//Ans 5. maximum number
var z = 7.25;
console.log(z);
var a = parseInt(z);
console.log(a);
var highestValue = Math.max(a, z);
console.log(
  "the highest value is " +
    
    highestValue
);

//Ans 6.Arrays
var elements = [];
console.log("There is empty array");
console.log(elements);
var cars = ["Audi", "Mercedes", "Tessla"];
console.log(cars);
cars.push("Porsche");
console.log(cars);

//Ans 7. More strings
let myString = "Work smarter not Harder !";
console.log(myString);
console.log(myString.length);

//Ans 8.check variables type
let varString = "Farhan";
let varFloat = 30.58;
let varBoolean = true;
let varNull = null;
let varUndefined = undefined;

console.log("The value of my variable 1 is: " + varString);
console.log("The value of my variable 2 is: " + varFloat);
console.log("The value of my variable 3 is: " + varBoolean);
console.log("The value of my variable 4 is: " + varNull);
console.log("The value of my variable 5 is: " + varUndefined);

console.log("I think the type of varString is: String ");
console.log("I think the type of varFloat is: Number ");
console.log("I think the type of varBoolean is: Boolean ");
console.log("I think the type of varNull is: Object ");
console.log("I think the type of varUndefined is: Undefined ");

console.log(typeof(varString));
console.log(typeof(varFloat));
console.log(typeof(varBoolean));
console.log(typeof(varNull));
console.log(typeof(varUndefined));

if (typeof(varString) === typeof(varBoolean)) {
  console.log(varString + " and " + varBoolean + " are the SAME TYPE");
} else {
  console.log(varString + " and " + varFloat + " are NOT the SAME TYPE");
}

if (typeof(varFloat) === typeof(varBoolean)) {
  console.log(varFloat + " and " + varBoolean + " are the SAME TYPE");
} else {
  console.log(varFloat + " and " + varBoolean + " are NOT the SAME TYPE");
}

if (typeof(varNull) === typeof(varUndefined)) {
  console.log(varNull + " and " + varUndefined + " are the SAME TYPE");
} else {
  console.log(varNull + " and " + varUndefined + " are NOT the SAME TYPE");
}

//Ans 9. Number Division and Mod (Remainder of Division)
var x = 7;
console.log("The value of " + x + " % " + 6 + " is: " + (x % 6));
console.log("The value of (10 % 2) is: " + (10 % 4));
console.log("The value of (16 % 6 ) is: " + (18 % 6));
console.log("The value of (29 % 10) is: " + (19 % 10));

//10.More javascript
var array = ["HackYourFuture", 180, null, undefined , 258.95];
console.log(array);
console.log(typeof (4 / 5));
console.log(10 / 0 === 6 / 0);
