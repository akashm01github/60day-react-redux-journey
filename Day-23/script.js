import {createStore} from 'redux'
import { myCreateStore } from './myRedux';

const initialState = {
    count: 0,
    userName: "akashm",
    age: 24
}

const INCREMENT = "post/increment"

const INCREMENTBY = "post/incrementby"

function reducer(state = initialState, action) {
    if (action.type == INCREMENT ) {
        return { ...state, count: state.count + 1 }
    }
    else if(action.type == INCREMENTBY ){
        return { ...state, count: state.count + action.payload }
    }
    return state;
}

// const store = createStore(reducer);



// console.log(store);

// store.subscribe(()=>{
//     console.log(store.getState())
// })

// store.dispatch({type:INCREMENT})


// store.dispatch({type:INCREMENTBY, payload:30})


//! OWN REDUX 

const myStore = myCreateStore(reducer);

myStore.subscribe(()=>{
    console.log(myStore.getState());
})

myStore.dispatch({type:INCREMENT});

myStore.dispatch({type:INCREMENT});

myStore.dispatch({type:INCREMENT});

myStore.dispatch({type:INCREMENT});





