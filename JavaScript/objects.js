//Objects, properties,  method      ------->object{ property, method}
//complex Data type
// CRUD ( Create, Read, Update, Delete)

//Create
const person = {
  //An object "person " is created
  name: "aryan gurau",
  phone: {
    home: 9809241661,
    office: 9845926665,
  },
  address: "kawasoti-14",
  dob: "1999-12-12",
  gender: "male",
  hasValidLicence: true,
  age: function age() {
    //global function  can access variables from outside
    //using es5 function method
    return 2024 - Number(this.dob.split("-")[0]);
  },
  newAge: () => {
    //local function can access variables within function
    return 2024 - Number(person.dob.split("-")[0]);
  },
};

//Read
//property
console.log(person.name, person.gender); //aryangurau  , male

//method
console.log(person.age()); //25
console.log(person.newAge()); //25

//update
person.name = "Aryan Gurau";
console.log({ person });

//Delete
//Delete person.newAge;
//spread Operator

const { newAge, ...remainingData } = person;
console.log({ remainingData });

//Immutable js (object /array)

const fruits = {
  name: "Mango",
  qty: 2,
  price: 300,

  discount: () => {
    if (fruits.price > 100) {
      dis = fruits.price * 0.07;
    } else {
      dis = fruits.price * 0.1;
    }
    return fruits.price - dis;
  },
};
console.log(fruits);
console.log(fruits.discount());

//update
// const { qty, ...rest } = fruits;
// const rest ={
// fruits.name = "apple",
// fruits1.price = "100",

// discount2 : ()=>{

// if (fruits1.price > 100) {
//   dis = fruits1.price * 0.1;
// } else {
//   dis=fruits1.price *0.07;
// }
// return fruits.price-dis;
// }
// }

// write a javascript program to calculate the circle area and
//perimeter. Note: Create two methods to calculate the area and 1
// perimeter. The radius of the circle will be supplied by the user

const circle = {
  radius: Number(prompt("enter radius")),
  area: () => {
    return 3.14 * (circle.radius * circle.radius);
  },
  perimeter: () => {
    return 2 * 3.14 * circle.radius;
  },
};
console.log(circle.area());
console.log(circle.perimeter());
