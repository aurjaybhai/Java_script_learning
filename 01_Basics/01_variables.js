const accountId = 144553;
let accountEmail = "duckbhai@duck.com";
var accountPassword = "123456"; // (refer "var.js" file)var has become depreciated
accountCity = "Bihar";
let accountState; //  you will get "undefined" output bcoz you have not specified anything

// accountId = 2 // not allowed bcoz it's constant see the line 1

accountEmail = "hc@hc.com";
accountPassword = "1655";
accountCity = "Delhi";

console.log(accountId);

/* 
Prefer not to use "var"
because of issue in block scope and functional scope(Weird Scoping)
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
