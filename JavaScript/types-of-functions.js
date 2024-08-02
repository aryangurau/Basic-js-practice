/* Types of functions
1. default function
2. parameterized functions
3. arrow function
4. closure function
5. IIFes
6. Reccursive functions
7. Inline function
8. anonymous function
9. callback function
10. implicit function
11. explicit function
*/
//normal function

//es5
function sum(a, b) {
  return a + b;
}
//es6
const sums = (a, b) => {
  return a + b;
};

//1. Default function
//Used for pagination to show the default value of page

const defaultfunc = (name = "user") => {
  //define
  console.log(`hello ${name}`);
};
defaultfunc("Admin"); //call
defaultfunc(); //it taakes default value "user" aassed in the function above

//2.--------- Parameterized function-------------
const sumation = ({ a, b, c, d }) => {
  //define
  console.log(a + b);
};
sumation({ a: 2, b: 3, d: 1, c: 4 }); //call

//3.------------ Arrow function-----------
const summations = (a, b) => {
  //define
  console.log(a + b);
};
summations(7, 7); //call

//4. ---------------closure---------------
let count = 0;
const counter = () => {
  count = count + 1;
  return count;
};

//closure example      function returns function
const mainCounter = () => {
  let count = 0;
  return () => {
    count = count + 1;
    return count;
  };
};
const count1 = mainCounter(); //dashain counter
const count2 = mainCounter(); // newyear counter
console.log(count1());
console.log(count1());
console.log(count2());
console.log(count2());
console.log(count2());

// 5. IIFEs ( Immediately invoked function expressions)--------------
// Used by DevOPs (database seeding)
((port) => {
  console.log(`${port}`);
})("2000");

// 6. Recursive function ( function that calls itself for number of times)--
//exampple : to calculate factorial of 5
//5*4*3*2*1
const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
const fact = factorial(5);
console.log(fact);

// Write a recursion formula for countdown

const countDown = (counter) => {
  console.log(counter);
  let count = counter - 1;
  if (count === 0) return 0;
  return countDown(count);
};
countDown(10);

// 7. -------------Inline function -------------
const test = () => {
  const d = 1;
  console.log({ d });
};

const d = "alpha";
function tests() {
  console.log("global func", { d });
}
test();
tests();

// 8. ----------anonymous function-----------(function without name)

(a) => {
  console.log(a);
};

// 9. Callback function  ( function inside function as parameters)
// Used in Express Application
const print = (data) => {
  console.log(data);
};
const parent = (func) => {
  const data = "aryan";
  func(data); // it provide output as print(num)
};
parent(print); // two functions:one for calling and another function as arguments/paramters

// another exammple of callback function
function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}
calculator(5, 5, sum);

// 10. Pure function
//utility function()
const upperConverter = (text) => {
  console.log(text.toUpperCase());
};
upperConverter("aryangurau");
upperConverter("aryangurau");
upperConverter("aryangurau");

// 11. Implicit function ( dont need to use return for simple logics)
const summ = (a, b) => {
  return a + b;
};
//converted to implicit
const summms = (a, b) => a + b;
console.log(summms(5, 55));

// 12. explicit function
const summa = (a, b) => {
  return a + b;
};
