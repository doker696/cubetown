import React from 'react'
import {Box, Button, Paper, Slider, Stack, Typography} from "@mui/material";
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
            border: '1px solid',
            borderRadius: '5px',
        }}
        >
            <Stack
                height={'100%'}
                direction={'column'}
                justifyContent={'space-evenly'}
                alignItems={"center"}
                spacing={0}
                width={'90%'}
                marginX={'auto'}
            >
                <Typography>Filter</Typography>
                <Slider defaultValue={23} aria-label="Default" valueLabelDisplay="auto" />
                <Slider defaultValue={64} aria-label="Default" valueLabelDisplay="auto" />
                <Slider defaultValue={35} aria-label="Default" valueLabelDisplay="auto" />
                <Slider defaultValue={73} aria-label="Default" valueLabelDisplay="auto" />
                <Button>Apply</Button>
            </Stack>
        </Box>
    </>
}