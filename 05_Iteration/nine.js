const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (accumlator, current_value) {
  console.log(
    `accumlator : ${accumlator} and current_value : ${current_value}`
  );
  return accumlator + current_value;
}, 0); // first time acc meh initial value aayaga which is zero then acc will take the value of
// accumlator + current_value see the output of the line 4
console.log(myTotal);

// const TotalBhai = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(TotalBhai);

const shoppingCart = [
  {
    itemname: "js_course",
    price: 2999,
  },
  {
    itemname: "html",
    price: 999,
  },
  {
    itemname: "css",
    price: 1999,
  },
];

const priceToPay = shoppingCart.reduce((item) => accumlator + item.price, 0);

console.log(priceToPay);
