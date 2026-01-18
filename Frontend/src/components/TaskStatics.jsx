import React from "react";

export default function TaskStatics() {
  return (
    <div className="flex flex-col items-center">
      <div className=" bg-white/60 w-83 h-80 mt-5 rounded-lg border lg:w-98 lg:h-95 lg:mt-4 lg:ml-5 lg:rounded-xl lg:border-2 border-gray-200">
        <div className="flex gap-2 mt-4 ml-5 lg:gap-2 lg:ml-10 lg:mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>

          <h1 className="text-lg font-bold">Task Statistics</h1>
        </div>

        <div className="flex w-80 h-40 ml-4 mt-2 gap-4 lg:gap-0 lg:w-110 lg:h-50 flex-wrap lg:mt-5 lg:ml-5">
          <div className="bg-white w-35 h-18 rounded-lg border lg:w-42 lg:h-18 lg:rounded-xl lg:ml-0 flex lg:border-2 lg:shadow-sm border-gray-200">
            <div className="bg-amber-300 mt-5 ml-1.5 w-5 h-5 lg:mt-7 lg:ml-3 rounded-sm">
              <div className="w-3 h-3 border border-black rounded-full relative top-1 left-1"></div>
            </div>
            <div className="ml-2 mt-0.5 lg:ml-3 lg:mt-3">
              <h1 className="text-xl lg:text-lg">4</h1>
              <p className="text-lg lg:text-[0.90rem]">Total Tasks</p>
            </div>
          </div>
          <div className="bg-white w-35 h-18 rounded-lg border lg:w-42 lg:h-18 lg:rounded-xl lg:ml-4 flex lg:border-2 lg:shadow-sm border-gray-200">
            <div className="bg-amber-300 mt-5 ml-1.5 w-5 h-5 lg:mt-7 lg:ml-3 rounded-sm">
              <div className="w-3 h-3 border border-black rounded-full relative top-1 left-1"></div>
            </div>
            <div className="ml-2 mt-0.5 lg:ml-3 lg:mt-3">
              <h1 className="text-xl lg:text-lg">5</h1>
              <p className="text-lg lg:text-[0.90rem]">Completed</p>
            </div>
          </div>
          <div className="bg-white w-35 h-18 rounded-lg border lg:w-42 lg:h-18 lg:rounded-xl lg:ml-0 flex lg:border-2 lg:shadow-sm border-gray-200">
            <div className="bg-amber-300 mt-5 ml-1.5 w-5 h-5 lg:mt-7 lg:ml-3 rounded-sm">
              <div className="w-3 h-3 border border-black rounded-full relative top-1 left-1"></div>
            </div>
            <div className="ml-2 mt-0.5 lg:ml-3 lg:mt-3">
              <h1 className="text-xl lg:text-lg">8</h1>
              <p className="text-lg lg:text-[0.90rem]">Pending</p>
            </div>
          </div>
          <div className="bg-white w-35 h-18 rounded-lg border lg:w-42 lg:h-18 lg:rounded-xl lg:ml-4 flex lg:border-2 lg:shadow-sm border-gray-200">
            <div className="bg-amber-300 mt-5 ml-1.5 w-5 h-5 lg:mt-7 lg:ml-3 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 relative top-0.5 left-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </div>
            <div className="ml-2 mt-0.5  lg:ml-3 lg:mt-3">
              <h1 className="text-xl lg:text-lg">100%</h1>
              <p className="text-lg lg:text-[0.90rem]">Rate</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white w-75 mt-5 lg:mt-0 lg:w-90 lg:h-18 rounded-lg border lg:rounded-xl flex lg:border-2 lg:shadow-sm border-gray-200">
            <div className="bg-amber-300 w-5 h-5 mt-3 ml-2  lg:mt-7 lg:ml-3 rounded-sm">
              <div className="w-3 h-3 border border-black rounded-full relative top-1 left-1"></div>
            </div>
            <div className="ml-2 lg:ml-3 lg:mt-3">
              <div className="flex">
                <p className="text-xl lg:text-[0.90rem]">Task Progress</p>
                <p className="text-sm mt-1 lg:mt-0 ml-20 lg:text-[0.95rem] lg:ml-30 bg-amber-300 px-2 py-0.5 rounded-xl lg:rounded-2xl">
                  5/5
                </p>
              </div>
              <input className="w-55 lg:w-60" type="range" name="" id="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
