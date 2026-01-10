import TaskList from "./TaskList";
import { useNavigate } from "react-router-dom";
export default function TaskOverview() {
  const navigate = useNavigate();
  return (
    <div className="lg:w-200 lg:min-h-screen lg:ml-5">
      <div className="">
        <div className="flex lg:justify-between">
          <div className="flex lg:gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mt-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <div>
              <h1 className="lg:text-[1.5rem] lg:font-bold ">Task Overview</h1>
              <p className="lg:text-[0.90rem] ">Manage your task efficiently</p>
            </div>
          </div>

          <div className="lg:w-[24%] lg:mt-4">
            <button
              className="lg:px-7 lg:py-1 bg-blue-700 rounded-xl text-white lg:text-lg"
              onClick={() => navigate("/createTask")}
            >
              + Add New Task
            </button>
          </div>
        </div>

        <div className="flex justify-around lg:mt-5 ">
          <div className="bg-white lg:w-50 lg:h-18 lg:rounded-xl flex border-2 lg:shadow-sm border-gray-200">
            <div className="bg-blue-200 lg:w-5 lg:h-5 lg:mt-7 lg:ml-3 lg:rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 relative top-0.5 left-0.5 text-blue-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                />
              </svg>
            </div>
            <div className="lg:ml-3 lg:mt-3">
              <h1 className="lg:text-lg">10</h1>
              <p className="lg:text-[0.90rem]">All Tasks</p>
            </div>
          </div>
          <div className="bg-white lg:w-50 lg:h-18 lg:rounded-xl lg:ml-5 flex border-2 lg:shadow-sm border-gray-200">
            <div className="bg-green-200 lg:w-5 lg:h-5 lg:mt-7 lg:ml-3 lg:rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 relative top-0.5 left-0.5 text-green-800"
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
            <div className="lg:ml-3 lg:mt-3">
              <h1 className="lg:text-lg">2</h1>
              <p className="lg:text-[0.90rem]">Low Priority</p>
            </div>
          </div>
          <div className="bg-white lg:w-50 lg:h-18 lg:rounded-xl lg:ml-5 flex border-2 lg:shadow-sm border-gray-200">
            <div className="bg-orange-200 lg:w-5 lg:h-5 lg:mt-7 lg:ml-3 lg:rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 relative top-0.5 left-0.5 text-orange-800"
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
            <div className="lg:ml-3 lg:mt-3">
              <h1 className="lg:text-lg">7</h1>
              <p className="lg:text-[0.90rem]">Medium Priority</p>
            </div>
          </div>
          <div className="bg-white lg:w-50 lg:h-18 lg:rounded-xl lg:ml-5 flex border-2 lg:shadow-sm border-gray-200">
            <div className="bg-red-200 lg:w-5 lg:h-5 lg:mt-7 lg:ml-3 lg:rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 relative top-0.5 left-0.5 text-red-800"
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
            <div className="lg:ml-3 lg:mt-3">
              <h1 className="lg:text-lg">2</h1>
              <p className="lg:text-[0.90rem]">High Priority</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TaskList />
      </div>
    </div>
  );
}
