'use client';
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image src={assets.kit_profile_sm} alt='' className='rounded-full w-32' />
            </motion.div>

            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hello, I'm Kittitad
                {/* <Image src={assets.hand_icon} alt='' className='w-6' /> */}
            </motion.h3>

            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='text-3xl sm:text-6xl lg:text-[30px] font-Ovo'
            >
                Web Developer with a Passion for Building and Learning.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='max-w-2x1 mx-auto font-Ovo'>
                I'm still early in my journey as a developer, but I truly enjoy learning and improving my skills in both front-end and back-end development.
                By working on personal projects,and I look forward to growing my skills through real-world challenges.
            </motion.p >

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
                    Contact me<Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.a>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/Kittitad_Resume.pdf" download className='px-10 py-3 border rounded-full border-grey-500 flex items-center gap-2'>
                    My resume<Image src={assets.download_icon} alt='' className='w-4' /></motion.a>
            </div>
        </div>
    )
}

export default Header
