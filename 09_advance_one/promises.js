const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB Calls , Cryptography , network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Coffee", email: "coffee@example.com" });
  }, 1000);
});

PromiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "rakesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    // return user;
    return user.username;
  })
  .then((superman) => {
    console.log(superman);
    // console.log(complete.username);
    // console.log(complete.password);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "1233121" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

// handling through async it's like another method in promise

async function consumePromiseFive() {
  try {
    const response = await promiseFive; // you cannot call the promiseFive() with partenthess
    console.log(response);
  } catch (error) {
    console.log(error); // i will handle error gracefully
  }
}

consumePromiseFive();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*  // # fetch METHOD 1

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json(); // you have add await in front of response bcoz takes time to convert the data also
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
} 
// getAllUsers();  
*/



// # FETCH METHOD 2

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));


