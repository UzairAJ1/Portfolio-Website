import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../src/components/header/Header'
const inter = Inter({ subsets: ['latin'] })
import Hero from '../src/components/hero/Hero'
import Sidebar from '../src/components/sidebar/Sidebar'
import Experience from '../src/components/experience/Experience'
import Skills from '../src/components/skills/Skills'
import { motion } from 'framer-motion'
import Example from '../src/components/Example'
import About from '../src/components/about/About'
import Projects from '../src/components/projects/Projects'
import ContactMe from '../src/components/contact/ContactMe'
import Certificate from '../src/components/certificates/Certificate'
export default function Home() {
  return (
    <div className='felx flex-col md:snap-y md:snap-mandatory bg-[#242424] text-white overflow-y-scroll
     overflow-x-hidden h-screen md:scrollbar md:scrollbar-thumb-amber-500 md:scrollbar-track-[#3C3C3C]  '>
   
      <Header />
      <div className='relative flex w-full'>
        <div className='w-1/12 h-full fixed  md:flex hidden items-center  z-20'>
        </div>
        <div className='w-full flex flex-col'>
          <section id='Hero' className='snap-start'>
            <Hero />
          </section>
          <section id='About' className='snap-start'>
            <About />
          </section>
          <section id='Experience' className='snap-start'>
            <Experience />
          </section>
          <section id='Skills' className='snap-start'>
            <Skills />
          </section>
          <section id='Projects' className='snap-start'>
            <Projects />
          </section>
          <section id='Certificate' className='snap-start'>
            <Certificate />
          </section>
          <section id='Contact' className='snap-start'>
            <ContactMe />
          </section>
        </div>
      </div>
    </div>
  )
}
