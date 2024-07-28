/*
function are the main building block of any program
2 core principl
  a. DRY ( Donot repeat yourself)
  b. SoC(seperation of Concern)
   
*/

/*
// 2 ways to write function  ES5 and ES6

// -------ES5-----------
//  Write a sum function for adding 2numbers

//function declare, name of function , parameters a and b
function sum(a, b) {
  //logic
  const c = a + b;
  return c;
}

// function call or execute
const result = sum(2, 3);
const result1 = sum(4, 4);
console.log({ result , result1});

*/

//write a js program to find the square of  number
/*  
-------------ES5----------------
*/

/*
function square(n) {
  const a = n * n;
  return a;
}
const num = Number(prompt("enter a number"));
if (isNaN(num)) {
  alert("you didnot entered number");
}
const result = square(num);
console.log(result);

// -------------ES6---------------
const squares = (x) => {
  return x * x;
};
const newAnswer = squares(4);
console.log({ newAnswer });


//write a js program to convert celsius into fareheight

//---ES5-------
function convertCelsius(c) {
  const f = c * (9 / 5) + 32;
  return f;
}
const ask = Number(prompt("enter temperature in celsius"));
const fareheight = convertCelsius(ask);
console.log({ fareheight });

//ES6
const temperature = (c) => {
  far = c * (9 / 5) + 32;
  return far;
};
const provideValue = Number(prompt("enter temp in celsius"));
const newFareheight = temperature(provideValue);
console.log(newFareheight);


*/

// write a js program to calculate the area of rectangle

//ES5----------
// function rectangleArea(l, b) {
//   return l * b;
// }

// const length = Number(prompt("enter the length "));
// const breadth = Number(prompt("enter breadth"));
// if (isNaN(length, breadth)) {
//   alert("please enter valid number");
// }
// const area = rectangleArea(length, breadth);
// alert(`the area of rectangle is ${area}`);
// console.log(`the area of rectangle is ${area}`);

//ES6  using arrow function
const rectangleArea = (l, b) => {
  return l * b;
};
const l = Number(prompt("enter length"));
const b = Number(prompt("enter breadth"));
if (isNaN(l, b)) {
  alert("enter valid number");
}

const area = rectangleArea(l, b);
alert(`the area of rectangle is ${area}`);
console.log(`the area of rectangle is ${area}`);
