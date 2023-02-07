import React from 'react'
import { Box, Stack } from '@mui/material'
import { motion } from 'framer-motion'

const images = [
    { id: 1, src: '/skypics/skypic7.jpg', width: 300, height: 200, rotate: '10deg' },
    { id: 2, src: '/skypics/skypic8.jpg', width: 200, height: 200, rotate: '0deg' },
    { id: 3, src: '/skypics/skypic9.jpg', width: 200, height: 200, rotate: '-3deg' },
    { id: 4, src: '/skypics/skypic10.jpg', width: 150, height: 200, rotate: '0deg' },
    { id: 5, src: '/skypics/skypic11.jpg', width: 200, height: 200, rotate: '5deg' },
    { id: 6, src: '/skypics/skypic12.jpg', width: 150, height: 200, rotate: '0deg' },
    { id: 7, src: '/skypics/skypic13.jpg', width: 300, height: 200, rotate: '8deg' },
    { id: 8, src: '/skypics/skypic14.jpg', width: 200, height: 200, rotate: '-5deg' },
    { id: 9, src: '/skypics/skypic15.jpg', width: 300, height: 200, rotate: '3deg' },
    { id: 10, src: '/skypics/skypic16.jpg', width: 300, height: 200, rotate: '-3deg' },
    { id: 11, src: '/skypics/skypic17.jpg', width: 200, height: 200, rotate: '3deg' },
    { id: 12, src: '/skypics/skypic18.jpg', width: 200, height: 200, rotate: '0deg' },
    { id: 13, src: '/skypics/skypic19.jpg', width: 200, height: 200, rotate: '-3deg' },
    { id: 14, src: '/skypics/skypic20.jpg', width: 200, height: 200, rotate: '0deg' },
    { id: 15, src: '/skypics/skypic21.jpg', width: 200, height: 200, rotate: '3deg' },
    { id: 16, src: '/skypics/skypic22.jpg', width: 200, height: 200, rotate: '0deg' },
    { id: 17, src: '/skypics/skypic23.jpg', width: 200, height: 200, rotate: '-3deg' },
    { id: 18, src: '/skypics/skypic24.jpg', width: 200, height: 200, rotate: '0deg' },
    { id: 19, src: '/skypics/skypic25.jpg', width: 200, height: 200, rotate: '3deg' },
    { id: 20, src: '/skypics/skypic26.jpg', width: 200, height: 200, rotate: '0deg' },
    { id: 21, src: '/skypics/skypic27.jpg', width: 200, height: 200, rotate: '-3deg' },
    { id: 22, src: '/skypics/skypic28.jpg', width: 200, height: 200, rotate: '0deg' },
]

const transformsRotate = [
    { rotate: '180deg' },
    { rotate: '-180deg' },
    { rotate: '40deg' },
    { rotate: '-40deg' },
    { rotate: '80deg' },
    { rotate: '-80deg' },
    { rotate: '120deg' },
    { rotate: '-120deg' },
    { rotate: '160deg' },
    { rotate: '-160deg' },
]

export const Gallery = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                p: 8,
                background: 'url(gallery.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <img src="/gallery2.jpg" width={'100%'} height={'100%'} />
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#00000088',
                }}
            />
            <Stack sx={{ margin: 'auto', justifyContent: 'center', flexWrap: 'wrap', maxWidth: 1200 }} direction="row">
                {images.map((image) => (
                    <Box
                        component={motion.div}
                        initial={{
                            opacity: 0,
                            y: '100%',
                            ...transformsRotate[Math.floor(Math.random() * transformsRotate.length + 1)],
                        }}
                        whileInView={{ opacity: 1, rotate: image.rotate, x: 0, y: 0 }}
                        viewport={{ once: true, margin: '-10%' }}
                        key={image.id}
                        sx={{
                            backgroundColor: 'common.white',
                            height: image.height,
                            width: image.width,
                            border: 1,
                            borderColor: '#888',
                            padding: 0.5,
                            boxShadow: 1,
                            transform: { rotate: `rotate(${image.rotate})` },
                        }}
                    >
                        <img
                            key={image.id}
                            src={image.src}
                            width={'100%'}
                            height={'100%'}
                            style={{ objectFit: 'cover' }}
                        />
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}
