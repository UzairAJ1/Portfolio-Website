import React, { useState } from 'react'
import Image from 'next/image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { yellow } from '@mui/material/colors';
import freecodecamp from '/public/Front-end-Legacy.png'

const Certificate = () => {

    const [scroll, setScroll] = useState(0);
    const [conditionBack, setConditionBack] = useState(false);
    const [conditionNext, setConditionNext] = useState(false);


    return (

        <>


            <div className='container mx-auto w-full h-screen flex flex-col justify-center items-center z-20 gap-4'>

                <h2 className='mt-20 text-center text-2xl uppercase font-semibold text-gray-500 tracking-[11px] hover:tracking-[2px] hover:duration-500 duration-2000 cursor-pointer'>Certificates</h2>
                <div className='relative w-[600px] h-[600px]'>
                    <Image src={freecodecamp} />
                </div>




            </div>
        </>

    )
}

export default Certificate