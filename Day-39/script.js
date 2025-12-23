
import { createStore } from 'redux';
import myCreateStore from './myStore';


const initialState = {
    count: 0,
    userName: "Akash Mukherjee",
    age: 24
}


function reducer(state = initialState, action) {
    if (action.type == "INCREMENT") {
        return { ...state, count: state.count + 1 }
    }
    else if(action.type == "DECREMENT"){
         return { ...state, count: state.count - 1 }
    }
    else if(action.type == "INCREMENTBY10"){
         return { ...state, count: state.count + action.paylaod }
    }
    else if(action.type == "DECREMENTBY5"){
         return { ...state, count: state.count - action.paylaod }
    }
}

const store = createStore(reducer);

console.log(store.getState());


store.subscribe(()=>{
    console.log(store.getState());
})


// INCREMENT
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });

// DECREMENT
store.dispatch({ type: "DECREMENT" });


// INCREMENT BY 10
store.dispatch({ type: "INCREMENTBY10" ,paylaod:10});


// DECREMENT BY 5
store.dispatch({ type: "DECREMENTBY5" ,paylaod:5});





//! MY CASTOM STORE



// const store = myCreateStore(reducer);


// INCREMENT
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });

// store.subscribe(()=>{
//     console.log(store.getState())
// })

// DECREMENT
// store.dispatch({ type: "DECREMENT" });


// INCREMENT BY 10
// store.dispatch({ type: "INCREMENTBY10" ,paylaod:10});


// DECREMENT BY 5
// store.dispatch({ type: "DECREMENTBY5" ,paylaod:5});