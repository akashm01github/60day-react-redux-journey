import {createStore} from 'redux';




const initialState = {
    count: 0,
    userName: "Akash Mukherjee",
    age: 24
}

const INCREMENT = "post/increment";

const DECREMENT = "post/decrement";

const INCREMENTBY = "post/incrementby30";

const DECREMENTBY = "post/decrementby10";



function reducer(state = initialState, action) {
    if (action.type == INCREMENT) {
        return { ...state, count: state.count + 1 }
    }
    else if (action.type == DECREMENT) {
        return { ...state, count: state.count - 1 }
    }

    else if (action.type == INCREMENTBY) {
        return { ...state, count: state.count + action.payload }
    }

    else if (action.type == DECREMENTBY) {
        return { ...state, count: state.count - action.payload }
    }

    return state
}


const store = createStore(reducer)


store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch({type : INCREMENT})


store.dispatch({type : DECREMENT})


store.dispatch({type : INCREMENTBY , payload:40})


store.dispatch({type : DECREMENTBY , payload:10})



