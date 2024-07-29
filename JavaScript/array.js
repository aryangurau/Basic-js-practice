// array
//CRUD operation

//Array declaring method1
// const arr = newArray();
// console.log({ arr });

//method 2
const arrV1 = []; //empty array

//using method 2
const cars = [
  { name: "Tesla", model: 2012 },
  { name: "TATA Nexon", model: 2019 },
  { name: "i10", model: 2022 },
  { name: "Scorion", model: 2023 },
];
//Read
console.log(cars[0]);

//update
const copiesOfCars = [...cars];
const newName = "Tesla Model X";
copiesOfCars[0].name = newName;
console.log({ copiesOfCars, cars });

//delete
//deletes  from copiesOfCars
const [a, ...rest] = copiesOfCars;
console.log({ rest });

//write a js function that sorts the name in ascending order

const peoples = [
  //created an array and inserted some objects
  { name: "raktim", age: 30 },
  { name: "anjali", age: 18 },
  { name: "paras", age: 25 },
];
const ageSorter = (arr) => {
  const compareFn = (a, b) => a.age - b.age;
  return arr.sort(compareFn);
};
const result = ageSorter(peoples);
console.log({ result });
