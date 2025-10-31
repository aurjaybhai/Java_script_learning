// const tinderUser = new Object(); // singleton object

const tinderUser = {}; // non singleton object most developers use this bcoz it's shorter

tinderUser.id = "124abcv";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "random@duck.com",
  fullname: {
    userfullname: {
      firstname: "radiance",
      lastname: "tranquility",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname); // access the key according to the demand

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }; // this creates object in object {value1 , value2}

// const obj3 = Object.assign( {},obj1, obj2, obj4);

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

// how does the data comes from database

const users = [
  {
    id: 1,
    email: "hr@email.com",
  },
  {
    id: 2,
    email: "sfme@email.com",
  },
];

users[1].email; //  access the values through this method

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // output will come inside the array
console.log(Object.values(tinderUser)); // output will come inside the array
console.log(Object.entries(tinderUser)); // array ke array

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "javascript",
  price: "₹999",
  courseInstructor: "ht",
};

// const teacher = course.courseInstructor; old method
// console.log(teacher);

// ## new method

const { courseInstructor } = course; // ##METHOD 1// if you think it's name is too long then you can you do below method also

const { courseInstructor: instructor } = course; // ##METHOD 2
console.log("Method 1: ", courseInstructor); // # METHOD 1 OUTPUT
console.log("Method 2: ", instructor); // # METHOD 2 OUTPUT

// {
//   "name" : "rakesh",
//   "coursename" : "js",
//   "price" : "₹999",
// }

// [{}, {}, {}];
