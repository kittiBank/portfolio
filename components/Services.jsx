'use client';
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import ProjectCard from './ProjectCard';

const Service = () => {
  return (
    <motion.div id="services" className='w-full px-[12%] py-10 scroll-mt-20 '
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'>My projects</motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo'>
        Here are some of the projects I’ve built to sharpen my web development skills. <br />
        They reflect my hands-on learning in both frontend and backend development.
      </motion.p>

      {/* Responsive */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="py-2 px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
        <ProjectCard
          title="Portfolio Website"
          image="/images/portfolio_project.png"
          description="A personal portfolio built with React and Tailwind to showcase my projects and skills."
          githubLink="https://github.com/kittiBank/portfolio"
          demoLink="https://kittipr.vercel.app/"
        />
        <ProjectCard
          title="Authentication System"
          image="/images/authen-mern.png"
          description="User login and signup system using React, Tailwind, Axios, and Express.js. Data is stored in MongoDB, and JWT is used for secure user sessions."
          githubLink="https://github.com/kittiBank/authen-mern"
          demoLink="https://authen-mern.vercel.app/"
        />
      </motion.section>

    </motion.div >
  )
}

export default Service
