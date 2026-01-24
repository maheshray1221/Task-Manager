import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useTaskStore } from "../Store/TaskStore";

export default function UpdateTask() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  // const [task, setTask] = useState(null);
  const { id } = useParams();

  const updateTask = useTaskStore((state) => state.updateTask);

  // const singleTask = useTaskStore((state) => state.singleTask);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateData = {
        title,
        description,
        status,
        priority,
        dueDate,
      };

      const result = await updateTask(id, updateData);

      toast.success("Task Successfully Updated");
    } catch (error) {
      toast.error(error.message || "Task Credential Wrong Or Empty");
    }
  };

  // call singeltask

  // useEffect(() => {
  //   const handlesingleTask = async () => {
  //     try {
  //       const res = await singleTask(id);
  //       setTask(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   handlesingleTask();
  // }, [id]);

  // console.log("single task->", task);

  return (
    <div className="flex flex-col items-center justify-center inset-0 fixed bg-black/20 backdrop-blur-sm z-50">
      <div className="w-95 h-80 rounded-lg lg:w-105 lg:min-h-106 bg-white lg:rounded-xl">
        <div className="flex mt-3 ml-2 lg:ml-0lg:mt-5">
          <div className="flex gap-2 lg:gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-blue-600 lg:mt-1 lg:ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h1 className="text-lg lg:text-2xl font-semibold">Update Task</h1>
          </div>
          <button
            onClick={() => navigate("/protask/dashboard")}
            className="ml-45 lg:ml-37 text-lg"
          >
            X
          </button>
        </div>
        <ToastContainer position="bottom-left" autoClose={3000} />
        <div className="ml-2 lg:ml-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Task Title</label>
            <br />
            <input
              value={title}
              
              name="title"
              className="border rounded-lg mt-1 lg:border-2 border-gray-200 lg:rounded-xl lg:mt-1"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className="flex gap-1 lg:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 lg:mt-1 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>

              <p>Description</p>
            </div>
            <textarea
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-lg text-sm mt-0.5 h-12 w-45 lg:border-2 border-gray-200 lg:rounded-xl lg:h-20 lg:w-95 lg:mt-1 lg:text-lg"
              type="text"
            ></textarea>
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex gap-1 lg:gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 mt-0.5 lg:mt-1 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                    />
                  </svg>
                  <p className="text-base">Priority</p>
                </div>
                <select
                  className="bg-blue-300 w-20 h-6 rounded-xs mt-1 lg:w-35 lg:h-8 lg:rounded-sm lg:mt-2"
                  name="priority"
                  value={priority}
                  id=""
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="ml-30 lg:ml-23">
                <div className="flex gap-1 mb-0.5 lg:gap-2 lg:mb-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 mt-0.5 lg:mt-1 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  <p>Due Date</p>
                </div>
                <input
                  className="border w-31 rounded-xs h-6 lg:border-2 border-gray-200 lg:w-35 lg:rounded-sm lg:h-8"
                  type="date"
                  name="dueDate"
                  id=""
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-a mt-1 lg:gap-2 lg:mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 mt-0.5 lg:mt-1 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              <p className="text-base">Status</p>
            </div>
            <input
              className="mt-1 ml-1 lg:mt-2 lg:ml-0"
              type="radio"
              name="status"
              value="Completed"
              id="Completed"
              onChange={(e) => setStatus(e.target.value)}
            />
            <label className="mt-1 lg:ml-2" htmlFor="Completed">
              Completed
            </label>
            <input
              className="mt-0.5 ml-4 lg:ml-5 lg:mt-2"
              type="radio"
              name="status"
              value="In Progress"
              id="In Progress"
              onChange={(e) => setStatus(e.target.value)}
            />
            <label className="ml-1 lg:ml-2" htmlFor="In Progress">
              In Progress
            </label>
            <div className="flex w-90 h-8 mt mt-1.5 rounded-xs lg:w-96 lg:h-10 lg:mt-3 bg-blue-600 lg:rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 mt-1.5 lg:mt-3 text-white lg:ml-35 ml-30"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <button
                onClick={() => navigate("/protask/dashboard")}
                className="text-white ml-1 lg:ml-2"
              >
                Update Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
