
export const apiMiddleWare = ({ dispatch }) => (next) => (action) => {
  const BASE_URL = "https://fakestoreapi.com";

  if (action.type == "api/makeCall") {
    next(action)
    const { url, onSuccess, onStart } = action.payload;


    const fetchData = async () => {
      dispatch({
        type: onStart
      })
      const data = await fetch(`${BASE_URL}/${url}`);
      const newData = await data.json();
      dispatch({
        type: onSuccess,
        payload: newData
      })
    }


    fetchData();
  }
  else {
    return next(action)
  }
}


export const fetchData = (payload) => ({ type: "api/makeCall", payload });