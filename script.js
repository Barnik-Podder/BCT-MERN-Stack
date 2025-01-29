// let welcome = function(name){
//     return ("hello "+name+" welcome to our page");
// }

// function welcome(name){
//     return ("hello "+name+" welcome to our page");
// }

// let nameVal = "Barnik";
// console.log(welcome(nameVal));

let a = 11;
let b = 19;

// let compare = function(a,b){ //ANONYMOUS FUNCTION
//     if(a<b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }

// console.log(compare(a,b))

//ARROW FUNCTION
// let sum = (a,b)=>{
//     return a+b;
// }

// console.log("The sum is: "+ sum(a,b));

// let checkEven = (a) => {
//     if(a % 2 == 0){
//         return `${a} is an even number`;
//     }else{
//         return `${a} is an odd number`;
//     }
// }

// console.log(checkEven(a));

// const arr = [1,4,7,8];

// let arrSum = (arr)=>{
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(arrSum(arr));

//IIFE
// (function(){
//     console.log("Barnik Podder");
// })();

// callback functions
// let name = "Barnik";
// function greet(name,callback){
//     console.log("Hi "+name);
//     callback();
// }

// function callMe(){
//     console.log("It's a callback function.");
// }

// greet(name,callMe);

// HOF : map(),filter(),reduce()

// let arr = [1,2,3,4,5,6];
// let newArr = arr.map(val=>val+2);

// console.log(arr);
// console.log(newArr);

// let filterArr = arr.filter((val) => val%2 != 0);

// console.log(filterArr);

// let arr = [1,5,2,6,4];
// let filterArr = arr.filter(val => val>23);
// console.log(filterArr);

// let reducedArr = arr.reduce(function(acc,i){
//     return acc+i;
// },0);

// console.log(reducedArr);

// document.getElementById("demo").innerHTML = "This is from javascript";

// setTimeout(()=>{
//     document.getElementById("test").innerHTML = "run successfully";
// },10000)
// function displayer(some) {
//     document.getElementById("promise").innerHTML = some;
// }


// let promise = new Promise(function (myResolve, myReject) {
//     let x = 1;
//     if (x == 0) {
//         myResolve("ok");
//     }
//     else {
//         myReject("error");
//     }
// });

// promise.then(
//     function (value) {
//         displayer(value);
//     },
//     function (error) {
//         displayer(error);
//     }
// )



// const promise = new Promise(function (myResolve, myReject) {
//     setTimeout(()=>{
//         myResolve("page loaded successfully");
//     },3000);
// });

// promise.then(
//     function (value) {
//         document.getElementById("call").innerHTML = value;
//     }

// );

function checkStatus() {
    // Simulating an HTTP status check with a Promise
    let statusCode = 300; // Change this value to simulate different status codes

    // Using a Promise to simulate async status check
    let statusCheck = new Promise((resolve, reject) => {
        if (statusCode === 200) {
            resolve('Success: Status is 200');
        } else {
            reject('Error: Status is not 200');
        }
    });

    // Handling the resolved or rejected Promise
    statusCheck
        .then(message => {
            displayMessage(message, 'success');
        })
        .catch(errorMessage => {
            displayMessage(errorMessage, 'error');
        });
}

function displayMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;

    // Applying corresponding CSS class based on the type
    if (type === 'success') {
        messageDiv.className = 'success';
    } else if (type === 'error') {
        messageDiv.className = 'error';
    }
}
