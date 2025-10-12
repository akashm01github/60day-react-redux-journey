import React, { useContext } from 'react'
import { recipeDataContext } from '../context/RecipeContext'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {
    const [data, setdata] = useContext(recipeDataContext);
    const param = useParams();

    let recipe = data.find((recipe) => recipe.id == param.id);

    const navigate = useNavigate();

    console.log(recipe)

    // Form Part
   

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: recipe.title,
            recipe_url: recipe.recipe_url,
            description: recipe.description,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            price: recipe.price,
            catagories: recipe.catagories
        }
    })


    



    const updateHandeler = (recipeUpdateData) => {
        let index = data.findIndex((recipe) => recipe.id == param.id);

        let copyData = [...data];

        copyData[index] = { ...copyData[index], ...recipeUpdateData }

        setdata(copyData);

       

        toast.success("Recipe Updated")


    }


    const deleteHandeler = () => {
        let filterData = data.filter((r) => r.id != param.id);

        setdata(filterData)

        navigate('/recipe')

        toast.error("Recipe Deleted");
    }




    return  (recipe  ? <div className='px-10  mt-5   py-2 flex gap-4'>
        {/* Showing Data */}
        <div className='w-1/2  flex flex-col bg-[#C2E8CE] rounded-lg py-5 px-3 gap-2'>
            <h1 className='text-2xl mt-2 font-black'>{recipe.title}</h1>
            <div className='w-full h-full'>
                <img className='w-full h-full' src={recipe.recipe_url} alt="" />
            </div>
            <p><b>Description: </b>{recipe.description}</p>
            <p><b>Ingredients: </b>{recipe.ingredients}</p>
            <p><b>Instructions: </b>{recipe.instructions}</p>
            <p><b>Catagories: </b>{recipe.catagories}</p>
            <p><b>Price: </b>{recipe.price}</p>
        </div>

        <div className='w-1/2  flex  bg-[#C2E8CE]  rounded-lg py-5 px-3 gap-2'>
            <form onSubmit={handleSubmit(updateHandeler)} className='bg-[#CFD2CF] px-4 py-4 w-full rounded-lg flex justify-center items-center flex-col gap-4'>

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


                <select {...register("catagories", { required: "categories can't be empty" })} className='border rounded w-[90%] px-4 py-2 outline-0 bg-[#F5EDDC] text-lg'>
                    <option value="breakfast">BreakFast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>

                <div className='flex gap-4'>
                    <button type="submit" className='border cursor-pointer px-7 py-2 text-lg rounded bg-green-500 text-black active:scale-80 transition-all'>Update</button>
                    <button onClick={deleteHandeler} type='button' className='border cursor-pointer px-7 py-2 text-lg rounded bg-red-500 text-black active:scale-80 transition-all'>Delete</button>
                </div>
            </form>
        </div>

    </div>: <h1>Loading....</h1>) 
}

export default SingleRecipe