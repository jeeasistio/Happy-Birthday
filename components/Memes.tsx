import React from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'

const MemeImage = ({
    src,
    width,
    height,
    position,
    rotate,
}: {
    src: string
    width: number
    height: number
    rotate: number
    position: {
        top?: number | string
        left?: number | string
        bottom?: number | string
        right?: number | string
    }
}) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box sx={{ position: 'absolute', ...position, transform: `rotate(${rotate}deg)` }}>
            <img src={src} width={isMobile ? width : width * 2} height={isMobile ? height : height * 2} />
        </Box>
    )
}

export const Memes = () => {
    return (
        <Box sx={{ position: 'relative', height: '100vh', background: 'url(rainbow.jpg)', backgroundSize: 'cover' }}>
            <MemeImage
                src="/memes/meme1.png"
                width={120}
                height={170}
                position={{ top: '10%', right: '5%' }}
                rotate={-8}
            />
            <MemeImage
                src="/memes/meme2.png"
                width={200}
                height={150}
                position={{ top: '20%', left: '5%' }}
                rotate={8}
            />
            <MemeImage
                src="/memes/meme3.png"
                width={100}
                height={100}
                position={{ top: '50%', right: '40%' }}
                rotate={-5}
            />
            <MemeImage
                src="/memes/meme4.png"
                width={100}
                height={80}
                position={{ bottom: '20%', left: '10%' }}
                rotate={6}
            />
            <MemeImage
                src="/memes/meme5.png"
                width={200}
                height={150}
                position={{ bottom: '5%', right: '5%' }}
                rotate={10}
            />
        </Box>
    )
}
