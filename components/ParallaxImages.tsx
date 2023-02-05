import React from 'react'
import { Box, Stack } from '@mui/material'
import { ParallaxCtn } from './ParallaxCtn'

const images = [
    { id: 1, src: '/skypics/skypic1.jpg', height: 200, width: 300, transform: 'rotate(10deg)' },
    { id: 2, src: '/skypics/skypic2.jpg', height: 160, width: 200, transform: 'rotate(-5deg)' },
    { id: 3, src: '/skypics/skypic3.jpg', height: 200, width: 240, transform: 'rotate(2deg)' },
    { id: 4, src: '/skypics/skypic4.jpg', height: 150, width: 150 },
    { id: 5, src: '/skypics/skypic5.jpg', height: 200, width: 150, transform: 'rotate(-10deg)' },
    { id: 6, src: '/skypics/skypic6.jpg', height: 150, width: 200 },
]

export const ParallaxImages = () => {
    return (
        <Box sx={{ height: '500px', display: 'flex', alignItems: 'center' }}>
            <ParallaxCtn baseVelocity={-2}>
                <Stack direction="row">
                    {images.map((image) => (
                        <Box
                            key={image.id}
                            sx={{
                                backgroundColor: 'common.white',
                                height: image.height,
                                width: image.width,
                                border: 1,
                                borderColor: '#888',
                                padding: 0.5,
                                boxShadow: 1,
                                transform: image.transform,
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
            </ParallaxCtn>
        </Box>
    )
}
