import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar h-12 flex items-center px-5 py-3'>
            <div className="text-gray-700 h-6 w-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="ml-4">
                <h1 className="font-bold">CloneTube</h1>
            </div>
            <div className="mx-auto w-1/3 flex flex-row">
                <input className="w-full px-4 py-1 border border-gray-300 shadow-sm focus:border-1 focus:border-gray-500 outline-none" type="text" name="" id="" placeholder='Ara' />
                <div className="items-center justify-center text-black bg-gray-100 border  border-gray-300 px-4 py-1 shadow-sm">
                    <div className="w-5 h-5 text-gray-700 font-extrabold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
