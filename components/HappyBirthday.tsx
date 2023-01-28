import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

export const HappyBirthday = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                p: 4,
                backgroundColor: '#D69797',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box component={motion.div} sx={{ backgroundColor: '#EDC0C0', width: '100%', height: '100%' }}></Box>
            <Typography
                sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                variant="h1"
            >
                Happy Birthday
            </Typography>
        </Box>
    )
}
