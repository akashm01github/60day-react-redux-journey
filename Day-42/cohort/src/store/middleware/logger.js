// CURRYING FUNCTION
export default function logger(store){
  return function(next){
    return function(action){
        console.log(store)
        console.log(next)
        console.log(action)
        next(action);
    }
  }
}