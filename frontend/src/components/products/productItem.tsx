import React from 'react'
import {Card, CardContent, Typography} from "@mui/material";
import {Product} from "../../models/product";

export const ProductItem = ({title,img}: Product) => {
    return <>
        <Card sx={{width: 275, height: 350}}>
            <CardContent>
                <img src={img}/>
                <Typography>{title}</Typography>
            </CardContent>
        </Card>
    </>
}