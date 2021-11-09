import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";
import productReducer from "./productSlice"

const combine = combineReducers({todosReducer,productReducer})

export const store = configureStore({
    reducer: combine,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;