import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const rows = [
    { words: ['kind', 'sweet', 'smart'], direction: 'left' },
    { words: ['pretty', 'handsome', 'awesome'], direction: 'right' },
    { words: ['stubborn', 'cute', 'funny'], direction: 'left' },
]

export const Description = () => {
    return (
        <Box sx={{ height: '100vh' }}>
            <Stack sx={{ height: '100%' }}>
                {rows.map((row, rowIndex) => (
                    <>
                        <Stack
                            direction="row"
                            sx={{ height: '100%', justifyContent: 'center', alignItems: 'center', gap: 4, border: 2 }}
                        >
                            {row.words.map((word, index) => (
                                <Typography
                                    variant="h1"
                                    key={index}
                                    fontWeight="bold"
                                    fontFamily={rowIndex % 2 === 0 ? 'Lato' : 'Playfair Display'}
                                >
                                    {word.toUpperCase()}
                                </Typography>
                            ))}
                        </Stack>
                    </>
                ))}
            </Stack>
        </Box>
    )
}
