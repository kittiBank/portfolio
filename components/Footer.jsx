'use client';
import { assets } from '@/assets/assets'
import { getFadeUp } from '@/lib/motion'
import Image from 'next/image'
import React from 'react'
import { motion, useReducedMotion } from 'motion/react'

const Footer = () => {
    const reducedMotion = useReducedMotion();
    const fadeUp = getFadeUp(reducedMotion);

    return (
        <motion.footer
            className='mt-20'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
        >
            <div className='text-center'>
                <Image src={assets.kit_logo} alt='' className='w-36 mx-auto mb-2' />

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='' className='w-6' />
                    kittitad.pro@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li>
                        <a
                            target='_blank'
                            rel="noopener noreferrer"
                            href="https://github.com/kittiBank"
                            className="hover:text-gray-600 transition-colors duration-300"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            target='_blank'
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/kittitach-promwan-99884a256/"
                            className="hover:text-gray-600 transition-colors duration-300"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </motion.footer>
    )
}

export default Footer
