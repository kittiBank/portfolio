import React from 'react'

const ProjectCard = ({ title, image, description, githubLink, demoLink }) => {
    return (
        <div className="rounded-2xl shadow-md border border-gray-300 p-6 max-w-sm w-full bg-white hover:shadow-lg transition duration-300 flex flex-col gap-4">
            <h3 className="text-xl text-center font-semibold text-gray-800">{title}</h3>
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-xl"
            />
            <p className="text-gray-600 text-sm text-justify">{description}</p>
            <div className="flex gap-3 mt-auto">
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm">Demo</button >
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <button className="border border-gray-500 px-4 py-2 rounded-md text-sm">GitHub</button>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard
