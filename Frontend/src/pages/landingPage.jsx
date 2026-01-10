import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div
      className="w-full min-h-screen overflow-x-hidden
      bg-[linear-gradient(50deg,#cde0f0_0%,#cde0f0_30%,#ffffff_55%,#ebceea_100%)]"
    >
      <h2
        className="text-3xl mt-36 font-bold leading-10 ml-2.5 text-slate-900
                md:text-5xl md:mt-42  md:text-center md:leading-13  lg:text-6xl lg:mt-50 lg:text-center lg:leading-18"
      >
        Manage All of Your Work
      </h2>
      <span
        className="ml-5 text-3xl mt-36 font-bold leading-10 text-slate-900
                md:text-5xl md:mt-42 md:ml-38 md:text-center md:leading-13  lg:text-6xl lg:mt-50 lg:ml-110 lg:leading-18"
      >
        In One Place Efficiently
      </span>

      <div className="w-full ml-3.5 mt-3 md:text-center md:mt-4  lg:text-center lg:mt-4 text-slate-600">
        <p className="text-lg md:text-2xl lg:text-4xl">
          Manage projects and tasks in one place.
        </p>
      </div>

      <button
        onClick={() => navigate("/register")}
        className="px-4 py-2.5 bg-blue-600 text-white mt-12 ml-25 rounded-3xl text-[1.3rem] 
        md:px-7 md:py-4 md:text-2xl md:rounded-4xl md:ml-80 md:mt-13
        lg:mt-17 lg:ml-[43%] lg:text-3xl lg:rounded-4xl lg:py-4 lg:transition-transform lg:duration-500 lg:hover:scale-105 lg:hover:bg-blue-700"
      >
        Get Started
      </button>
      <h2
        className="text-3xl font-medium mt-12 ml-14 lg:text-center lg:text-5xl lg:mr-14 lg:mt-18
        md:text-4xl md:text-center md:mr-19 md:mt-15 md:mb-10 "
      >
        ProTasks Features
      </h2>

      <div className="lg:flex lg:justify-between">
        <div
          className="w-full h-55 bg-blue-50 mt-18 rounded-2xl transition-transform duration-500 hover:scale-105 border border-slate-100 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.4)] 
         lg:w-120 lg:mt-25 lg:ml-0 lg:transition-transform lg:duration-500 lg:hover:scale-105 lg:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.4)]
         md:w-150 md:h-65 md:ml-28 md:mt-20 md:transition-transform md:duration-500 md:hover:scale-105 md:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.4)]"
        >
          <div className="lg:transition-transform lg:duration-500 lg:hover:rotate-360">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-16 ml-34 md:ml-65 md:size-20 lg:ml-48 lg:size-20 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>

          <h2 className="text-slate-700 text-[1.7rem] font-medium mt-3 ml-14 md:text-3xl md:font-bold md:mt-10 md:text-center md:mr-14">
            Team Collaboration
          </h2>

          <div className="text-lg ml-13 mt-3 w-[80%] md:text-[lg] md:w-[80%] md:ml-20 md:mt-6 text-slate-600">
            <p>
              Add members to projects, assign tasks, and collaborate efficiently
              with your team.
            </p>
          </div>
        </div>

        <div
          className="w-full h-55 bg-blue-50 mt-10 rounded-2xl border border-slate-100 transition-transform duration-500 hover:scale-105 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.4)]
        lg:w-120 lg:mt-25 lg:ml-0 lg:transition-transform lg:duration-500 lg:hover:scale-105 lg:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.4)]
        md:w-150 md:h-65 md:ml-28 md:mt-20 md:transition-transform md:duration-500 md:hover:scale-105 md:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.4)]"
        >
          <div className="lg:transition-transform lg:duration-500 lg:hover:rotate-360">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-16 ml-34 md:ml-65 md:size-20 lg:ml-48 lg:size-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>

          <h2 className="text-slate-700 text-[1.7rem] font-medium mt-3 ml-14 md:text-3xl md:font-bold md:mt-10 md:text-center md:mr-14">
            Project Overview
          </h2>

          <div className="text-lg ml-13 mt-3 w-[80%] md:text-[lg] md:w-[80%] md:ml-20 md:mt-6 text-slate-600">
            <p>
              Get a clear overview of all projects, tasks, members, and their
              current status.
            </p>
          </div>
        </div>

        <div
          className="w-full h-55 bg-blue-50 mt-10 rounded-2xl border border-blue-200 transition-transform duration-500 hover:scale-105 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.4)]
        lg:w-120 lg:mt-25 lg:ml-0 lg:transition-transform lg:duration-500 lg:hover:scale-105 lg:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.4)]
        md:w-150 md:h-65 md:ml-28 md:mt-20 md:transition-transform md:duration-500 md:hover:scale-105 md:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.4)]"
        >
          <div className="lg:transition-transform lg:duration-500 lg:hover:rotate-360">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-16 ml-34 md:ml-65 md:size-20 lg:ml-48 lg:size-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
              />
            </svg>
          </div>

          <h2 className="text-slate-700 text-[1.7rem] font-medium mt-3 ml-12 md:text-3xl md:font-bold md:mt-10 md:text-center md:mr-14">
            Sub-Task Management
          </h2>

          <div className="text-lg ml-12 mt-3 w-[80%] md:text-[lg] md:ml-20 md:mt-6 lg:ml-15 text-slate-600">
            <p>
              Break tasks into sub-tasks to manage work in a more organized and
              structured way.
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate("/register")}
        className="px-4 py-3 bg-blue-600 mt-10 ml-15 rounded-3xl text-[1.3rem] mb-5
        md:px-7.5 md:py-4.5 md:text-2xl md:rounded-4xl md:ml-66 md:mt-25 
        lg:text-3xl lg:rounded-4xl lg:ml-150 lg:transition-transform lg:duration-500 lg:hover:scale-105 lg:hover:bg-blue-700 text-white"
      >
        Start Your Free Trial &#8594;
      </button>
    </div>
  );
}
