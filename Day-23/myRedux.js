export function mycreateStore(reducer){
    let state;

    let listeners = [];

    const store = {
        getState(){
            return state;
        },

        dispatch(action){
            state = reducer(state,action);

            listeners.forEach((listener)=>{
                listener();
            })


        },
        subscribe(listener){
            listeners.push(listener)
        }
    };

    return store;
}