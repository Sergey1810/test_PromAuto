import {AppDispatch} from "../index";
import {IUser} from "../../models/IUser";
import axios from "axios";
import {userSlice} from "./UserSlice";

export const fetchUsers = () => async (dispatch:AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching())
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.userFetchingSuccess(response.data))
    }catch (e){
        // @ts-ignore
        dispatch(userSlice.actions.userFetchingError(e.message))
    }
}