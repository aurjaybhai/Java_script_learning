// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
}

const chai = new User("rakesh", "rakesh@openai.com", "12122");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// ##################### BTS ###########################

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("rahul", "rahul@openai.com", "12122");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());


