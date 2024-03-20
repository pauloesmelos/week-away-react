import React from 'react';
import { data } from '../../data/data';
const Gallery = () => { // AJUSTAR EFEITO HOVER NAS IMAGENS

  if(!data) return null;
  return (
    <section id="gallery" className="w-full">
        <div className="w-full max-w-[1100px] mx-auto px-6">
            <h1 className="text-slate-700 text-2xl font-bold">
                Bests Paradises
            </h1>
            { /* slide */}
            <div className="grid sm:grid-cols-5 py-5 gap-5">
                <img 
                    alt={data.imgs.gallery[0].title} 
                    title={data.imgs.gallery[0].title} 
                    src={data.imgs.gallery[0].url} 
                    className="w-full h-full object-cover col-span-2 sm:col-span-3 row-span-2
                     rounded-md duration-75 hover:shadow-lg
                     border-4 hover:border-blue-500 hover:translate-y-[-10px] ease-linear" 
                />
                <img 
                    alt={data.imgs.gallery[1].title} 
                    title={data.imgs.gallery[1].title} 
                    src={data.imgs.gallery[1].url} 
                    className="w-full h-full object-cover rounded-md
                    shadow-lg duration-75 border-4 hover:border-blue-500
                    hover:translate-y-[-10px] ease-linear" 
                />
                <img 
                    alt={data.imgs.gallery[2].title} 
                    title={data.imgs.gallery[2].title} 
                    src={data.imgs.gallery[2].url} 
                    className="w-full h-full object-cover rounded-md
                    shadow-lg duration-75 border-4 hover:border-blue-500
                    hover:translate-y-[-10px] ease-linear" 
                />
                <img 
                    alt={data.imgs.gallery[3].title} 
                    title={data.imgs.gallery[3].title} 
                    src={data.imgs.gallery[3].url} 
                    className="w-full h-full object-cover rounded-md
                    shadow-lg duration-75 border-4 hover:border-blue-500
                    hover:translate-y-[-10px] ease-linear"  
                />
                <img 
                    alt={data.imgs.gallery[4].title} 
                    title={data.imgs.gallery[4].title} 
                    src={data.imgs.gallery[4].url} 
                    className="w-full h-full object-cover rounded-md
                    shadow-lg duration-75 border-4 hover:border-blue-500
                    hover:translate-y-[-10px] ease-linear" 
                />
            </div>
        </div>
    </section>
  )
}

export default Gallery;