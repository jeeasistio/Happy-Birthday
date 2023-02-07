import React from 'react'
import { Box } from '@mui/material'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import TextCtn from './TextCtn'
import { getTransition } from '../utils/transition'

export const HappyBirthday = () => {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, -200])
    const scale = useTransform(scrollY, [0, 500], [1, 0.8])
    const opacity = useTransform(scrollY, [0, 500], [1, 0])
    const smoothY = useSpring(y, { damping: 20, stiffness: 80 })
    const smoothScale = useSpring(scale, { damping: 20, stiffness: 80 })
    const smoothOpacity = useSpring(opacity, { damping: 20, stiffness: 80 })

    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                width: '100vw',
                p: '2%',
                backgroundColor: '#E96E66',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                component={motion.div}
                style={{ y: smoothY, scale: smoothScale, opacity: smoothOpacity }}
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: 12,
                    }}
                    component="video"
                    width={'100%'}
                    height={'100%'}
                    autoPlay
                    loop
                    muted
                >
                    <source src="/skyvids/skyvid_full.mp4" type="video/mp4" />
                </Box>
                <Box
                    component={motion.div}
                    initial={{ y: '0%' }}
                    animate={{ y: '-100%' }}
                    transition={getTransition({ delay: 5 })}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '40%',
                        backgroundColor: '#E96E66',
                    }}
                />
                <Box
                    component={motion.div}
                    initial={{ y: '0%' }}
                    animate={{ y: '100%' }}
                    transition={getTransition({ delay: 5 })}
                    sx={{
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        width: '100%',
                        height: '40%',
                        backgroundColor: '#E96E66',
                    }}
                />
                <Box
                    component={motion.div}
                    initial={{ x: '0%' }}
                    animate={{ x: '-100%' }}
                    transition={getTransition({ delay: 4 })}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '50%',
                        height: '100%',
                        backgroundColor: '#E96E66',
                    }}
                />
                <Box
                    component={motion.div}
                    initial={{ x: '0%' }}
                    animate={{ x: '100%' }}
                    transition={getTransition({ delay: 4 })}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '50%',
                        height: '100%',
                        backgroundColor: '#E96E66',
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {'Happy Birthday Viki'.split(' ').map((char, index) => (
                    <TextCtn
                        key={index}
                        delay={0.2 * index + 4}
                        once={true}
                        typographyProps={{
                            color: 'common.white',
                        }}
                    >
                        {char}
                    </TextCtn>
                ))}
            </Box>
        </Box>
    )
}
