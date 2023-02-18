import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'
import Image from 'next/image'
import react from '/public/icons8-react-native-480.png'
import tailwindcss from '/public/icons8-tailwindcss-480.png'
import bootstrap from '/public/icons8-bootstrap-480.png'
import css from '/public/icons8-css3-480.png'
import javascript from '/public/icons8-javascript-500.png'
import next from '/public/icons8-next.js-480 (1).png'
import html from '/public/icons8-html-filetype-96.png'
import node from '/public/icons8-node-js-240.png'
import redux from '/public/icons8-redux-480.png'
import seo from '/public/icons8-seo-64.png'
import mongo from '/public/icons8-mongodb-480.png'
import python from '/public/icons8-python-480.png'
import git from '/public/icons8-git-480.png'
import figma from '/public/icons8-figma-480.png'
// import next from '/public/icons8-css3-480.png'
const Skills = () => {
    return (
        <div className=' h-screen flex flex-col items-center justify-center gap-12 pt-12'>
            <div>
                <h2 className='text-center text-2xl uppercase font-semibold text-gray-500 tracking-[11px] hover:tracking-[2px] hover:duration-500 duration-2000 cursor-pointer'>skills</h2>
                <h2 className='text-sm uppercase font-semibold text-gray-500 tracking-[3px] cursor-pointer'>Hover to see</h2>
            </div>
            <div className='flex flex-col gap-2'>
                <motion.div initial={{ x: -400 }}
                    whileInView={{ x: 0 }} viewport={{once:true}} transition={{ duration: 0.5 }}
                    className=' flex flex-col gap-2'>
                    <div className='grid grid-cols-4 '>
                        <div>
                            <Skill backgroundImg={react} percent="95%" />
                            <h1 className='text-center'>React</h1>
                        </div>
                        <div>
                            <Skill backgroundImg={tailwindcss} percent="95%" />
                            <h1 className='text-center'>TailWind Css</h1>
                        </div>
                        <div>
                            <Skill backgroundImg={bootstrap} percent="98%" />
                            <h1 className='text-center'>BootStrap</h1>
                        </div>
                        <div>
                            <Skill backgroundImg={css} percent="98%" />
                            <h1 className='text-center'>CSS</h1>
                        </div>
                    </div>
                    <div className='grid  grid-cols-4'>
                        <div>
                            <Skill backgroundImg={javascript} percent="90%" />
                            <h1 className='text-center'>javascript</h1>
                        </div>
                        <div>
                            <Skill backgroundImg={next} percent="90%" />
                            <h1 className='text-center'>Next js</h1>
                        </div>
                        <div>
                            <Skill backgroundImg={html} percent="92%" />
                            <h1 className='text-center'>HTML</h1>
                        </div>
                        <div>
                            <Skill backgroundImg={node} percent="80%" />
                            <h1 className='text-center'>Node js</h1>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ x: +400 }}
                    whileInView={{ x: 0 }} viewport={{once:true}} transition={{ duration: 0.5 }}
                    className=' flex flex-col gap-2'>
                    <div className='grid grid-cols-4'>
                        <div>
                            <Skill backgroundImg={redux} percent="85%"/>
                            <h1 className='text-center'>Redux</h1>
                        </div>
                        <div>
                            <Skill backgroundImg={seo} percent="95%"/>
                            <h1 className='text-center'>SEO</h1>
                        </div>
                        <div>
                            <Skill backgroundImg={mongo} percent="80%"/>
                            <h1 className='text-center'>MongoDB</h1>
                        </div>
                        <div>
                            <Skill backgroundImg={python} percent="80%"/>
                            <h1 className='text-center'>Python</h1>
                        </div>
                    </div>
                    <div className='grid grid-cols-4'>
                        <div>
                            <Skill backgroundImg={git} percent="80%"/>
                            <h1 className='text-center'>Git</h1>
                        </div>
                        <div>
                            <Skill backgroundImg={figma} percent="75%"/>
                            <h1 className='text-center'>Figma</h1>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Skills