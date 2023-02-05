import React from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

const MemeImage = ({
    src,
    width,
    height,
    position,
}: {
    src: string
    width: number | string
    height: number | string
    position: {
        top?: number | string
        left?: number | string
        bottom?: number | string
        right?: number | string
    }
}) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    console.log(isMobile)

    return (
        <Box
            component={motion.div}
            initial={{ scale: 0 }}
            whileInView={{ scale: isMobile ? 1 : 2 }}
            viewport={{ once: true }}
            sx={{ position: 'absolute', ...position }}
        >
            <img src={src} width={width} height={height} />
        </Box>
    )
}

export const Memes = () => {
    return (
        <Box sx={{ position: 'relative', height: '100vh', background: 'url(rainbow.jpg)', backgroundSize: 'cover' }}>
            <MemeImage src="/memes/meme1.png" width={120} height={170} position={{ top: '10%', right: '5%' }} />
            <MemeImage src="/memes/meme2.png" width={200} height={150} position={{ top: '20%', left: '5%' }} />
            <MemeImage src="/memes/meme3.png" width={100} height={100} position={{ top: '50%', right: '40%' }} />
            <MemeImage src="/memes/meme4.png" width={100} height={80} position={{ bottom: '20%', left: '10%' }} />
            <MemeImage src="/memes/meme5.png" width={200} height={150} position={{ bottom: '5%', right: '5%' }} />
        </Box>
    )
}
