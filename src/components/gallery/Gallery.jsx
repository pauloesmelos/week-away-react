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
                     rounded-md shadow-lg grayscale-[70%] hover:grayscale-[0%] duration-100
                     border-l-4 border-b-4 hover:border-white hover:scale-[1.02]" 
                />
                <img 
                    alt={data.imgs.gallery[1].title} 
                    title={data.imgs.gallery[1].title} 
                    src={data.imgs.gallery[1].url} 
                    className="w-full h-full object-cover border-[5px] border-slate-200 rounded-md
                    shadow-lg brightness-75 hover:brightness-100 duration-300 ease-linear" 
                />
                <img 
                    alt={data.imgs.gallery[2].title} 
                    title={data.imgs.gallery[2].title} 
                    src={data.imgs.gallery[2].url} 
                    className="w-full h-full object-cover border-[5px] border-slate-200 rounded-md
                    shadow-lg grayscale-[80%] duration-100" 
                />
                <img 
                    alt={data.imgs.gallery[3].title} 
                    title={data.imgs.gallery[3].title} 
                    src={data.imgs.gallery[3].url} 
                    className="w-full h-full object-cover border-[5px] border-slate-200 rounded-md
                    shadow-lg brightness-75 hover:brightness-100 duration-300 ease-linear"  
                />
                <img 
                    alt={data.imgs.gallery[4].title} 
                    title={data.imgs.gallery[4].title} 
                    src={data.imgs.gallery[4].url} 
                    className="w-full h-full object-cover border-[5px] border-slate-200 rounded-md
                    shadow-lg brightness-75 hover:brightness-100 duration-300 ease-linear" 
                />
            </div>
        </div>
    </section>
  )
}

export default Gallery;