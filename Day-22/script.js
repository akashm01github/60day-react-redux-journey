
let state = {
    count: 0,
    userName: "Akash Mukherjee",
    age: 24
}


const prevState = state

function increment() {

    // Mutate State
    // state.count  = state.count+1;


    // Not Mutating State
    state = { ...state, count: state.count + 1 }

}



console.log(state);
increment()
console.log(state);
increment()
console.log(state);
increment()
console.log(state);
