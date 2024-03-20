import React from 'react';
import { data } from '../../data/data';
const Activies = () => { // activies - resorts, cruises e dives
  if(!data) return null;
  return (
    <section id="activies" className="w-full mt-[-40px] my-8">
        <div className="w-full max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6
        h-[700px] md:h-[250px]">
            {/* cards with images */}
            <div className="border-[5px] shadow-xl relative rounded-md overflow-hidden group cursor-default">
                <img 
                    src={data.imgs.activies[0].url}
                    alt={data.imgs.activies[0].title}
                    title={data.imgs.activies[0].title}
                    className="w-full h-full object-cover brightness-75 group-hover:scale-[1.2] 
                    duration-500 ease-linear" 
                />
                <h3 className="absolute top-[45%] left-[40%] text-white font-bold text-2xl drop-shadow-2xl">
                    {data.imgs.activies[0].title}
                </h3>
            </div>
            <div className="border-[5px] shadow-xl relative rounded-md overflow-hidden group cursor-default">
                <img 
                    src={data.imgs.activies[1].url} 
                    alt={data.imgs.activies[1].title} 
                    title={data.imgs.activies[1].title} 
                    className="w-full h-full object-cover brightness-75 group-hover:scale-[1.2]
                     duration-500 ease-linear" 
                />
                <h3 className="absolute top-[45%] left-[40%] text-white font-bold text-2xl drop-shadow-2xl">
                    {data.imgs.activies[1].title}
                </h3>
            </div>
            <div className="border-[5px] shadow-xl relative rounded-md overflow-hidden group cursor-default">
                <img 
                    src={data.imgs.activies[2].url} 
                    alt={data.imgs.activies[2].title} 
                    title={data.imgs.activies[2].title} 
                    className="w-full h-full object-cover brightness-75 group-hover:scale-[1.2] 
                    duration-500 ease-linear" 
                />
                <h3 className="absolute top-[45%] left-[40%] text-white font-bold text-2xl drop-shadow-2xl">
                    {data.imgs.activies[2].title}
                </h3>
            </div>
        </div>
    </section>
  )
}

export default Activies;