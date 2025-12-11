export const apiMiddleWare  = (store)=>(next)=>(action)=>{
  console.log(store)
      console.log(next)
      console.log(action)
      next(action)
}