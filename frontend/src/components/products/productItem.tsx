import React from 'react'
import {Card, CardContent, Skeleton, Typography} from "@mui/material";
import {Product} from "../../models/product";

export const ProductItem = ({title,img}: Product) => {
    return <>
        <Card sx={{width: 275, height: 350}}>
            <CardContent>
                {/*<img src={img}/>*/}
                {/*<Typography>{title}</Typography>*/}
                <Skeleton variant="rectangular" width={'100%'} height={250} sx={{margin: "auto"}}/>
                <Skeleton sx={{marginTop: 2.5}}/>
                <Skeleton width={"60%"} />
            </CardContent>
        </Card>
    </>
}