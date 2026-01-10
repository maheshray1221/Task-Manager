import React from "react";

export default function TaskStatics() {
  return (
    <div>
      <div className="bg-white/60 lg:w-98 lg:h-95 lg:mt-4 lg:ml-5 lg:rounded-xl border-2 border-gray-200">
        <div className="flex lg:gap-2 lg:ml-10 lg:mt-4">
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

        <div className="flex lg:w-110 lg:h-50 flex-wrap lg:mt-5 lg:ml-5">
          <div className="bg-white lg:w-42 lg:h-18 lg:rounded-xl lg:ml-0 flex lg:border-2 lg:shadow-sm border-gray-200">
            <div className="bg-amber-300 lg:w-5 lg:h-5 lg:mt-7 lg:ml-3 lg:rounded-sm">
              <div className="lg:w-3 lg:h-3 border border-black rounded-full relative top-1 left-1"></div>
            </div>
            <div className="lg:ml-3 lg:mt-3">
              <h1 className="lg:text-lg">4</h1>
              <p className="lg:text-[0.90rem]">Total Tasks</p>
            </div>
          </div>
          <div className="bg-white lg:w-42 lg:h-18 lg:rounded-xl lg:ml-4 flex lg:border-2 lg:shadow-sm border-gray-200">
            <div className="bg-amber-300 lg:w-5 lg:h-5 lg:mt-7 lg:ml-3 lg:rounded-sm">
              <div className="lg:w-3 lg:h-3 border border-black rounded-full relative top-1 left-1"></div>
            </div>
            <div className="lg:ml-3 lg:mt-3">
              <h1 className="lg:text-lg">5</h1>
              <p className="lg:text-[0.90rem]">Completed</p>
            </div>
          </div>
          <div className="bg-white lg:w-42 lg:h-18 lg:rounded-xl lg:ml-0 flex border-2 lg:shadow-sm border-gray-200">
            <div className="bg-amber-300 lg:w-5 lg:h-5 lg:mt-7 lg:ml-3 lg:rounded-sm">
              <div className="lg:w-3 lg:h-3 border border-black rounded-full relative top-1 left-1"></div>
            </div>
            <div className="lg:ml-3 lg:mt-3">
              <h1 className="lg:text-lg">8</h1>
              <p className="lg:text-[0.90rem]">Pending</p>
            </div>
          </div>
          <div className="bg-white lg:w-42 lg:h-18 lg:rounded-xl lg:ml-4 flex border-2 lg:shadow-sm border-gray-200">
            <div className="bg-amber-300 lg:w-5 lg:h-5 lg:mt-7 lg:ml-3 lg:rounded-sm">
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
            <div className="lg:ml-3 lg:mt-3">
              <h1 className="lg:text-lg">100%</h1>
              <p className="lg:text-[0.90rem]">Completion Rate</p>
            </div>
          </div>
        </div>
        <div className="bg-white lg:w-85 lg:h-18 lg:rounded-xl lg:ml-5 flex border-2 lg:shadow-sm border-gray-200">
          <div className="bg-amber-300 lg:w-5 lg:h-5 lg:mt-7 lg:ml-3 lg:rounded-sm">
            <div className="lg:w-3 lg:h-3 border border-black rounded-full relative top-1 left-1"></div>
          </div>
          <div className="lg:ml-3 lg:mt-3">
            <div className="flex">
              <p className="lg:text-[0.90rem]">Task Progress</p>
              <p className=" lg:text-[0.95rem] lg:ml-30 bg-amber-300 lg:px-2 lg:py-0.5 lg:rounded-2xl">
                5/5
              </p>
            </div>
            <input className="lg:w-60" type="range" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
}
