import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { client } from "../Utils/client";

const AuthStore = (set) => ({
  user: null,
  token: null,
  isAuth: false,
  loading: false,
  error: null,

  // register user
  register: async (username, email, password) => {
    try {
      const res = await client.post(
        "/registerUser",
        {
          username,
          email,
          password,
        },
        { withCredentials: true }
      );
      if (res.status === 200) {
        console.log("createUser", res);
      }
      set({
        user: res.data,
        loading: false,
      });
      return res.data;
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // login
  login: async (email, password) => {
    try {
      const res = await client.post(
        "/loginUser",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      if (res.status === 200) {
        console.log("Login data", res.data);
      }
      set({
        user: res.data,
        token: res.data.accessToken,
        isAuth: true,
        loading: false,
      });
      return res.data;
    } catch (error) {
      set({ error: error.response?.data?.message, loading: false });
    }
  },
});

export const useAuthStore = create(
  persist(devtools(AuthStore), {
    name: "auth",
  })
);
