import { createTheme, responsiveFontSizes } from '@mui/material'

export let theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Playfair Display, Lato, serif',
        },
    },
})

theme = responsiveFontSizes(theme)
