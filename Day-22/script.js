
// let reduxState = {
//     count: 0,
//     userName: "Akash Mukherjee",
//     age: 24
// }


// const prevState = state

// function increment() {

// Mutate State
//     state.count  = state.count+1;


//     Not Mutating State
//     state = { ...state, count: state.count + 1 }

// }



// console.log(state);
// increment()
// console.log(state);
// increment()
// console.log(state);
// increment()
// console.log(state);


// function reducer(state, action) {
//     if (action.type == "post/increment") {
//         return { ...state, count: state.count + 1 }
//     }
//     else if (action.type == "post/decrement") {
//         return { ...state, count: state.count - 1 }
//     }

//     else if (action.type == "post/incrementby30") {
//         return { ...state, count: state.count + action.payload }
//     }

//     else if (action.type == "post/decrementby10") {
//         return { ...state, count: state.count - action.payload }
//     }

//     return state
// }


// What REDUX Will Do

// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState)

// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState)

// reduxState = reducer(reduxState, { type: "post/decrement" });
// console.log(reduxState)

// reduxState = reducer(reduxState, { type: "post/incrementby30", payload: 30 });
// console.log(reduxState)


// reduxState = reducer(reduxState, { type: "post/decrementby10", payload: 10 });
// console.log(reduxState)



// ! NOW USING REDUX HOW TO IMPLEMENT 



console.log("Hello World");