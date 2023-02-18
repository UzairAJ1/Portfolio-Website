import React, { useState } from 'react'
import ProjetcsCard from './ProjetcsCard'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { yellow } from '@mui/material/colors';
import disney from '/public/Disneyclone.png'
import landingpage from '/public/bootstrap.png'
import Ecommerce from '/public/react-redux-cart.png'
import css from '/public/css-image.png'
import tailwind from '/public/tailwind-landing-page.png'

const Projects = () => {

    const [scroll, setScroll] = useState(0);
    const [conditionBack,setConditionBack]=useState(false);
    const [conditionNext,setConditionNext]=useState(false);


    return (
        // md:left-24 left-[0px] bottom-[1520px]
        <>


            <div className=' w-full h-screen flex flex-col justify-center items-center'>
                <div className='-skew-y-12 absolute h-52 w-full bg-[#373226] z-10' />
                <h2 className='pt-12text-center text-2xl uppercase font-semibold text-gray-500 tracking-[11px] hover:tracking-[2px] hover:duration-500 duration-2000 cursor-pointer'>Projects</h2>
                <h2 className='text-center text uppercase font-semibold text-gray-500   cursor-pointer mt-4'>Please visit my Github profile to view all projects</h2>
                <div className='flex items-center justify-center'>
                    <div className='md:pl:0 pl-4 h-full md:w-38 w-10 flex flex-col items-center justify-center '>
                <button onClick={()=>{setScroll(scroll-1)}} className={scroll>0 ? "w-52 h-24  z-20 " : "hidden"}>
                   
                <ArrowBackIosIcon  fontSize="large"/>
                </button>
                <h1 className='text-transparent w-52'>this</h1>
                </div>
                <div className= 'py-4 md:w-7/12 w-11/12 snap-x snap-mandatory flex overflow-scroll overflow-y-hidden  items-center justify-center h-full scrollbar scrollbar-thumb-amber-500 scrollbar-track-[#3C3C3C]'>
                   {scroll===0 &&
                   <ProjetcsCard backgroundImg={disney} title="Disney Clone" description="The Disney Clone is a web application built with React and Redux, using React hooks to manage state and side effects. It replicates the interface and functionality of Disney+ and features a responsive layout with a search and filter function for easy navigation. The app is modular, easy to maintain, and user-friendly."/>
                   }
                    
                    {scroll===1 &&
                   <ProjetcsCard backgroundImg={landingpage} title="Bootsrap Landing Page" description="A Bootstrap landing page is a pre-designed web page that uses the Bootstrap framework to create a responsive, visually attractive and functional landing page with pre-built components and styles that can be customized to fit the needs of a specific project or business." />
                   }
                    {scroll===2 &&
                   <ProjetcsCard backgroundImg={Ecommerce} title="E-commerce Cart" description="The ecommerce cart made in React, Redux, and Axios is a streamlined tool for managing online store purchases. React and Redux enable seamless item addition and removal, while Axios provides efficient server communication."/>
                   }
                    {scroll===3 &&
                   <ProjetcsCard backgroundImg={css} title="Css Project" description="Buildings made with CSS are an impressive example of how cascading style sheets can be used to create complex, visually stunning designs. Using a combination of positioning, transforms, gradients, and other CSS properties" />
                    } 
                   {scroll===4 &&
                   <ProjetcsCard backgroundImg={tailwind} title="Tailwind Landing Page" description="Our Tailwind CSS landing page is fully responsive and visually stunning, providing a seamless browsing experience across all devices."/>
                   }
                   
                </div>
                <div className='md:pr:0 pr-4 h-full md:w-38 w-10 flex flex-col items-center justify-center'>
                <button onClick={()=>{setScroll(scroll+1)}} className={scroll<4 ? " w-52 h-24  z-20 ":"hidden"}><ArrowForwardIosIcon fontSize="large"/></button>
                <h1 className='text-transparent w-52'>this</h1>
                </div>
                </div>
            </div>
        </>

    )
}

export default Projects
