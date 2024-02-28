import {combineReducers,configureStore} from "@reduxjs/toolkit"
import {thunk} from "redux-thunk";
import authReducer from "./AuthSlice";
import TaskSlice from "./TaskSlice";
import submissionSlice from './SubmessionSlice';
const rootReducer=combineReducers(
    {
        auth:authReducer,
        task:TaskSlice,
        submission:submissionSlice
    }
    
)
const store=configureStore({
reducer:rootReducer,middleware:(buildGetDefaultMiddleware)=>buildGetDefaultMiddleware().concat(thunk)
})
export default store;