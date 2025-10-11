import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MyRecipeContext } from '../context/RecipeContext';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const SingleRecipes = () => {



    const [data, setdata] = useContext(MyRecipeContext);

    const params = useParams();

    const recipe = data.find((recipe)=>params.id == recipe.id);


    


    // Form Part

    const navigate =  useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({defaultValues:{
        title:recipe.title,
        description:recipe.description,
        ingredients:recipe.ingredients,
        instructions:recipe.instructions,
        price:recipe.price,
        catagories:recipe.catagories,
        recipe_url:recipe.recipe_url


    }})


    const submitHandeler = (recipeData) => {
        const recipeIndex = data.findIndex((recipe)=>params.id == recipe.id);

        const copyData = [...data];

        copyData[recipeIndex] = {...copyData[recipeIndex],...recipeData}
        
        setdata(copyData)

        

    }


    const deleteHandeler = ()=>{
        const filterData = data.filter((r)=> r.id != params.id);

        setdata(filterData);

        navigate('/recipes')
    }
    
    return ( recipe ? <div className='mt-5 w-full py-3 px-2 border flex  gap-4'>
        {/* Showing Data */}
       <div className='mt-5 w-1/2 py-3 px-2 border flex flex-col gap-10'>
         <h1 className='text-2xl font-black text-pink-500'>{recipe.title}</h1>
        <div className='border h-[300px]'>
            <img className='w-full h-full' src={recipe.recipe_url} alt="" />
        </div>

        <p>{recipe.description}</p>
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
       </div>

        {/* Updating Data */}
       <div className='w-1/2'>
             <form onSubmit={handleSubmit(submitHandeler)} className='flex flex-col gap-5 rounded-2xl border px-6 py-3  w-full bg-[#FFDFD6]'>
                <input  {...register("title", { required: "Recipe Title Can't Be Empty" })} type="text" placeholder='Enter the Recipe Title' className='px-4 py-2 text-black font-semibold  text-xl border outline-0 rounded bg-[#F5EFFF]' />
                {errors.title && <span className='text-red-600 font-semibold'>{errors.title.message}</span>}


                <input  {...register("recipe_url", { required: "Recipe Image URL Can't Be Empty" })} type="url" placeholder='Recipe Image URL' className='px-4 py-2 text-black font-semibold  text-xl border outline-0 rounded bg-[#F5EFFF]' />
                {errors.recipe_url && <span className='text-red-600 font-semibold'>{errors.recipe_url.message}</span>}


                <textarea {...register("description", { required: "Recipe Description Can't Be Empty" })} placeholder='Enter the Description' className='px-4 py-2 h-32  text-black font-semibold resize-none  text-xl border outline-0 rounded bg-[#F5EFFF]'></textarea>
                {errors.description && <span className='text-red-600 font-semibold'>{errors.description.message}</span>}


                <textarea  {...register("ingredients", { required: "Recipe Ingredients Can't Be Empty" })} placeholder='Enter the ingredients' className='px-4 py-2 h-32 resize-none text-black font-semibold  text-xl border outline-0 rounded bg-[#F5EFFF]'></textarea>
                {errors.ingredients && <span className='text-red-600 font-semibold'>{errors.ingredients.message}</span>}


                <textarea  {...register("instructions", { required: "Recipe instructions Can't Be Empty" })} placeholder='Enter the instructions' className='px-4 py-2 h-32 resize-none text-black font-semibold  text-xl border outline-0 rounded bg-[#F5EFFF]'></textarea>
                {errors.instructions && <span className='text-red-600 font-semibold'>{errors.instructions.message}</span>}


                
                <input  {...register("price", { required: "Recipe Price Can't Be Empty" })} type="text" placeholder='Enter the Price' className='px-4 py-2 text-black font-semibold  text-xl border outline-0 rounded bg-[#F5EFFF]' />
                {errors.price && <span className='text-red-600 font-semibold'>{errors.price.message}</span>}


                <select  {...register("catagories", { required: "Recipe Price Can't Be Empty" })} name="catagories" id="" className='px-4 py-2  resize-none text-black font-semibold  text-xl border outline-0 rounded bg-[#F5EFFF]'>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>

                <button className='border px-4 py-3 active:scale-80 transition-all cursor-pointer text-xl rounded-lg bg-green-400 text-black font-semibold'>Update Recipe</button>
                <button onClick={deleteHandeler} className='border px-4 py-3 active:scale-80 transition-all cursor-pointer text-xl rounded-lg bg-red-500 font-semibold'>Delete Recipe</button>
            </form>
       </div>
    </div> : <h1 className='text-4xl text-red-600 font-semibold'>Loading...</h1>)
}

export default SingleRecipes