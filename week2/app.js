//App run by init
function init() {
  stringChallenge();
  arraysChallenge();
  sum(10, 15, 36);
  colorCar("Black");
  myData(farhan);
  vehicleType("Blue", 2);
  oneLineIf();
}

//String  Challenges !
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

function stringChallenge() {
  let regex = /,/gi;
  let str = myString.replace(regex, " ");
  console.log(str);
}

//Arrays
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
function arraysChallenge() {
  favoriteAnimals.push("turtle");
  console.log(favoriteAnimals);
  favoriteAnimals.splice(1, 0, "meerkat");
  console.log("Jim's favorite animal added: " + favoriteAnimals.toString());
  favoriteAnimals.splice(3, 1);
  console.log(favoriteAnimals);
  let removeMeerkat = favoriteAnimals.indexOf("meerkat");
  favoriteAnimals.splice(removeMeerkat, 1);
  console.log(favoriteAnimals);
  console.log(`The index of meerkat is ${removeMeerkat}`);
}

//More Javascript

//1.
function sum(a, b, c) {
  console.log("Sum of arguments", a + b + c);
}

//2.
function colorCar(color) {
  console.log(`A ${color} Car`);
}

//3.
let farhan = {
  name: "Farhan",
  age: 33,
  profession: "Web developer"
};
function myData(myData) {
  console.log(
    `My name is ${myData.name} and I\'m ${
      myData.age
    } years old.\nMy profession is ${myData.profession}.`
  );
}

//4.
function vehicleType(color, type) {
  switch (type) {
    case 1: {
      console.log(`A ${color} Car`);
      break;
    }
    case 2: {
      console.log(`A ${color} motorbike`);
      break;
    }
  }
}

//5.
function oneLineIf() {
  3 === 3 ? console.log("Yes") : console.log("No");
}

init();
