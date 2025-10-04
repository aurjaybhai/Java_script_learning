const clock = document.getElementById('clock') // finds the element by ID
// const clock = document.querySelector('#clock') // use css selector



setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString()) // this will run in the console
    clock.innerHTML = date.toLocaleTimeString()
},1000)


