//user interactions

/*
//alert
alert("Hello aryan");

//prompt

const age = prompt("How old are you?");

//confirm
const confirmAge = confirm("Are you above 18?");
console.log(age, confirmAge);

alert(`you are ${age} years old`); //string literal 
*/
//write a javascript program to create a sum calculator user interaction

alert("This performs sum calculations");

const value1 = prompt("enter first number");
const value2 = prompt("enter second number");
const sum = Number(value1) + Number(value2);
console.log({ value1, value2 });
alert(`The sum of ${value1}  and ${value2} is ${sum}`);
