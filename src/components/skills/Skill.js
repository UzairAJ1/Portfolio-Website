
import JavascriptOutlinedIcon from '@mui/icons-material/JavascriptOutlined';
import { motion } from 'framer-motion'
import Image from 'next/image'
import react from '/public/react.svg'

const skill = ({ backgroundImg,percent }) => {

    return (
        <>
            <motion.div className='relative flex cursor-pointer w-16 h-16'>

                <Image  src={backgroundImg} object-fit="cover" layout="fill" style={{ color: 'white' }} className='border rounded-full p-2' />

                <div className='opacity-0 hover:opacity-80 absolute md:h-16 md:w-16 z-0 hover:bg-white rounded-full  flex items-center justify-center transition duration-300 ease-in-out'>
                    <h1 className='text-2xl font-bold text-black'>{percent}</h1>
                </div>
            </motion.div>
          
        </>
    )
}

export default skill