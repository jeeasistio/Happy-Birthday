import React from 'react'
import { motion } from 'framer-motion'
import { Stack } from '@mui/material'

interface Props {
    children: React.ReactNode
    direction: 'left' | 'right'
}

export const MarqueeCtn = ({ children, direction }: Props) => {
    return (
        <Stack direction="row" sx={{ display: 'flex' }}>
            {Array(8)
                .fill(0)
                .map((_, index) => (
                    <motion.div
                        key={index}
                        style={{ display: 'flex', backgroundColor: direction === 'left' ? '#F9DC78' : 'transparent' }}
                        animate={{ x: direction === 'left' ? ['0%', '-400%'] : ['-400%', '0%'] }}
                        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                    >
                        {children}
                    </motion.div>
                ))}
        </Stack>
    )
}
