// function add(a,b,c){
//     return a+b+c
// }

// console.log(add(2,5,10))



//! CURRYING FUNCTION 
// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(add(2)(5)(10))


const add = (a)=>(b)=>(c)=>a+b+c;

console.log(add(2)(5)(10))




// function sendautoEmail(to){
//     return function(subject){
//         return function(body){
//             console.log(`Sending email to ${to} with subject ${subject}: ${body} `)
//         }
//     }
// }


const sendautoEmail = (to) => (subject) => (body) => `Sending email to ${to} with subject ${subject}: ${body} `


let step1 = sendautoEmail("akashm@gmail.com");

let step2 = step1("New Order Conformation");

console.log(step2("Hey Akash!, New Order for You"));

