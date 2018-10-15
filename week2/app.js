//App run by init
function init() {
  stringChallenge(); // 1.
  arraysChallenge(); //1.1
  sum(10, 15, 36); //2.
  colorCar("Black"); //3.
  myData(farhan); //4
  vehicleType("Blue", 2);
  oneLineIf();
  vehicle("Blue", 2, 2);
  vehicleList("Pink", 0, 2);
  ad();
  modules();
  equalityTest();
  objChange();
  typeChecking();
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
    `My name is ${myData.name} and I'm ${
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

//6.
function vehicle(color, type, state) {
  type === 1
    ? (type = "car")
    : type === 2
      ? (type = "motorbike")
      : (type = "Other Vechile");
  state <= 1 ? (state = "new") : (state = "used");
  console.log(`A ${color} ${state} ${type}`);

  /* if(state === 1 && type === 1) {
   console.log(`A ${color} new car`);
  } else if (state === 1 && type === 2){
    //do
    console.log(`A ${color} new bike`);
  }
  else if(state === 2 && type === 1){
    //do
    console.log(`A ${color} used car`);
  }
  else if(state === 2 && type === 2){
    //do
    console.log(`A ${color} used bike`);
  } */
}

//7.
let list = ["Car", "Bike", "Carvan", "Scooter", "Bus"];
console.log(list.toString());

//8.
console.log(list[2]);

//9.
function vehicleList(color, type, state) {
  state <= 1 ? (state = "new") : (state = "used");
  console.log(`A ${color} ${state} ${list[type]}`);
}

//10.
function pluralize(word) {
  return word[word.length - 1] === "s" ? word + "es" : word + "s";
}

function ad() {
  let adText = "Amazing Joe's Garage, we service ";

  for (let i = 0; i < list.length; i++) {
    adText += pluralize(list[i]);
    if (i < list.length - 2) {
      adText += ", ";
    } else if (i === list.length - 2) {
      adText += " and ";
    }
  }

  console.log(adText + ".");
}
//11.
list.push("Truck");

//12.
let emptyObj = {};
console.log(emptyObj);

//13 - 14
function modules() {
  let hyfModules = {
    hyfTeacher: [
      "Baraa",
      "Tommy",
      "Mike",
      "Victor",
      "Robin",
      "Chanchal",
      "Rasmus"
    ]
  };

  console.log(hyfModules);

  hyfModules.languages = ["html", "css", "javascript"];

  console.log(hyfModules);
}

//. 15
function equalityTest() {
  let x = [1, 2, 3];
  let y = [1, 2, 3];
  let z = y;

  console.log(x == y); // false
  console.log(x === y); // false
  console.log(z == y); // true
  console.log(z == x); // false
}

//16
function objChange() {
  let o1 = { foo: "foo" };
  let o2 = { foo: "bar" };
  let o3 = o2;
  let o4 = { foo: "bar" };
  o3.bar = "foo";
  console.log("o3 effect on o2 as well: ", JSON.stringify(o2));

  o1 = { ...o4 };
  o1.bar = "bar";
  console.log(
    "With this cloning method o1 never effect o4: " + JSON.stringify(o4)
  );
}

//17
function typeChecking() {
  let bar = 42;
  console.log(typeof bar);
  //its a number.
}

init();
