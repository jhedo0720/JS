// callback = a function that is passed as an argument to another function
//          Used to handle asynchronous operations:
//          1. Reading a file
//          2. Network Requests 
//          3. Interacting with databases

//        "Hey, when you're done, call this next."

sum(displayConsole, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}