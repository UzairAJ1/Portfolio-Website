
import Image from 'next/image'
import photo from '/public/My.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
const ProjetcsCard = ({description,backgroundImg,title}) => {
  return (
    
    <>
        
      <div  className=' flex flex-col w-full flex-shrink-0 items-center snap-center'>
        <div className='z-10 h-full w-full  bg-transparent flex flex-col gap-4 items-center snap-center'>
          <motion.div initial={{scale:0 }} whileInView={{ scale:1 }} viewport={{once:true}} transition={{ duration: 0.6 }}
            className='relative md:h-[200px] md:w-[420px] h-[100px] w-[220px] '>
            <Image src={backgroundImg} objectFit='cover' layout='fill' />
          </motion.div>
          <h1 className='text-4xl font-light'>{title}</h1>
          <p className='text-base md:w-9/12 w-full md:px-0 px-4 text-center'>{description}</p>
        </div>


      </div>


    </>
  )
}

export default ProjetcsCard
