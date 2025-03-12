import React from 'react'

function Navbar() {
  return (
    <>
<nav className="bg-gray-800 p-4 grid gap-16  max-w-[1500px] mx-auto">
    <h1 className='text-4xl text-white'> <span>MOVIE</span><span className='text-red-500'>World</span> </h1>
      <div className=" bg-slate-400 flex items-center justify-between text-2xl rounded-lg">
        <ul className="flex space-x-12 px-4">
          <li>
            <a href="#home" className="text-white hover:text-yellow-500">Home</a>
          </li>
          <li>
            <a href="#Bollywood" className="text-white hover:text-yellow-500">BollyWood</a>
          </li>
          <li>
            <a href="#HollyWood" className="text-white hover:text-yellow-500">HollyWood</a>
          </li>
          <li>
            <a href="#South" className="text-white hover:text-yellow-500">South</a>
          </li>
          <li>
            <a href="#Hindi Dubble" className="text-white hover:text-yellow-500">Hindi Dubble</a>
          </li>
          <li>
            <a href="#Web Serise" className="text-white hover:text-yellow-500">Web Serise</a>
          </li>
        </ul>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Search
          </button>
        </div>
        <ul>
          li
        </ul>
      </div>
    </nav>
  </>
  )
}

export default Navbar