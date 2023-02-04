import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { theme } from '../styles/theme'
import { CssBaseline } from '@mui/material'
import { MotionConfig } from 'framer-motion'
import { getTransition } from '../utils/transition'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <MotionConfig transition={getTransition()}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <App />
                </CssBaseline>
            </ThemeProvider>
        </MotionConfig>
    </React.StrictMode>
)
