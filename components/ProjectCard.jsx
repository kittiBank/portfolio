'use client';
import React from 'react'
import { motion, useReducedMotion } from 'motion/react'

const STACK_STYLES = {
    React: 'bg-sky-100 text-sky-800',
    'Next.js': 'bg-neutral-900 text-white',
    Next: 'bg-neutral-900 text-white',
    NestJS: 'bg-red-100 text-red-800',
    Nest: 'bg-red-100 text-red-800',
    MongoDB: 'bg-green-100 text-green-800',
    Vue: 'bg-emerald-100 text-emerald-800',
    Express: 'bg-gray-200 text-gray-800',
    Tailwind: 'bg-cyan-100 text-cyan-800',
    'React Query': 'bg-orange-100 text-orange-800',
    TypeScript: 'bg-blue-100 text-blue-800',
    psql: 'bg-indigo-100 text-indigo-800',
    PostgreSQL: 'bg-indigo-100 text-indigo-800',
};

const ProjectCard = ({ title, image, description, githubLink, demoLink, tags = [] }) => {
    const reducedMotion = useReducedMotion();

    return (
        <motion.div
            whileHover={reducedMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="group relative z-0 hover:z-10 h-full rounded-2xl shadow-md border border-gray-300 p-6 w-full bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4"
        >
            <h3 className="text-xl text-center font-semibold text-gray-800">{title}</h3>
            <div className="overflow-hidden rounded-xl">
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-48 object-cover rounded-xl ${reducedMotion ? '' : 'transition-transform duration-500 group-hover:scale-105'}`}
                />
            </div>
            <p className="text-gray-600 text-sm text-justify">{description}</p>
            {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className={`px-2.5 py-1 rounded-full text-xs font-medium ${STACK_STYLES[tag] ?? 'bg-gray-100 text-gray-700'}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            <div className="flex gap-3 mt-auto">                {demoLink && (
                    <a href={demoLink} target="_blank" rel="noopener noreferrer">
                        <motion.button
                            whileTap={reducedMotion ? undefined : { scale: 0.97 }}
                            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300"
                        >
                            Demo
                        </motion.button>
                    </a>
                )}
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <motion.button
                        whileTap={reducedMotion ? undefined : { scale: 0.97 }}
                        className="border border-gray-500 px-4 py-2 rounded-md text-sm hover:bg-gray-600 hover:text-white hover:border-gray-600 transition duration-300"
                    >
                        GitHub
                    </motion.button>
                </a>
            </div>
        </motion.div>
    )
}

export default ProjectCard
