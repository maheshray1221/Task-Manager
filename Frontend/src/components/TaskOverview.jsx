import { useState, useEffect } from "react";
import TaskList from "./TaskList";
import { useNavigate } from "react-router-dom";
import { useTaskStore } from "../Store/TaskStore";

export default function TaskOverview() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const [themeState, setThemeState] = useState(0);

  const tasks = useTaskStore((state) => state.tasks);
  console.log(tasks.length);

  console.log(tasks)
  console.log("is Array",Array.isArray(tasks))

  const allTaskCount = tasks.length
  const lowTaskCount = tasks.filter((task) => task.priority === "Low").length;
  const mediumTaskCount = tasks.filter((task) => task.priority === "Medium",).length;
  const highTaskCount = tasks.filter((task) => task.priority === "High").length;
  return (
    <div>
      <div className=" w-full overflow-x-hidden min-h-200 md:w-150 md:min-h-screen lg:w-200 lg:min-h-screen lg:ml-5">
        <div className="">
          <div className="flex justify-between md:justify-between lg:justify-between">
            <div className="w-10 h-8 ml-3 mt-4 md:hidden ">
              {themeState == 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 text-yellow-600  ml-1 mt-0.5 "
                  onClick={() => setOpen(!open)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 text-yellow-600 ml-1 mt-0.5 "
                  onClick={() => setOpen(!open)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
            </div>
            <div className="flex mt-3 lg:mt-0 gap:3 lg:gap-3 md:gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 mt-2 hidden md:block lg:size-6 lg:mt-2 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <div>
                <h1 className="text-2xl font-semibold md:text-[1.35rem] md:font-semibold lg:text-[1.5rem] lg:font-bold ">
                  Task Overview
                </h1>
                <p className="text-sm md:text-sm lg:text-[0.90rem] ">
                  Manage your task efficiently
                </p>
              </div>
            </div>

            <div className="mr-2 mt-4 lg:mr-0 md:mr-0 md:mt-2 md:w-[19%] lg:w-[24%] lg:mt-4">
              <button
                className="px-2 py-2 text-sm md:px-5 md:py-1 lg:px-7 lg:py-1 bg-blue-700 rounded-xl text-white lg:text-lg"
                onClick={() => navigate("/createTask")}
              >
                + Add Task
              </button>
            </div>
          </div>

          {open && (
            <div className="w-30 h-20 rounded-xl shadow-xl border border-gray-200 bg-white fixed z-999 ml-5">
              <div className="flex flex-col text-lg mt-2 ml-3 items-start">
                <button
                  onClick={() => {
                    setOpen(!open);
                    setThemeState(0);
                  }}
                >
                  Light
                </button>
                <button
                  onClick={() => {
                    setOpen(!open);
                    setThemeState(1);
                  }}
                >
                  Dark
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-3 items-center mt-6  md:gap-0 lg:gap-0 md:flex md:flex-row lg:flex lg:flex-row lg:justify-around lg:mt-5 ">
            <div
              className="bg-white w-83 h-25 rounded-2xl border shadow-sm md:w-35 md:h-15 md:rounded-xl md:border-2 md:shadow-sm 
             lg:w-50 lg:h-18 lg:rounded-xl flex lg:border-2 lg:shadow-sm border-gray-200"
            >
              <div className="md:bg-blue-200 lg:bg-blue-200 lg:w-5 lg:h-5 lg:mt-7 lg:ml-3 lg:rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 top-8 lg:size-4 relative lg:top-0.5 left-0.5 text-blue-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                  />
                </svg>
              </div>
              <div className="ml-5 mt-4 md:ml-2 md:mt-2 lg:ml-3 lg:mt-3">
                <h1 className="text-lg font-semibold lg:font-normal md:text-sm md:font-normal lg:text-lg">
                  {allTaskCount}
                </h1>
                <p className="text-lg md:text-[0.85rem] lg:text-[0.90rem]">
                  All Tasks
                </p>
              </div>
            </div>

            <div
              className="bg-white w-83 h-25 rounded-2xl border shadow-sm md:w-35 md:h-15 md:rounded-xl md:border-2 md:shadow-sm 
           lg:w-50 lg:h-18 lg:rounded-xl lg:ml-5 flex lg:border-2 lg:shadow-sm border-gray-200"
            >
              <div className="lg:bg-green-200 md:bg-green-200 lg:w-5 lg:h-5 lg:mt-7 lg:ml-3 lg:rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 top-8 lg:size-4 relative lg:top-0.5 left-0.5 text-green-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
              </div>
              <div className="ml-5 mt-4 md:ml-2 md:mt-2 lg:ml-3 lg:mt-3">
                <h1 className="text-lg font-semibold lg:font-normal md:text-sm md:font-normal lg:text-lg">
                  {lowTaskCount}
                </h1>
                <p className="text-lg md:text-[0.85rem] lg:text-[0.90rem]">
                  Low Priority
                </p>
              </div>
            </div>
            <div
              className="bg-white w-83 h-25 rounded-2xl border shadow-sm md:w-35 md:h-15 md:rounded-xl md:border-2 md:shadow-sm 
           lg:w-50 lg:h-18 lg:rounded-xl lg:ml-5 flex lg:border-2 lg:shadow-sm border-gray-200"
            >
              <div className="lg:bg-orange-200 md:bg-orange-200 lg:w-5 lg:h-5 lg:mt-7 lg:ml-3 lg:rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 top-8 lg:size-4 relative lg:top-0.5 left-0.5 text-orange-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
              </div>
              <div className="ml-5 mt-4 md:ml-2 md:mt-2 lg:ml-3 lg:mt-3">
                <h1 className="text-lg font-semibold lg:font-normal md:text-sm md:font-normal lg:text-lg">
                  {mediumTaskCount}
                </h1>
                <p className="text-lg md:text-[0.85rem] lg:text-[0.90rem]">
                  Medium Priority
                </p>
              </div>
            </div>
            <div
              className="bg-white w-83 h-25 rounded-2xl border shadow-sm md:w-35 md:h-15 md:rounded-xl md:border-2 md:shadow-sm 
           lg:w-50 lg:h-18 lg:rounded-xl lg:ml-5 flex lg:border-2 lg:shadow-sm border-gray-200"
            >
              <div className="lg:bg-red-200 md:bg-red-200 lg:w-5 lg:h-5 lg:mt-7 lg:ml-3 lg:rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 top-8 lg:size-4 relative lg:top-0.5 left-0.5 text-red-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
              </div>
              <div className="ml-5 mt-4 md:ml-2 md:mt-2 lg:ml-3 lg:mt-3">
                <h1 className="text-lg font-semibold lg:font-normal md:text-sm md:font-normal lg:text-lg">
                  {highTaskCount}
                </h1>
                <p className="text-lg md:text-[0.85rem] lg:text-[0.90rem]">
                  High Priority
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <TaskList />
        </div>
      </div>
    </div>
  );
}
