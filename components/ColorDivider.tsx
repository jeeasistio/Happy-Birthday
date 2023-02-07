import React from 'react'
import { Box } from '@mui/material'

export const ColorDivider = ({ colorTop, colorBottom }: { colorTop: string; colorBottom: string }) => {
    return (
        <Box>
            <Box sx={{ height: 50, backgroundColor: colorTop, borderTop: 4, borderBottom: 4 }} />
            <Box sx={{ height: 50, backgroundColor: colorBottom, borderBottom: 4 }} />
        </Box>
    )
}
