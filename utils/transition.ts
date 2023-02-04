import { Transition } from 'framer-motion'

export const getTransition = (moreOptions?: Transition) => {
    return {
        type: 'spring',
        damping: 15,
        stiffness: 60,
        mass: 0.5,
        ...moreOptions,
    }
}
