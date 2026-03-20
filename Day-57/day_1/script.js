import { createStore } from 'redux'


let reduxState = {
    count: 0,
    userName: 'Akash Mukherjee',
    age: 24
}


function reducer(state = reduxState, action) {
    if (action.type == "COUNT/INCREMENT") {
        return { ...state, count: state.count + 1 }
    }
    else if (action.type == "COUNT/DECREMENT") {
        return { ...state, count: state.count - 1 }
    }
    else if (action.type == "COUNT/INCREMENT BY 20") {
        return { ...state, count: state.count + action.payload }
    }
    return state
}

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.());


store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({ type: 'COUNT/INCREMENT' });


store.dispatch({ type: 'COUNT/INCREMENT' });


store.dispatch({ type: 'COUNT/INCREMENT BY 20', payload: 20 });

store.dispatch({ type: 'COUNT/DECREMENT' });

