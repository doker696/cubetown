import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/product";
import { v4 as uuidv4 } from "uuid";

const initialState = [
    {id: uuidv4(), title: "1"},
    {id: uuidv4(), title: "2"},
    {id: uuidv4(), title: "3"},
    {id: uuidv4(), title: "4"},
    {id: uuidv4(), title: "1"},
    {id: uuidv4(), title: "2"},
    {id: uuidv4(), title: "3"},
    {id: uuidv4(), title: "4"},
    {id: uuidv4(), title: "1"},
    {id: uuidv4(), title: "2"},
    {id: uuidv4(), title: "3"},
    {id: uuidv4(), title: "4"},
] as Product[]

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    }
})

export default productSlice.reducer