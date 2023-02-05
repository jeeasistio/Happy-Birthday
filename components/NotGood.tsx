import React from 'react'
import { Box, Stack } from '@mui/material'
import TextCtn from './TextCtn'

export const NotGood = () => {
    return (
        <Box>
            <Stack>
                {"I'm not good with words so I'll just throw photos here.".split(' ').map((word, index) => (
                    <TextCtn key={index}>{word}</TextCtn>
                ))}
            </Stack>
        </Box>
    )
}
