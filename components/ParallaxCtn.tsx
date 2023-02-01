import {
    useMotionValue,
    useScroll,
    useVelocity,
    useSpring,
    useTransform,
    wrap,
    useAnimationFrame,
    motion,
} from 'framer-motion'
import React, { useRef } from 'react'

interface ParallaxProps {
    children: React.ReactNode
    baseVelocity: number
}

export const ParallaxCtn = ({ children, baseVelocity = 100 }: ParallaxProps) => {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 30,
        stiffness: 120,
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    })

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

    const directionFactor = useRef<number>(1)
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseX.set(baseX.get() + moveBy)
    })

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <motion.div style={{ x, display: 'flex' }}>
            {Array(8)
                .fill(0)
                .map((_, index) => (
                    <span key={index}>{children}</span>
                ))}
        </motion.div>
    )
}
