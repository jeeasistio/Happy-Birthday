import React, { useEffect } from 'react'
import { HappyBirthday } from '../components/HappyBirthday'
import { ParallaxImages } from '../components/ParallaxImages'
import { Box } from '@mui/material'
import { NotGood } from '../components/NotGood'
import { Description } from '../components/Description'
import { Gallery } from '../components/Gallery'
import { Memes } from '../components/Memes'
import { ColorDivider } from '../components/ColorDivider'
import { Loading } from '../components/Loading'

function App() {
    const [isLoading, setIsLoading] = React.useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
    }, [])

    useEffect(() => {
        document.body.style.overflowY = 'hidden'
        if (!isLoading) document.body.style.overflowY = 'scroll'
        return () => {
            document.body.style.overflowY = 'scroll'
        }
    }, [isLoading])

    return (
        <Box className="App" sx={{ position: 'relative', overflow: 'hidden' }}>
            <HappyBirthday />

            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                {isLoading && <Loading />}
            </Box>

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
