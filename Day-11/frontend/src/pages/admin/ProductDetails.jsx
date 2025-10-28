import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { asyncdeleteproduct, asyncupdateproduct } from '../../store/actions/productActions';

const ProductDetails = () => {
  const products = useSelector((state) => state.productReducer.products);
  const users = useSelector((state) => state.userReducer.users);
  // console.log(users)


  const { id } = useParams();
  const product = products?.find((product) => product.id == id);
  // console.log(product);




  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: product?.title,
      description: product?.description,
      price: product?.price,
      image: product?.image,
      category: product?.category
    }
  })


  const UpdateProductHandeler = (product) => {
    dispatch(asyncupdateproduct(id, product));
  }

  if (!product) {
    return <h2>Loading Product...</h2>;
  }


  const DeleteHandeler = () => {
    dispatch(asyncdeleteproduct(id));
    navigate('/products')
  }



  return (product ? <>
    <div className='w-full flex gap-4'>
      <img className='w-1/2 h-1/2 bg-[#ECF4E8] rounded-2xl p-2' src={product.image} alt="" />
      <div className='w-1/2 h-1/2 border px-3 py-2'>
        <h1 className='text-3xl font-bold mb-5'>{product.title}</h1>
        <p className='text-2xl text-green-400 font-thin mb-5'>${product.price}</p>
        <p>{product.description}</p>

        <button className='border rounded-2xl px-4 py-1 mt-6 active:scale-90'>Add to Cart</button>
      </div>
    </div>

    <hr className='mt-5' />

    {users && users?.isAdmin &&  <form onSubmit={handleSubmit(UpdateProductHandeler)} className='flex flex-col  items-start mt-5 mb-5'>
      <input {...register("title")} type="text" placeholder='Enter the title' className='outline-0 border-b p-2 text-2xl mb-3' />

      <input {...register("price")} type="text" placeholder='Enter the price' className='outline-0 border-b p-2 text-2xl mb-3' />

      <input {...register("image")} type="url" placeholder='Enter the image url' className='outline-0 border-b p-2 text-2xl mb-3' />

      <input {...register("category")} type="text" placeholder='Enter the category' className='outline-0 border-b p-2 text-2xl mb-3' />

      <textarea {...register("description")} type="text" placeholder='Enter the description' className='outline-0 border-b resize-none p-2 text-2xl mb-3'></textarea>


      <div className='flex gap-5 mt-5'>
        <button className='mt-4 px-4 text-black cursor-pointer  font-semibold py-2 bg-green-500 rounded'>Update Product</button>

        <button onClick={() => { DeleteHandeler() }} className='mt-4 px-4 cursor-pointer  font-semibold py-2 bg-red-500 text-white rounded' type='button'>Delete Product</button>
      </div>
    </form>}

   

  </> : <h1>Loading....</h1>)
}

export default ProductDetails