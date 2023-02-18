import React from 'react'
import Image from 'next/image'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { InputTwoTone } from '@mui/icons-material';
import { useForm } from "react-hook-form";

const ContactMe = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"));
    return (
        <>
        <div className='flex flex-col w-full h-screen items-center justify-center md:gap-6 gap-4 container mx-auto'>
            <h2 className='pt-12text-center text-2xl uppercase font-semibold text-gray-500 tracking-[11px] hover:tracking-[2px] hover:duration-500 duration-2000 cursor-pointer'>contact</h2>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold'>I have got what you need</h1>
                <span className='text-4xl font-semibold underline decoration-yellow-500'>Let's talk</span>
            </div>
            <div className='flex '>
                <LocalPhoneIcon style={{color:'#F59E0B'}}/>
                <h1>+923175640599</h1>
            </div>
            <div className='flex '>
                <EmailIcon style={{color:'#F59E0B'}}/>
                <h1>Uzair.aaj@gmail.com</h1>
            </div>
            <div className='flex '>
                <LocationOnIcon style={{color:'#F59E0B'}}/>
                <h1>B-17 block c</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
                <div className='flex gap-2'>
                    <input {...register("Name", { required: true })} placeholder='Name' type="text" className='bg-[#2F3133] h-[40px] px-8 md:w-auto w-40' />
                    
                    <input {...register("Email", { required: true })} placeholder='Email' type="email" className='bg-[#2F3133] px-8' />
                    
                </div>
                
                <input {...register("Subject")} name="subject"  placeholder='Subject' type="text" className='bg-[#2F3133]  h-[40px] px-8' />
                <textarea {...register("Msg", { required: true })} name="message" placeholder="Message" className='bg-[#2F3133] px-8 pt-2' />
                <button type='submit' className='bg-yellow-500 rounded-md font-bold text-lg h-[40px]'>Submit</button>
                {errors.Email  && <span className='text-red-700'>Email is required</span>}
                {errors.Name  && <span className='text-red-700'>Name is required</span>}
                {errors.Msg  && <span className='text-red-700'>Message is required</span>}
                {errors.Subject  && <span className='text-red-700'>Subject is required</span>}
            </form>
            <div className='w-full h-8 bg-black absolute bottom-0 flex items-center justify-center'>
        <h1 >All Right Reserved Copyright © Uzair Aj 2023</h1>
        </div>
        </div>
        
        </>
    )
}

export default ContactMe
