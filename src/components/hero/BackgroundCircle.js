import React from 'react'
import { motion } from 'framer-motion'
const BackgroundCircle = () => {
  return (
    <motion.div className='relative flex flex-col justify-center items-center mt-32 ' initial={{opacity:0}} animate={{scale:[1,1.5,2,1.5,1],
    opacity:[0.1,0.2,0.4,0.8,1]}} transition={{duration:2.5,delay: 2}}>
        <motion.div initial={{opacity:0}} animate={{scale:[1,1.5,1.7,1.2,1],
    opacity:[0.1,0.2,0.4,0.8,1,0]}} transition={{duration:2.5,delay: 2}} className='absolute rounded-full h-[200px] w-[200px] border-2 border-white animate-ping' />
        <div className='absolute border border-yellow-400 rounded-full h-[400px] w-[400px] animate-pulse'/>
      
    </motion.div>
  )
}

export default BackgroundCircle