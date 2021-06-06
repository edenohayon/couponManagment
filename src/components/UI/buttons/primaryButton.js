import React from 'react'
import {motion} from 'framer-motion'

const PrimaryButton = ({ title, clickHandler }) => {
    return (
        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.95}}
        transition={{ease:'easeIn'}}
            onClick={clickHandler}
            className="bg-CTA px-4 py-2 text-white font-medium rounded-lg focus:outline-none">
            {title}
        </motion.button>
    )
}

export default PrimaryButton
