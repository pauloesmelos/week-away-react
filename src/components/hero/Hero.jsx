import React from 'react';
import { data } from '../../data/data';

const Hero = () => {
  if(!data) return null;
  return (
    <section className="w-full h-screen">
        <div className="w-full h-full">
            {/* img background */}
            <div className="w-full h-full relative">
                {/* overlay */}
                <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
                {/* img */}
                <img 
                    title={data.imgs.hero.title} 
                    alt={data.imgs.hero.title} 
                    src={data.imgs.hero.url} 
                    className="w-full h-full object-cover bg-center" 
                />
            </div>
            {/* content */}
            <div className="w-full max-w-[1100px] mx-auto text-white">
                <div className="w-full max-w-[600px] px-6 mx-auto absolute top-[60%]">
                    <h2 className="text-3xl sm:text-5xl font-bold">
                        Find Your Special Trip
                    </h2>
                    <h4 className="font-bold text-2xl sm:text-3xl my-4">With Weekaway</h4>
                    <p className="text-sm sm:text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quos praesentium iure? Minima beatae quam tempore eos sequi deserunt omnis possimus ipsum ab commodi velit, voluptates at consequatur reiciendis qui!
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;