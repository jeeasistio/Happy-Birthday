import React from 'react'
import { HappyBirthday } from '../components/HappyBirthday'
import { ParallaxImages } from '../components/ParallaxImages'
import { Box } from '@mui/material'
import { NotGood } from '../components/NotGood'
import { Description } from '../components/Description'
import { Gallery } from '../components/Gallery'
import { Memes } from '../components/Memes'

function App() {
    return (
        <Box className="App" sx={{ overflow: 'hidden' }}>
            <HappyBirthday />
            <ParallaxImages />
            <Description />
            <NotGood />
            <Gallery />
            <Memes />
        </Box>
    )
}

export default App
