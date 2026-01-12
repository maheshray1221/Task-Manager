import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskStore } from "../Store/TaskStore";

export default function TaskList() {
  const navigate = useNavigate();
  const { getTask, toggleTask } = useTaskStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getdata() {
      const res = await getTask();
      setData(res.data);
    }
    getdata();
  }, []);

  const handleToggle = async (id, currentStatus) => {
    try {
      const res = await toggleTask(id, currentStatus);
      setData((prev) =>
        prev.map((task) =>
          task._id === id ? { ...task, completed: !task.currentStatus } : task
        )
      );
    } catch (error) {
      throw new Error(error.message || "somthing went wrong");
    }
  };
  return (
    <div>
      <div
        className="flex lg:justify-between lg:w-200 lg:h-12 bg-white lg:rounded-xl border-2 
      lg:shadow-sm border-gray-200 lg:mt-7"
      >
        <div className="flex lg:gap-1.5 lg:w-[33%] lg:ml-7 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
            />
          </svg>

          <h1 className="lg:text-lg lg:font-semibold ">All Tasks</h1>
        </div>
        <div className="flex lg:w-[65%] lg:h-9 lg:gap-5 items-center lg:ml-18 lg:mt-1 lg:text-[0.80rem] rounded-xl bg-sky-50">
          <p className="border border-yellow-200 lg:px-3 lg:py-1 rounded-sm">
            All
          </p>
          <p className="border border-yellow-200 lg:px-3 lg:py-1 rounded-sm">
            Today
          </p>
          <p className="border border-yellow-200 lg:px-3 lg:py-1 rounded-sm">
            Week
          </p>
          <p className="border border-yellow-200 lg:px-3 lg:py-1 rounded-sm">
            High
          </p>
          <p className="border border-yellow-200 lg:px-3 lg:py-1 rounded-sm">
            Medium
          </p>
          <p className="border border-yellow-200 lg:px-3 lg:py-1 rounded-sm">
            Low
          </p>
        </div>
      </div>

      <div className="lg:w-200 lg:min-h-vh">
        {/* task component  yha se loop start hoga*/}
        {data.map((task) => (
          <div
            key={task._id}
            className=" lg:w-200 lg:min-h-35  lg:mt-7 bg-white lg:rounded-xl border-2 lg:shadow-sm border-gray-200 "
          >
            <div className="flex lg:justify-between lg:mt-3 lg:ml-4">
              <h1
                className={`lg:text-2xl lg:font-semibold ${
                  task.completed ? "line-through" : ""
                } `}
              >
                {task.title}
              </h1>
              <div className="flex lg:w-[20%] lg:gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                  onClick={() => navigate("/updateTask")}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                {task.completed ? (
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
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 "
                    onClick={() => handleToggle(task._id, task.completed)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="lg:ml-4 lg:text-lg lg:font-base ">
                <p className={`${task.completed ? "line-through" : ""}`}>
                  {task.description}
                </p>
                <div
                  className={`${
                    task.priority === "Low" &&
                    "bg-blue-400 text-white rounded-2xl lg:h-7 lg:w-16"
                  } ${
                    task.priority === "Medium" &&
                    "bg-orange-400 text-white rounded-2xl lg:h-7 lg:w-22"
                  }  ${
                    task.priority === "Hard" &&
                    "bg-red-400 text-white rounded-2xl lg:h-7 lg:w-16"
                  } ${task.completed ? "line-through " : ""}`}
                >
                  <p className="lg:ml-3">{task.priority}</p>
                </div>
                <p className={`${task.completed ? "line-through" : ""}`}>
                  {task.dueDate.split("T")[0]}
                </p>
              </div>
              <div className="lg:mt-13">
                <button className="lg:mr-8 lg:px-2.5 lg:py-1 bg-blue-700 rounded-xl text-white">
                  SubTasks
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* yhaa loop end hoga */}
      {/* add taks button */}
      <div className=" lg:mt-7 lg:mb-7  ">
        <button
          className="bg-sky-50 px-80 py-2 rounded-xl border border-dashed border-sky-500"
          onClick={() => navigate("/createTask")}
        >
          <span className="text-3xl ">+</span> Add New Task
        </button>
      </div>
    </div>
  );
}
