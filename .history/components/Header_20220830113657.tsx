import React from 'react'
import NavButton from './NavButton'

function Header() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
        <div className="flex items-center space-x-2">
           <img 
           className="rounded-full h-20 w-20" 
           src="https://i.imgur.com/4h7mAu7.png" 
           alt="" />
        <div>
            <h1 className='text-lg text-white font-bold'>Collie Draw</h1>
            <p className="text-xs text-emerald-500 truncate">User...</p>
        </div>
        </div>

        <div className="hidden md:flex md:col-span-3 items-center  justify-center rounded-md">
            <div className="bg-[#0A1F1C] p-4 space-x-2">
            <NavButton title="Buy Tickets"/>
            <NavButton title="Logout"/>
            </div>
        </div>
    </div>
  )
}

export default Header