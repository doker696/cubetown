import React from 'react'
import {Box, Paper, Stack} from "@mui/material";
import {styled} from '@mui/material/styles';

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Filter = () => {

    return <>
        <Box sx={{
            width: 200,
            height: 250,
            color: 'primary.main',
            border: '3px solid',
            borderRadius: '5px'
        }}
        >
            <Stack
                height={'100%'}
                direction={'column'}
                justifyContent={'space-evenly'}
                alignItems={"center"}
                spacing={0}
            >
                <Item>
                    <div>filter1</div>
                </Item>
                <Item>
                    <div>filter2</div>
                </Item>
                <Item>
                    <div>filter3</div>
                </Item>
                <Item>
                    <div>filter4</div>
                </Item>
            </Stack>
        </Box>
    </>
}