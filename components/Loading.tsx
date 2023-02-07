import React from 'react'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import { getTransition } from '../utils/transition'

export const Loading = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#D35F57',
            }}
        >
            <Box component={motion.div} initial={{ y: '-400%' }} animate={{ y: '0%' }} sx={{ position: 'relative' }}>
                <Box
                    component={motion.div}
                    initial={{ y: '0%' }}
                    transition={getTransition({ delay: 1 })}
                    animate={{ y: '-200%' }}
                    sx={{
                        width: 20,
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 30,
                        border: 4,
                        backgroundColor: '#F9DC78',
                    }}
                />
                <Box
                    component={motion.div}
                    transition={getTransition({ delay: 2 })}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 90 }}
                    style={{ originX: 1, originY: 1 }}
                    sx={{
                        width: 80,
                        height: 30,
                        backgroundColor: '#E96E66',
                        border: 4,
                    }}
                />
                <Box
                    component={motion.div}
                    transition={getTransition({ delay: 3 })}
                    initial={{ scale: 1 }}
                    animate={{ scale: 50 }}
                    sx={{
                        width: 80,
                        height: 50,
                        backgroundColor: '#E96E66',
                        border: 4,
                    }}
                />
            </Box>
        </Box>
    )
}
