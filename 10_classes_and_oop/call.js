function SetUsername(username) {
  // Complex DB Calls
  this.username = username;
  console.log("test");
}

function createUser(username, email, password) {
  SetUsername.call(this, username); // setusername is using my "this" and that's why his items still access to me though he left the memory

  this.email = email;
  this.password = password;
}

const chai = new createUser("coffee", "coffee@meta.com", "1222");
console.log(chai);

