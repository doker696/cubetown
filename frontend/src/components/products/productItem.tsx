import React from 'react'
import {Card, CardContent, Typography} from "@mui/material";

type props = {
    title: string
}

export const ProductItem = ({title}: props) => {
    return <>
        <Card sx={{width: 275}}>
            <CardContent>
                <Typography>{title}</Typography>
            </CardContent>
        </Card>
    </>
}