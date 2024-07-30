// to alert date and time

// const d = new Date();
// alert(d);

//-------------The most important..............................
// ...........................................

const foodA = ["Fries", "pasta", "ice-cream"];
const foodB = ["Fries", "ice-cream", "pizza"];
const concat = foodA.concat(foodB);
console.log({ concat }); //method 1  string concat inside array
const foodds = [...foodA, ...foodB]; //  method 2 string concat inside array using spread operator
console.log({ foodds });
//compare the 2 arrays and find common food if any.
//result: array["ice-cream"];

//steps
//creating a new function
//use find method   for direct result or filter for multiple result
//use includes method
//return a new array or direct result

// const checkArray = (foods) => {            //done by me hahahahahhaa
//   for (i = 0; i <= 2; i++) {           //done by me hahahahahhaa
//     if (foods[i].find() === "ice-cream") {    //done by me hahahahahhaa
//       return 1;
//     }
//   }
// };
// const result = checkArray(foodA);
const findCommon = (a, b) => {
  //a and b resembles two arrays foodA and foodB
  return a.filter((item) => b.includes(item)); //comparing array elements
};
console.log(findCommon(foodA, foodB)); //accessing aray elements

//write a js function that convert fullname to proper case
// Eg: raktim kumar shrestha=> Raktim Kumar Shrestha

//1.create a new function(properCase)
//2.text convert to 3 different string using split
//3.loop into each words
//4.string first index ko character to upperCase
//5.rest indexes to lowerCase
//6.join the array
//7.return the result
const properCase = (text) => {
  return text
    .split(" ")
    .map(
      (word) =>
        word.slice(0, 1).toUpperCase() +
        word.slice(1, word.length).toLowerCase()
    )
    .join(" ");
};

console.log(properCase("aryan GuRaU"));

// Get total mass of all characters using reduce method
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "136",
    mass: "150",
    eye_color: "blue",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "172",
    mass: "84",
    eye_color: "blue",
    gender: "female",
  },
];

const sumMass = (arr) => arr.filter((element) => element.eye_color === "blue");
// console.log(sumMass(characters));
const filterGender = (arr) =>
  arr.filter((element, count) => element.gender === "male");
console.log(filterGender(characters));

//get the total mass of all characters using reduce method
const getMass = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev + Number(curr?.mass);
  }, 0);
};
console.log(getMass(characters));

// const len = (arr) => {
//   return arr[0].name.length;
// };
// console.log(characters);
// const len = (arr) => arr[0].name.length;
// console.log(characters);
const sumName = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev + curr.name.length;
  }, 0);
};

console.log(sumName(characters));
