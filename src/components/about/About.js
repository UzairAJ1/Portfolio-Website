import React from 'react'
import Image from 'next/image'
import photo from '/public/WhatsApp Image 2023-02-12 at 10.25.40 PM.jpeg'
import { AnimatePresence,motion } from 'framer-motion'
const Example = () => {
  return (
    <div className=' relative flex flex-col items-center justify-center md:h-screen h-[500px] md:pt-12 pt-0 z-10 gap-6 ' >
      <h2 className='text-center text-2xl uppercase font-semibold text-gray-500 tracking-[11px] hover:tracking-[2px] hover:duration-500 duration-2000 cursor-pointer'>about</h2>
     
      <motion.div initial={{ x: -300 }} whileInView={{ x: 0 }} viewport={{once:true}} transition={{ duration: 0.8 }} className='relative md:h-[250px] md:w-[250px] h-[150px] w-[150px] object-cover'>
        <Image className='md:rounded-lg rounded-md' src={photo} objectFit='cover' layout='fill' />
      </motion.div>
      
        <h1 className='md:text-4xl text-2xl font-semibold'>Here is a <span className='underline decoration-yellow-500'>Little</span> background</h1>
        <p className='text-base md:w-9/12 w-full md:px-0 px-4'>I am a skilled full stack developer with 2 years of experience in designing and developing web applications using a range of technologies. With a passion for web design, I excel in creating visually appealing and functional webpages using my main skills in Tailwind CSS Bootstrap, React and Next js.</p>
      
    </div>
  )
}

export default Example