
// Import the Modules 
import axios from '../../api/AxiosConfig';
import { loaduser, removeuser } from '../reducers/userSlice';


export const asyncloginuser = (user) => async (dispatch, getState) => {
    try {

        const { data } = await axios.get(`/users?email=${user.email}&password=${user.password}`);
        localStorage.setItem('user', JSON.stringify(data[0]))


    } catch (error) {
        console.log(error)
    }
}


export const asynclogoutuser = (user) => async (dispatch, getState) => {
    try {
        localStorage.removeItem('user');

        dispatch(removeuser())

    } catch (error) {
        console.log(error)
    }
}



//! Who logged in already 

export const asynccurrentuser = () => async (dispatch, getState) => {
    try {

        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            dispatch(loaduser(user))
        }
        else {
            console.log('Log in to access the Resources...')
        }

    } catch (error) {
        console.log(error)
    }
}





export const asyncregisteruser = (user) => async (dispatch, getState) => {
    try {

        const response = await axios.post('/users', user);

        console.log(response);


    } catch (error) {
        console.log(error)
    }
}