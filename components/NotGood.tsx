import React, { useRef } from 'react'
import { Box, Stack } from '@mui/material'
import TextCtn from './TextCtn'
import { motion, useIsomorphicLayoutEffect, useScroll, useSpring, useTransform } from 'framer-motion'

export const NotGood = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [elemStart, setElemStart] = React.useState(0)
    const [elemEnd, setElemEnd] = React.useState(0)
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [elemStart - 1000, elemStart + elemEnd + 1000], [0, -(elemStart - elemEnd)])
    const smoothY = useSpring(y, { damping: 20, stiffness: 80 })

    useIsomorphicLayoutEffect(() => {
        if (ref.current) {
            setElemStart(ref.current.offsetTop)
            setElemEnd(ref.current.offsetHeight)
        }
    }, [ref, scrollY])

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden' }} ref={ref}>
            <Box
                style={{ y: smoothY }}
                component={motion.div}
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '200%',
                    background: 'url(green.jpg)',
                    backgroundSize: 'cover',
                }}
            />
            <Stack>
                {"I'm not good with words so I'll just throw photos here.".split(' ').map((word, index) => (
                    <TextCtn typographyProps={{ color: 'common.white' }} key={index}>
                        {word}
                    </TextCtn>
                ))}
            </Stack>
        </Box>
    )
}
