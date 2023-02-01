import React from 'react'
import { Box, Stack } from '@mui/material'
import { ParallaxCtn } from './ParallaxCtn'

const images = [
    {
        id: 1,
        src: '#',
        height: 200,
        width: 250,
    },
    {
        id: 2,
        src: '#',
        height: 150,
        width: 180,
    },
    {
        id: 3,
        src: '#',
        height: 180,
        width: 200,
    },
    {
        id: 4,
        src: '#',
        height: 100,
        width: 100,
    },
    {
        id: 5,
        src: '#',
        height: 100,
        width: 150,
    },
    {
        id: 6,
        src: '#',
        height: 150,
        width: 200,
    },
]

export const ParallaxImages = () => {
    return (
        <Box sx={{ height: '500px', backgroundColor: '#EBED9D', display: 'flex', alignItems: 'center' }}>
            <ParallaxCtn baseVelocity={-2}>
                <Stack direction="row">
                    {images.map((image) => (
                        <Box key={image.id}>
                            <img src={image.src} width={image.width} height={image.width} />
                        </Box>
                    ))}
                </Stack>
            </ParallaxCtn>
        </Box>
    )
}
