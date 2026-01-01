import React from 'react'
import { } from "@mui/material"
export default function Header() {
    return (
        <div className='flex justify-between w-full h-15 lg:h-[4vw] bg-[#f0f9ff] fixed top-0 left-0 z-999'>
            <h2 className='pl-2 lg:ml-10 text-2xl lg:text-3xl mt-2.5'>ProTasks</h2>
            <div className=' lg:mr-10 mt-2.5'>
                <button className='rounded-full  lg:px-4 lg:py-2 right-4 mr-6 text-[#3772fe] lg:bg-[#fdfdfe]'>Log In</button>
                <button className='rounded-full mr-1.5 px-3.5 py-1.5 lg:px-4 lg:py-2 right-4 bg-[#3772fe] text-[#fdfdfe]'>Sign Up</button>
            </div>
        </div>
    )
}
