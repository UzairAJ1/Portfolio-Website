import React from 'react'
import ExperienceCards from './ExperienceCards'
import photo from '/public/logo2_4x.webp'
import photo1 from '/public/info-box7.png'
import photo2 from '/public/0x0.png'
const Experience = () => {
  return (
    <div className=' container mx-auto md:w-10/12 w-full relative h-screen flex flex-col justify-center md:gap-6 gap-2 items-center flex-shrink-0 md:pt-12 pt-2  md:p-8 p-2'>
        <h2 className='text-center text-2xl uppercase font-semibold text-gray-500 tracking-[11px] hover:tracking-[2px] hover:duration-500 duration-2000 cursor-pointer'>Experience</h2>
        <h2 className='text-center text-md uppercase font-semibold text-gray-500 tracking-[11px] hover:tracking-[2px] hover:duration-500 duration-2000 cursor-pointer md:hidden flex'>Click for Opacity</h2>
        <div className='flex overflow-x-auto snap-x snap-mandatory gap-2  scrollbar scrollbar-thumb-amber-500 scrollbar-track-[#3C3C3C] h-4/5 pb-8 md:px-6 px-2 md:w-11/12 w-full'>
     <ExperienceCards logo={photo} title="Front-End Developer" company={"Codeable"} text1="Maintain and improve website" text2="Optimize for maximum speed" text3="Design mobile-based features" startDate="10/9/2018" presentDate="10/9/2020 "/>
     <ExperienceCards logo={photo1} title="Full-Stack Developer" company={"Grithx"} text1="Create quality mockups" text2="Design mobile-based feature" text3="Optimize apps for maximum speed" startDate="1/2/2020" presentDate="10/9/2021 "/>
     <ExperienceCards logo={photo2} title="Full-Stack Developer" company={"SpireHost"} text1="Developing user interface." text2="Managing software workflow." text3="Fixing bugs and testing for usability" startDate="1/2/2021" presentDate="Currently Working"/>
     <ExperienceCards />
     </div>
     </div>
  )
}

export default Experience