
export const apiMiddleWare = ({dispatch}) => (next) => (action) => {
  const BASE_URL = "https://fakestoreapi.com";

  if (action.type == "api/makeCall") {
    const { url, onSuccess } = action.payload
    const fetchData = async () => {
      console.log(`${BASE_URL}/${url}`)
      const data = await fetch(`${BASE_URL}/${url}`);
      const newData = await data.json();
      dispatch(onSuccess(newData))
    }

    fetchData();
  }
  else {
    return next(action)
  }
}