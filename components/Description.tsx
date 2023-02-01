import React from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { MarqueeCtn } from './MarqueeCtn'

const rows = [
    { words: ['kind', 'sweet', 'smart'], direction: 'left' },
    { words: ['pretty', 'handsome', 'awesome'], direction: 'right' },
    { words: ['stubborn', 'cute', 'funny'], direction: 'left' },
]

export const Description = () => {
    return (
        <Box sx={{ height: '100vh', overflow: 'hidden' }}>
            <Stack sx={{ height: '100%', justifyContent: 'space-evenly', transform: 'rotate(-15deg)' }}>
                {rows.map((row, rowIndex) => (
                    <>
                        <MarqueeCtn key={rowIndex} direction={rowIndex % 2 === 0 ? 'left' : 'right'}>
                            <Stack
                                direction="row"
                                sx={{ height: '100%', justifyContent: 'center', alignItems: 'center', gap: 4, mx: 4 }}
                            >
                                {row.words.map((word, index) => (
                                    <Typography
                                        sx={{ fontSize: { xs: '8rem', sm: '12rem' } }}
                                        key={index}
                                        fontWeight="bold"
                                        fontFamily={rowIndex % 2 === 0 ? 'Lato' : 'Playfair Display'}
                                    >
                                        {word.toUpperCase()}
                                    </Typography>
                                ))}
                            </Stack>
                        </MarqueeCtn>
                        {rowIndex !== rows.length - 1 && (
                            <Divider
                                sx={{
                                    borderBottomWidth: 4,
                                    borderBottomColor: 'common.black',
                                    width: '200vw',
                                    marginLeft: '-50%',
                                }}
                            />
                        )}
                    </>
                ))}
            </Stack>
        </Box>
    )
}
