class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    // add static to restrain users sometimes
    return `123`;
  }
}

const rakesh = new User("rakesh");
// console.log(rakesh.createId());
// const printme = rakesh.createId();

// console.log(printme);

class Teacher extends User {
  constructor(email, username) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@appple.com");
iphone.logMe();
// console.log(iphone);
console.log(iphone.createId()); // now you have added static it does now allow and show the error


