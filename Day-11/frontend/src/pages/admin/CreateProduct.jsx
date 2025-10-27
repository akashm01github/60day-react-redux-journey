import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {nanoid} from 'nanoid'
import { asynccreateproduct } from '../../store/actions/productActions';

const CreateProduct = () => {
  const dispatch  = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const CreateProductHandeler = (product) => {
    product.id  = nanoid();
    console.log(product)
    dispatch(asynccreateproduct(product));
    navigate('/products');
  }


  return (
    <form onSubmit={handleSubmit(CreateProductHandeler)} className='flex flex-col w-1/2 items-start'>
      <input {...register("title")} type="text" placeholder='Enter the title' className='outline-0 border-b p-2 text-2xl mb-3' />

      <input {...register("price")} type="text" placeholder='Enter the price' className='outline-0 border-b p-2 text-2xl mb-3' />

      <input {...register("image")} type="url" placeholder='Enter the image url' className='outline-0 border-b p-2 text-2xl mb-3' />
      
      <input {...register("category")} type="text" placeholder='Enter the category' className='outline-0 border-b p-2 text-2xl mb-3' />

      <textarea {...register("description")} type="text" placeholder='Enter the description' className='outline-0 border-b resize-none p-2 text-2xl mb-3'></textarea>


      <button className='mt-4 px-4 text-black cursor-pointer font-semibold py-2 bg-green-500 rounded'>Create Product</button>
    </form>
  )
}

export default CreateProduct



