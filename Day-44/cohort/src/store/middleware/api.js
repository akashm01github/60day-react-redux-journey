

export const apiMiddleWare = ({ dispatch }) => (next) => (action) => {

    const BASE_URL = 'https://fakestoreapi.com';

    if (action.type == "api/makeCall") {
        next(action)
        const { url, onSuccess, onStart } = action.payload;


        dispatch({
            type:onStart
        })
        
        const fetchData = async () => {
            const data = await fetch(`${BASE_URL}${url}`);
            const productsList = await data.json();

            dispatch({
                type: onSuccess,
                payload: productsList
            });
        }
        fetchData()
    } else {
        next(action);
    }
}

export const fetchData = (payload) => ({ type: 'api/makeCall', payload })