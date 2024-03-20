import React from 'react';
import { data } from '../../data/data';

const Contact = () => {

  if(!data) return null;
  return (
    <section id="contact" className="w-full py-16">
        <div className="w-full max-w-[1100px] mx-auto px-6">
            <div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-700 mb-3">
                        Send us a message
                    </h1>
                    <p className="text-slate-700">We-re standing by</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-10">
                    {/* background image */}
                    <div className="bg-center bg-no-repeat bg-cover bg-contact w-full h-[200px] sm:h-[340px] mt-8
                    rounded-md" />
                    <form className="grid grid-cols-2 gap-4 mt-8">
                        <input 
                            type="text" 
                            placeholder="First" 
                            className="border p-2 rounded-md" 
                        />
                        <input 
                            type="text" 
                            placeholder="Last" 
                            className="border p-2 rounded-md" 
                        />
                        <input 
                            type="text" 
                            placeholder="Email" 
                            className="border p-2 rounded-md" 
                        />
                        <input 
                            type="number" 
                            placeholder="Phone" 
                            className="border p-2 rounded-md" 
                        />
                        <input 
                            type="text"
                            placeholder="Address" 
                            className="border p-2 rounded-md col-span-2" 
                        />
                        <textarea cols="20" rows="5" className="border p-2 rounded-md col-span-2 border-slate-300">

                        </textarea>
                        <button className="px-6 hover:bg-none hover:bg-[var(--primary-light)] col-span-2">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact;