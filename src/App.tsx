import { HappyBirthday } from '../components/HappyBirthday'
import { ParallaxImages } from '../components/ParallaxImages'
import { Box } from '@mui/material'
import { NotGood } from '../components/NotGood'
import React from 'react'

function App() {
    return (
        <Box className="App" sx={{ overflow: 'hidden' }}>
            <HappyBirthday />
            <ParallaxImages />
            <NotGood />
        </Box>
    )
}

export default App
