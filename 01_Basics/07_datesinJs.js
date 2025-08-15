// Dates

let myDate = new Date();
console.log(myDate.toString()); // Mon Aug 04 2025 21:59:28 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); // 2025-08-04T16:29:28.253Z
console.log(myDate.toJSON()); // 2025-08-04T16:29:28.253Z
console.log(myDate.toLocaleDateString()); // bank cheque format date hota h..(4/8/2025)
console.log(myDate.toLocaleString()); // 4/8/2025, 9:59:28 pm
console.log(myDate.toTimeString()); // 21:59:28 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Mon Aug 04 2025
console.log(typeof myDate); // it's object type


let myCreatedDate = new Date(2022,0,23,17,3) // if you write month in single then "january" starts from "0"
console.log(myCreatedDate.toLocaleString());
let newCreate_date = new Date("2023-01-15")
console.log(newCreate_date.toLocaleDateString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // bcoz month starts from "0"
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})


// Pls Revisit this topic 


