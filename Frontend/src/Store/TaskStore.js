import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { client } from "../Utils/client";

const TaskStore = (set) => ({
  tasks: null,
  loading: false,
  error: null,
  success: false,

  //getTask
  getTask: async () => {
    try {
      const res = await client.get("/getTasks", { withCredentials: true });
      return res.data;
    } catch (err) {
      const message = err.response?.data?.message || "Somthing went wrong";
      set({ error: message });
      throw new Error(message);
    }
  },

  // createTask
  createTask: async (title, description, status, priority, dueDate) => {
    try {
      const res = await client.post(
        "/createTask",
        { title, description, status, priority, dueDate },
        { withCredentials: true }
      );
      console.log(res.data);
      set({
        task: res.data,
        loading: false,
        success: true,
      });
      return {
        success: true,
        data: res.data,
      };
    } catch (error) {
      const message = err.response?.data?.message || "Somthing went wrong";
      set({ error: message, loading: false, success: false });
    }
  },

  //toggle Task

  toggleTask: async (id, completed) => {
    const res = await client.put(
      `/toggleTask/${id}`,
      { completed },
      {
        withCredentials: true,
      }
    );
    set({ task: res.data, loading: false, success: true });
    return res.data;
  },
});

export const useTaskStore = create(
  persist(devtools(TaskStore), {
    name: "Protask",
  })
);
