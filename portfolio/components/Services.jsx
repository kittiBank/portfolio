import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Service = () => {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
      <h2 className='text-center text-5xl font-Ovo'>My services</h2>

      <p className='text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo'>
        I am a backend developer from Bangkok with 2 years of expreince
        in multiple companies like Tesla and Apple.
      </p>

      {/* Responsive */}
      <div className='grid grid-cols-auto gap-6 my-10'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div key={index}
          className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-gray-100  hover:-translate-y-5 duration-400'>
            <Image src={icon} alt='' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5'>
              {description}
            </p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
              Read more <Image src={assets.right_arrow} alt='' className='w-4'/>
            </a>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Service
