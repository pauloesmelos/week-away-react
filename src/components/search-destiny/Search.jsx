import React from 'react';

const Search = () => {
  return (
    <section className="w-full my-24">
        <div className="w-full max-w-[1100px] mx-auto px-6">
            <h1 className="text-2xl font-bold mb-5 text-slate-700">
                Search Your Destiny
            </h1>
            <form className="w-full flex flex-col md:flex-row justify-between gap-6">
                {/* destination */}
                <div className="w-full md:max-w-[200px] flex flex-col gap-1">
                    <label>Destinations</label>
                    <select className="border-2 p-3 rounded-md">
                        <option>Honolulu</option>
                        <option>Maui</option>
                        <option>Bahamas</option>
                        <option>Sydney</option>
                        <option>Queensland</option>
                        <option>California</option>
                    </select>
                </div>
                {/* check-in */}
                <div className="w-full md:max-w-[200px] flex flex-col gap-1">
                    <label>Check-in</label>
                    <input className="border-2 p-2 rounded-md" type="date" />
                </div>
                {/* check-out */}
                <div className="w-full md:max-w-[200px] flex flex-col gap-1">
                    <label>Check-out</label>
                    <input className="border-2 p-2  rounded-md" type="date" />
                </div>
                {/* button */}
                <div className="w-full md:max-w-[200px] flex flex-col gap-1">
                    <label>Search</label>
                    <button
                        className="px-4 hover:bg-none hover:bg-[var(--primary-light)]"
                    >
                        Search & Destinations
                    </button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Search