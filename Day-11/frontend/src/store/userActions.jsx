import axios from '../api/AxiosConfig';
import { loaduser } from './userSlice';


// thunk in Redux
export const asyncgetUsers = () => async (dispatch, getState) => {
    try {
        console.log("Current State--->",getState())
        const res = await axios.get('/users');
        dispatch(loaduser(res.data));

    } catch (error) {
        console.log(error)
    }
}