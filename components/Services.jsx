'use client';

import { assets } from '@/assets/assets'

import { getCardStagger, getCarouselVariants } from '@/lib/motion'

import Image from 'next/image'

import React, { useState } from 'react'

import { AnimatePresence, motion, useReducedMotion } from "motion/react"

import ProjectCard from './ProjectCard';



const CARDS_PER_PAGE = 3;



const projects = [

  {

    title: "Authentication System",

    image: "/images/authen-mern.png",

    description: "User login and signup system using React, Tailwind, Axios, and Express.js. Data is stored in MongoDB, and JWT is used for secure user sessions.",

    githubLink: "https://github.com/kittiBank/authen-mern",
    demoLink: "https://authen-mern.vercel.app/",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    title: "Music Playlist",
    image: assets.music02.src,
    description: "A music playlist app built with Vue 3 and NestJS. Search songs via Deezer API and manage playlists stored in localStorage.",
    githubLink: "https://github.com/kittiBank/musicPlayList",
    tags: ["Vue", "Nest", "Tailwind"],
  },
  {
    title: "Order Management",
    image: assets.order_mgnt.src,
    description: "An order management web app built with Next.js and React Query. Features authentication, filtering, sorting, and infinite scroll.",
    githubLink: "https://github.com/kittiBank/order-manage-web",
    tags: ["React", "Nest", "psql"],
  },
];



const Service = () => {

  const reducedMotion = useReducedMotion();

  const carouselVariants = getCarouselVariants(reducedMotion);



  const [page, setPage] = useState(0);

  const [direction, setDirection] = useState(0);

  const totalPages = Math.ceil(projects.length / CARDS_PER_PAGE);

  const visibleProjects = projects.slice(

    page * CARDS_PER_PAGE,

    page * CARDS_PER_PAGE + CARDS_PER_PAGE

  );



  const canGoPrev = page > 0;

  const canGoNext = page < totalPages - 1;



  const goToPage = (nextPage) => {

    setDirection(nextPage > page ? 1 : -1);

    setPage(nextPage);

  };



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



      <motion.section

        initial={{ opacity: 0 }}

        whileInView={{ opacity: 1 }}

        transition={{ delay: 0.9, duration: 0.5 }}

        className="py-2 flex items-center gap-4"

      >

        <motion.button

          type="button"

          onClick={() => goToPage(page - 1)}

          disabled={!canGoPrev}

          aria-label="Previous projects"

          whileHover={reducedMotion ? undefined : { scale: 1.08 }}

          whileTap={reducedMotion ? undefined : { scale: 0.95 }}

          className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-300"

        >

          <Image src={assets.right_arrow_bold} alt="" className="w-4 rotate-180" />

        </motion.button>



        <div className="flex-1 overflow-hidden py-2">

          <AnimatePresence mode="wait" custom={direction}>

            <motion.div

              key={page}

              custom={direction}

              variants={carouselVariants}

              initial="enter"

              animate="center"

              exit="exit"

              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

            >

              {visibleProjects.map((project, index) => (

                <motion.div key={project.title} {...getCardStagger(reducedMotion, index)}>

                  <ProjectCard {...project} />

                </motion.div>

              ))}

            </motion.div>

          </AnimatePresence>

        </div>



        <motion.button

          type="button"

          onClick={() => goToPage(page + 1)}

          disabled={!canGoNext}

          aria-label="Next projects"

          whileHover={reducedMotion ? undefined : { scale: 1.08 }}

          whileTap={reducedMotion ? undefined : { scale: 0.95 }}

          className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-300"

        >

          <Image src={assets.right_arrow_bold} alt="" className="w-4" />

        </motion.button>

      </motion.section>



    </motion.div >

  )

}



export default Service

