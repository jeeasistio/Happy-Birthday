import React from 'react'
import { HappyBirthday } from '../components/HappyBirthday'
import { ParallaxImages } from '../components/ParallaxImages'
import { Box } from '@mui/material'
import { NotGood } from '../components/NotGood'
import { Description } from '../components/Description'
import { Gallery } from '../components/Gallery'
import { Memes } from '../components/Memes'
import { ColorDivider } from '../components/ColorDivider'

function App() {
    return (
        <Box className="App" sx={{ overflow: 'hidden' }}>
            <HappyBirthday />
            <ColorDivider colorTop="#B3DFDA" colorBottom="#E96E66" />
            <ParallaxImages />
            <ColorDivider colorTop="#c07cf5" colorBottom="#B3DFDA" />
            <Description />
            <ColorDivider colorTop="#9dbeb3" colorBottom="#c07cf5" />
            <NotGood />
            <ColorDivider colorTop="#523427" colorBottom="#5DA891" />
            <Gallery />
            <ColorDivider colorTop="#F22554" colorBottom="#5B3828" />
            <Memes />
        </Box>
    )
}

export default App
