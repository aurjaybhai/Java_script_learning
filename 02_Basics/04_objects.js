// const tinderUser = new Object(); // singleton object

const tinderUser = {}; // non singleton object

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

const obj3 = Object.assign({}, obj1, obj2, obj4);         
console.log(obj3);
