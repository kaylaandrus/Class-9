// // Create the function that takes an array with objects and returns the sum of people's budgets.
let userArr = [
  { name: "Frodo", age: 50, budget: 23000 },
  { name: "Sam", age: 39, budget: 40000 },
  { name: "Pippin", age: 27, budget: 2700 },
];

console.log(userArr.reduce((n, { budget }) => n + budget, 0));

////////////////////////////////////////////////////////////////////////////////

// Aim: Create a function that takes two numbers as arguments (num, length)
// and returns an array of multiples of num until the array length reaches length.

const getMultiples = (num, length) =>
  [...Array(length / num)].map((_, i) => num * (i + 1));

console.log(getMultiples(5, 30));
console.log(getMultiples(4, 20));
console.log(getMultiples(10, 100));

// Aim: Create an application that, on button click, runs a function that prints out a users name, age, and occupation
let userInfo = {
  name: "John Snow",
  age: 25,
  occupation: "King of The North",
};
let btn = document.createElement("button");
btn.innerHTML = "Click Me";
btn.onclick = function () {
  alert("Winter is Coming");
  return console.log(userInfo);
};

document.body.appendChild(btn);

// Aim: Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically and their corresponding values in the same order.

// let booksPages = { ACOWAR: 450, "Wuthering Heights": 110, Verity: 80 };
