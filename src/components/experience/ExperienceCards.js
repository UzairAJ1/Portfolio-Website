import React from 'react'
import Image from 'next/image'
import photo from '/public/My.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import react from '/public/icons8-react-native-480.png'
import tailwindcss from '/public/icons8-tailwindcss-480.png'
import bootstrap from '/public/icons8-bootstrap-480.png'
import { motion } from 'framer-motion'
import { useState } from 'react'

const ExperienceCards = ({logo,title,company,startDate,presentDate,text1,text2,text3}) => {
    const [clicked,setClicked]=useState(false);
    return (
        <div className='flex flex-col text-left md:w-1/3 w-full md:h-full h-10/12 justify-evenly flex-shrink-0 items-center'>
            <motion.div initial={{ scale: 0 }}  whileInView={{scale: 1}} viewport={{once:true}} transition={{ duration: 0.5 }} className={`shadow-lg shadow-black hover:bg-white hover:bg-opacity-10 w-full h-full  opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-pointer flex flex-col items-center justify-center rounded-lg gap-2 ${clicked?"bg-white bg-opacity-10":""}` }>
                <div className='relative h-[70px] w-[70px]'>
                    <Image className='rounded-full' src={logo} objectFit='cover' layout='fill' />
                </div>
                <h1 className='text-xl font-light'>{title}</h1>
                <h1 className='font-bold text-xl'>{company}</h1>
                <div>
                    <div className='flex gap-3'>
                    <Image src={react} className='w-10 h-9' />
                    <Image src={tailwindcss} className='w-10 h-9' />
                    <Image src={bootstrap} className='w-10 h-9' />
                    </div>
                </div>
                <h1 className='uppercase text-gray-300'>{startDate} - {presentDate}</h1>
                <div className='flex flex-col'>
                    <ul class="list-disc text-sm">
                        <li>{text1}</li>
                        <li>{text2}</li>
                        <li>{text3}</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    )
}

export default ExperienceCards