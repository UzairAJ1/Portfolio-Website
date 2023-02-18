import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import Image from 'next/image'
import photo from '/public/My.jpg'
import { motion } from 'framer-motion'
const Hero = () => {
  const [text, setText] = useTypewriter({
    words: [
      "Hi, The name's Uzair",
      "<I love coding/>"
    ],
    loop: true,
    delaySpeed: 2000
  });

  //   <div className='relative  md:w-1/2 w-full md:h-[800px] h-[400px]'>

  //   <Image src={heropic5} objectFit='cover' layout='fill'/>
  // </div>
  return (
    
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 2 } }} className='relative flex flex-col items-center justify-center h-screen '>
     
        <BackgroundCircle />
       <div className=' relative bottom-16 w-[300px] flex flex-col items-center justify-center gap-2'>
        <h2 className='text-sm uppercase font-semibold text-gray-500 tracking-[11px] hover:tracking-[2px] hover:duration-500 duration-2000 cursor-pointer'>Web Developer</h2>
        <div className='relative h-[100px] w-[100px]'>

          <Image className='rounded-full' src={photo} objectFit='cover' layout='fill' />
        </div>
        
        <span className='font-bold text-[30px] h-[30px]'>{text}</span>
        </div>
    </motion.div>
  )
}

export default Hero