import React from 'react'
import { AnimatePresence,motion } from 'framer-motion'
const Example = () => {
  return (
    <AnimatePresence>
            <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: [100,200,300], opacity: 1 }}
                className="w-full h-screen"
            >
               dsdfsdfsf
            </motion.div>
        </AnimatePresence>
  )
}

export default Example