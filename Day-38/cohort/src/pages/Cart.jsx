import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, removeFromCart } from "../store/reducer/cartReducer";

const Cart = () => {

    const cart = useSelector((state)=>state.cartItem);

    const dispatch = useDispatch();

    console.log(cart)

    const renderData = cart.map((item,idx)=>{
        return (
            <div key={idx} className="grid grid-cols-5 items-center py-6 border-b">
        {/* Product */}
        <div className="col-span-2 flex items-center gap-4">
          <img
            src={item.productData.image}
            alt="Furniture Set"
            className="w-20 h-20 rounded-md object-cover"
          />
          <div>
            <h3 className="font-semibold">{item.productData.title}</h3>

          </div>
        </div>

        {/* Quantity */}
        <div className="flex justify-center items-center gap-3">
          <button onClick={()=>dispatch(decrement(item.id))} className="w-8 h-8 border rounded-full">-</button>
          <span className="font-medium">{item.count}</span>
          <button onClick={()=>dispatch(increment(item.id))} className="w-8 h-8 border rounded-full">+</button>
        </div>

        {/* Total */}
        <div className="text-center font-semibold">{item.productData.price * item.count}</div>

        {/* Action */}
        <div className="flex justify-center">
          <Trash2 onClick={()=>dispatch(removeFromCart(item.id))} size={18} className="text-gray-500" />
        </div>
      </div>
        )
    })



  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="grid grid-cols-5 text-sm font-semibold text-gray-500 border-b pb-3">
        <span className="col-span-2">Product Code</span>
        <span className="text-center">Quantity</span>
        <span className="text-center">Total</span>
        <span className="text-center">Action</span>
      </div>

     {renderData}

    </div>
  );
};

export default Cart;
