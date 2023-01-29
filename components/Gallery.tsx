import { Box, Stack } from '@mui/material'
import React from 'react'

const photos = [
    { id: 1, src: '#', width: 200, height: 200 },
    { id: 2, src: '#', width: 200, height: 200 },
    { id: 3, src: '#', width: 200, height: 200 },
    { id: 4, src: '#', width: 200, height: 200 },
    { id: 5, src: '#', width: 200, height: 200 },
]

export const Gallery = () => {
    return (
        <Box sx={{ p: 4 }}>
            <Stack sx={{ flexWrap: 'wrap' }} direction="row">
                {photos.map((photo) => (
                    <img key={photo.id} src={photo.src} width={photo.width} height={photo.height} />
                ))}
            </Stack>
        </Box>
    )
}
