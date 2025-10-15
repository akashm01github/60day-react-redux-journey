import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import {nanoid} from 'nanoid'
import { MyRecipeContext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateRecipe = () => {

    const [data, setdata] = useContext(MyRecipeContext);

    const navigate =  useNavigate();

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

        localStorage.setItem("recipes",JSON.stringify(copyData));

        toast.success("Recipe Created");

        reset();

        navigate('/recipes')
        
    }

    console.log(data)

    

    
   



    return (
        <div className='flex justify-center items-center px-4 py-3  mt-4'>
            <form onSubmit={handleSubmit(submitHandeler)} className='flex flex-col gap-5 rounded-2xl border px-6 py-3  w-[500px] bg-[#FFDFD6]'>
                <input {...register("title", { required: "Recipe Title Can't Be Empty" })} type="text" placeholder='Enter the Recipe Title' className='px-4 py-2 text-black font-semibold  text-xl border outline-0 rounded bg-[#F5EFFF]' />
                {errors.title && <span className='text-red-600 font-semibold'>{errors.title.message}</span>}


                <input {...register("recipe_url", { required: "Recipe Image URL Can't Be Empty" })} type="url" placeholder='Recipe Image URL' className='px-4 py-2 text-black font-semibold  text-xl border outline-0 rounded bg-[#F5EFFF]' />
                {errors.recipe_url && <span className='text-red-600 font-semibold'>{errors.recipe_url.message}</span>}


                <textarea {...register("description", { required: "Recipe Description Can't Be Empty" })} placeholder='Enter the Description' className='px-4 py-2 h-32  text-black font-semibold resize-none  text-xl border outline-0 rounded bg-[#F5EFFF]'></textarea>
                {errors.description && <span className='text-red-600 font-semibold'>{errors.description.message}</span>}


                <textarea {...register("ingredients", { required: "Recipe Ingredients Can't Be Empty" })} placeholder='Enter the ingredients' className='px-4 py-2 h-32 resize-none text-black font-semibold  text-xl border outline-0 rounded bg-[#F5EFFF]'></textarea>
                {errors.ingredients && <span className='text-red-600 font-semibold'>{errors.ingredients.message}</span>}


                <textarea {...register("instructions", { required: "Recipe instructions Can't Be Empty" })} placeholder='Enter the instructions' className='px-4 py-2 h-32 resize-none text-black font-semibold  text-xl border outline-0 rounded bg-[#F5EFFF]'></textarea>
                {errors.instructions && <span className='text-red-600 font-semibold'>{errors.instructions.message}</span>}


                
                <input {...register("price", { required: "Recipe Price Can't Be Empty" })} type="text" placeholder='Enter the Price' className='px-4 py-2 text-black font-semibold  text-xl border outline-0 rounded bg-[#F5EFFF]' />
                {errors.price && <span className='text-red-600 font-semibold'>{errors.price.message}</span>}


                <select {...register("catagories", { required: "Recipe Price Can't Be Empty" })} name="catagories" id="" className='px-4 py-2  resize-none text-black font-semibold  text-xl border outline-0 rounded bg-[#F5EFFF]'>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>

                <button className='border px-4 py-3 active:scale-80 transition-all cursor-pointer text-xl rounded-lg bg-[#722323] font-semibold'>Submit</button>
            </form>
        </div>
    )
}

export default CreateRecipe