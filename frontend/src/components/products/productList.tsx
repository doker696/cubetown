import React from 'react';
import {useSelector} from "react-redux";
import {AppDispatch,RootState} from "../../store"
import { ProductItem } from "./productItem"
import {Grid} from "@mui/material";

export const ProductList = () => {
    const products = useSelector((state: RootState) => state.productReducer)

    return (
        <Grid container spacing={2} >
            {products.map(product => {
                return (
                    <Grid item key={product.id}>
                        <ProductItem {...product} />
                    </Grid>
                )
            })}
        </Grid>)
}
