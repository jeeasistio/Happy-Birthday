import { Box, Typography } from '@mui/material'
import React from 'react'

export const NotGood = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundColor: '#C9FCBD',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography align="center" variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
        </Box>
    )
}
