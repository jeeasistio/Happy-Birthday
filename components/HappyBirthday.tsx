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
            <Box
                component={motion.div}
                sx={{
                    position: 'relative',
                    backgroundColor: '#EDC0C0',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}
            >
                <Box
                    component={motion.div}
                    initial={{ y: '0%' }}
                    animate={{ y: '-100%' }}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '50%',
                        backgroundColor: '#D69797',
                    }}
                />
                <Box
                    component={motion.div}
                    initial={{ y: '0%' }}
                    animate={{ y: '100%' }}
                    sx={{
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        width: '100%',
                        height: '50%',
                        backgroundColor: '#D69797',
                    }}
                />
                <Box
                    component={motion.div}
                    initial={{ x: '0%' }}
                    animate={{ x: '-100%' }}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '50%',
                        height: '100%',
                        backgroundColor: '#D69797',
                    }}
                />
                <Box
                    component={motion.div}
                    initial={{ x: '0%' }}
                    animate={{ x: '100%' }}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '50%',
                        height: '100%',
                        backgroundColor: '#D69797',
                    }}
                />
            </Box>
            <Typography
                sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                variant="h1"
            >
                Happy Birthday
            </Typography>
        </Box>
    )
}
