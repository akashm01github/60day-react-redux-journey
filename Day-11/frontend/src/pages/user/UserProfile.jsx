import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../../store/actions/userActions';

const UserProfile = () => {
    // const products = useSelector((state) => state.productReducer.products);
    const users = useSelector((state) => state.userReducer.users);
    console.log(users)


    const { id } = useParams();
    // const product = products?.find((product) => product.id == id);
    // console.log(product);




    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues:{
            email:users?.email,
            username:users?.username,
            password:users?.password,
        }
    })


    const UpdateUserHandeler = (user) => {
        dispatch(asyncupdateuser(users.id,user))
    }

    // if (!product) {
    //     return <h2>Loading Product...</h2>;
    // }


     const LogoutUserHandeler = () => {
        dispatch(asynclogoutuser());
        navigate('/login');
    }


    const DeleteHandeler = () => {
        dispatch(asyncdeleteuser(users.id));
        navigate('/login');
    }



    
    return (users?  <div>
            <form onSubmit={handleSubmit(UpdateUserHandeler)} className='flex flex-col  items-start mt-5 mb-5'>
                <input {...register("username")} type="text" placeholder='Enter the username' className='outline-0 border-b p-2 text-2xl mb-3' />

                <input {...register("email")} type="text" placeholder='Enter the email' className='outline-0 border-b p-2 text-2xl mb-3' />
                
                <input {...register("password")} type="text" placeholder='Enter the password' className='outline-0 border-b p-2 text-2xl mb-3' />


                <div className='flex gap-5 mt-5'>
                    <button className='mt-4 px-4 text-black cursor-pointer  font-semibold py-2 bg-green-500 rounded'>Update User</button>

                    <button onClick={DeleteHandeler} className='mt-4 px-4 cursor-pointer  font-semibold py-2 bg-red-500 text-white rounded' type='button'>Delete User</button>

                    <button onClick={() => { LogoutUserHandeler() }} className='mt-4 px-4 cursor-pointer  font-semibold py-2 bg-[#450693] text-white rounded' type='button'>Logout User</button>
                </div>
            </form>
        </div> : <><h1>Loading...</h1></>)
}

export default UserProfile