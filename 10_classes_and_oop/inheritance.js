class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A New Course was added by ${this.username}`);
  }
}

const coffee = new Teacher("coffee", "coffee@openai.com", "213521");

coffee.addCourse();

const masalaChai = new User("masala_Chai");

// masalaChai.addCourse(); // is not a function
coffee.logMe();
masalaChai.logMe();

console.log(coffee === masalaChai); // false
console.log(coffee === Teacher); // false
console.log(coffee instanceof Teacher);
console.log(coffee instanceof User);
// instanceof == iska matlab kya vo ushese bane h kya
