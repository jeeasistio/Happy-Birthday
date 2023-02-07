import React, { useEffect, useRef } from 'react'
import { Box, Typography, TypographyProps } from '@mui/material'
import { motion, useAnimation, useInView } from 'framer-motion'

const TextCtn = ({
    children,
    delay = 0,
    once = false,
    typographyProps,
}: {
    children: string
    delay?: number
    once?: boolean
    typographyProps?: TypographyProps
}) => {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '-25%', once })

    useEffect(() => {
        if (isInView) controls.start({ y: '0%', opacity: 1 })
        if (!isInView) controls.start({ y: '150%', opacity: 0.3 })
    }, [isInView])

    return (
        <Box ref={ref}>
            <Box sx={{ display: 'flex', overflow: 'hidden' }}>
                {children.split('').map((char, index) => (
                    <Box
                        key={index}
                        component={motion.p}
                        initial={{ y: '110%', opacity: 0.3 }}
                        animate={controls}
                        transition={{ delay: 0.03 * index + delay }}
                    >
                        <Typography variant="h1" {...typographyProps}>
                            {char === ' ' ? '\u00A0' : char}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default TextCtn
