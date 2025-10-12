import React, { useContext } from 'react'
import { recipeDataContext } from '../context/RecipeContext';

import { useForm } from 'react-hook-form';

import { nanoid } from 'nanoid'
import { toast } from 'react-toastify';

const CreateRecipe = () => {
  const [data, setdata] = useContext(recipeDataContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()


  const submitHandeler = (recipe) => {

    recipe.id = nanoid();

    let copyData = [...data];

    copyData.push(recipe);

    setdata(copyData);

    toast.success("Recipe Created");
  }




  return (
    <div className='px-10  py-4 flex justify-center items-center'>
      <div className='w-[500px]'>
        <form onSubmit={handleSubmit(submitHandeler)} className='bg-[#CFD2CF] px-4 py-4 rounded-lg flex justify-center items-center flex-col gap-4'>

          <input {...register("title", { required: "Recipe Title Can't be Empty" })} type="text" placeholder='Enter Recipe Title' className='border rounded w-[90%] px-4 py-2 outline-0 bg-[#F5EDDC] text-lg' />
          {errors.title && (<span className='text-red-600'>{errors.title.message}</span>)}

          <input {...register("recipe_url", { required: "Recipe URL Can't be Empty" })} type="text" placeholder='Enter Recipe URL Title' className='border rounded w-[90%] px-4 py-2 outline-0 bg-[#F5EDDC] text-lg' />
          {errors.recipe_url && (<span className='text-red-600'>{errors.recipe_url.message}</span>)}


          <input {...register("price", { required: "Recipe price Can't be Empty" })} type="text" placeholder='Enter Recipe Price' className='border rounded w-[90%] px-4 py-2 outline-0 bg-[#F5EDDC] text-lg' />
          {errors.price && (<span className='text-red-600'>{errors.price.message}</span>)}


          <textarea {...register("description", { required: "Recipe description Can't be Empty" })} type="text" placeholder='Enter Recipe description ' className='border h-20 resize-none rounded w-[90%] px-4 py-2 outline-0 bg-[#F5EDDC] text-lg'></textarea>
          {errors.description && (<span className='text-red-600'>{errors.description.message}</span>)}


          <textarea {...register("ingredients", { required: "Recipe ingredients Can't be Empty" })} type="text" placeholder='Enter Recipe ingredients' className='border h-20 resize-none rounded w-[90%] px-4 py-2 outline-0 bg-[#F5EDDC] text-lg'></textarea>
          {errors.ingredients && (<span className='text-red-600'>{errors.ingredients.message}</span>)}



          <textarea {...register("instructions", { required: "Recipe instructions Can't be Empty" })} type="text" placeholder='Enter Recipe instructions' className='border h-20 resize-none rounded w-[90%] px-4 py-2 outline-0 bg-[#F5EDDC] text-lg'></textarea>
          {errors.instructions && (<span className='text-red-600'>{errors.instructions.message}</span>)}


          <select {...register("categories", { required: "categories can't be empty" })} className='border rounded w-[90%] px-4 py-2 outline-0 bg-[#F5EDDC] text-lg'>
            <option value="breakfast">BreakFast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>


          <button className='border cursor-pointer px-7 py-2 text-lg rounded bg-[#21325E] text-white active:scale-80 transition-all'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateRecipe