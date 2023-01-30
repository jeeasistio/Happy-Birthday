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
            <Typography align="center" variant="h1">
                I&apos;m not good with words so I&apos;ll just throw photos here.
            </Typography>
        </Box>
    )
}
