import {createStore} from 'redux'
import { mycreateStore } from './myRedux'

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

const store = createStore(reducer);

const myStore = mycreateStore(reducer);

console.log(store);

console.log(myStore)

myStore.subscribe(()=>{
    console.log(myStore.getState())
})

myStore.dispatch({type:INCREMENT})


myStore.dispatch({type:INCREMENTBY, payload:30})



