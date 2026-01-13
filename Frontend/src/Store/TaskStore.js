import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { client } from "../Utils/client";

const TaskStore = (set, get) => ({
  tasks: [],
  loading: false,
  error: null,
  success: false,

  //getTask
  getTask: async () => {
    try {
      const res = await client.get("/getTasks", { withCredentials: true });
      set({
        tasks: res.data.data || [],
        loading: false,
        success: true,
      });
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || "Somthing went wrong";
      set({ error: message });
      console.log(err);
    }
  },

  // createTask
  createTask: async (taskdata) => {
    console.log("create taks called");
    try {
      const res = await client.post("/createTask", taskdata, {
        withCredentials: true,
      });
      set((state) => ({
        tasks: [res.data.data, ...state.tasks],
        loading: false,
        success: true,
      }));

      console.log(res.data);

      return res.data;
    } catch (error) {
      const message = err.response?.data?.message || "Somthing went wrong";
      set({ error: message, loading: false, success: false });
      throw new Error(error.message);
    }
  },

  //toggle Task

  toggleTask: async (id, completed) => {
    try {
      set({ loading: true });
      const res = await client.put(
        `/toggleTask/${id}`,
        { completed: !completed },
        {
          withCredentials: true,
        }
      );
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task._id === id ? { ...task, completed: !task.completed } : task
        ),
        loading: false,
        success: true,
      }));
      return res.data;
    } catch (error) {
      set({ loading: false, success: false });
      console.log(error);
    }
  },

  // delete Task

  deleteTask: async (id) => {
    try {
      //backend call
      const res = await client.delete(`/destroyTask/${id}`, {
        withCredentials: true,
      });

      //ui se tuaent remove
      set((state) => ({
        tasks: state.tasks.filter((task) => task._id !== id),
        success: true,
        loading: false,
      }));

      return res;
    } catch (error) {
      throw new Error(error.message || "error while delete task");
    }
  },
});

export const useTaskStore = create(
  devtools(
    persist(TaskStore, {
      name: "Protask",
    })
  )
);
