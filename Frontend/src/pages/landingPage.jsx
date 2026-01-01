import React from 'react'

export default function LandingPage() {
    return (

        <div className='w-full min-h-screen overflow-x-hidden '>

            <h2 className='text-3xl mt-36 font-bold leading-10 ml-2.5 '>Manage All of Your Work<h2 className='ml-3'>In One Place Efficiently</h2></h2>

            <div className='w-full ml-2.5 mt-4'>
                <p className='text-[1.5rem]'>Manage projects and tasks in <p className='ml-25'>one place.</p>
                </p>
            </div>

            <button className='px-5 py-3 bg-blue-400 mt-5 ml-25 rounded-3xl text-[1.3rem]'>Get Started</button>
            <h2 className='text-3xl font-medium mt-12 ml-14'>ProTasks Features</h2>

            <div className='w-full h-55 bg-blue-300 mt-18 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.6)]'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-16 ml-34 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>

                <h2 className='text-[1.7rem] font-medium mt-3 ml-14'>Team Collaboration</h2>

                <div className='text-lg ml-13 mt-3 w-[80%]'>
                    <p>Add members to projects, assign tasks, and collaborate efficiently with your team.</p>
                </div>
            </div>

            <div className='w-full h-55 bg-blue-300 mt-10 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.6)]'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-16 ml-34">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                <h2 className='text-[1.7rem] font-medium mt-3 ml-14'>Project Overview</h2>

                <div className='text-lg ml-13 mt-3 w-[80%]'>
                    <p>Get a clear overview of all projects, tasks, members, and their current status.</p>
                </div>
            </div>

            <div className='w-full h-55 bg-blue-300 mt-10 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.6)]'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-16 ml-34">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                </svg>

                <h2 className='text-[1.7rem] font-medium mt-3 ml-12'>Sub-Task Management</h2>

                <div className='text-lg ml-12 mt-3 w-[80%]'>
                    <p>Break tasks into sub-tasks to manage work in a more organized and structured way.</p>
                </div>
            </div>
            <button className='px-4 py-3 bg-blue-400 mt-10 ml-15 rounded-3xl text-[1.3rem] mb-5'>Start Your Free Trial &#8594;</button>

        </div>

    )
}
