import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/product";
import { v4 as uuidv4 } from "uuid";

const initialState = [
    {id: uuidv4(), title: "1", img: `https://source.unsplash.com/random/200x275?sig=${Math.random()}`},
    {id: uuidv4(), title: "1", img: `https://source.unsplash.com/random/200x275?sig=${Math.random()}`},
    {id: uuidv4(), title: "1", img: `https://source.unsplash.com/random/200x275?sig=${Math.random()}`},
    {id: uuidv4(), title: "1", img: `https://source.unsplash.com/random/200x275?sig=${Math.random()}`},
    {id: uuidv4(), title: "1", img: `https://source.unsplash.com/random/200x275?sig=${Math.random()}`},
    {id: uuidv4(), title: "1", img: `https://source.unsplash.com/random/200x275?sig=${Math.random()}`},
    {id: uuidv4(), title: "1", img: `https://source.unsplash.com/random/200x275?sig=${Math.random()}`},
    {id: uuidv4(), title: "1", img: `https://source.unsplash.com/random/200x275?sig=${Math.random()}`},
    {id: uuidv4(), title: "1", img: `https://source.unsplash.com/random/200x275?sig=${Math.random()}`},
    {id: uuidv4(), title: "1", img: `https://source.unsplash.com/random/200x275?sig=${Math.random()}`},
    {id: uuidv4(), title: "1", img: `https://source.unsplash.com/random/200x275?sig=${Math.random()}`},
] as Product[]

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    }
})

export default productSlice.reducer