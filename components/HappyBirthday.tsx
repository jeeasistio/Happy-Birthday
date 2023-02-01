import React from 'react'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import TextCtn from './TextCtn'

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
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 4,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {'Happy Birthday Viki'.split(' ').map((char, index) => (
                    <Box key={index} component={motion.div} transition={{ delay: index }}>
                        <TextCtn delay={0.2 * index}>{char}</TextCtn>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
