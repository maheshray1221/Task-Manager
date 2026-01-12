import React, { useState } from "react";
import { useAuthStore } from "../../Store/AuthStore";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formState, setFormState] = useState(0);
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  const { register, login } = useAuthStore();

  const handleAuth = async (e) => {
    e.preventDefault();
    if (formState === 0) {
      try {
        const result = await register(username, email, password);
        console.log("result ->", result);
        if (!result?.success) {
          throw new Error(result?.msg || "Register failed");
        }
        setUsername("");
        setEmail("");
        setPassword("");
        setFormState(1);
        toast.success("User register successfully");
      } catch (error) {
        toast.error(error.msg || "User all ready exist");
      }
    } else if (formState === 1) {
      try {
        const result = await login(email, password);
        if (!result?.success) {
          throw new Error(result.msg || "User Credential Wrong");
        }
        if (result?.success) {
          navigate("/protask");
        } else {
          setError("login failed");
        }
        console.log("result ->", result);
        toast.success("User logged In successfully");
      } catch (error) {
        toast.error(error.msg || "User Credential Wrong");
      }
    }
  };
  return (
    <div className=" lg:h-140 h-104 w-full mt-30 flex justify-center lg:mt-25 md:mt-60 md:h-100   ">
      <ToastContainer position="bottom-left" autoClose={3000} />
      <div
        className="hidden md:block bg-[#1082ff] text-[#dffeff] lg:w-[25%] lg:rounded-tl-3xl
      lg:border-2 border-sky-300 lg:rounded-bl-3xl lg:shadow-[0_10px_20px_-7px_rgba(0,0,0,0.6)]
      md:w-[30%] md:rounded-tl-2xl md:border-2 md:rounded-bl-2xl md:shadow-[0_10px_20px_-8px_rgba(0,0,0,0.4)]"
      >
        <h1
          className="text-center lg:mt-55 lg:text-4xl lg:transition-transform 
        lg:duration-500 lg:hover:scale-106 md:mt-40 md:text-3xl "
        >
          ProTasks
        </h1>
        <div className="flex lg:gap-15 lg:ml-14 lg:mt-8 md:gap-7 md:ml-4.5 md:mt-5">
          <button
            onClick={() => setFormState(0)}
            className={`${
              formState === 0
                ? "px-2 py-1.5 lg:px-5 lg:py-2.5 rounded-md border-2 border-sky-300 bg-white text-[#2563eb] transition-transform duration-500 hover:scale-107  lg:hover:bg-blue-50 md:px-4 md:py-2"
                : "px-2 py-1.5 lg:px-5 lg:py-2.5 rounded-md border border-white text-white bg-transparent lg:hover:bg-white/10 transition-transform duration-500 hover:scale-107 md:px-4 md:py-2"
            }`}
          >
            Register
          </button>
          <button
            onClick={() => setFormState(1)}
            className={`${
              formState === 1
                ? "px-2 py-1.5 lg:px-5 lg:py-2.5 rounded-md border-2 border-sky-300 bg-white text-[#2563eb] transition-transform duration-500 hover:scale-107  lg:hover:bg-blue-50 md:px-4 md:py-2"
                : "px-2 py-1.5 lg:px-5 lg:py-2.5 rounded-md border border-white text-white bg-transparent lg:hover:bg-white/10 transition-transform duration-500 hover:scale-107 md:px-4 md:py-2"
            }`}
          >
            LogIn
          </button>
        </div>
      </div>
      <div
        className="w-[95%]  rounded-md border lg:w-[40%] lg:rounded-tr-3xl lg:rounded-br-3xl lg:border-2
         border-sky-300 bg-white lg:shadow-[0_10px_20px_-7px_rgba(0,0,0,0.6)]
         md:w-[40%] md:rounded-tr-2xl md:rounded-br-2xl md:border-2 md:shadow-[0_10px_20px_-8px_rgba(0,0,0,0.4)]"
      >
        <div className=" mt-5 ml-7 lg:mt-20 lg:ml-20 md:mt-10 md:ml-7">
          <h2
            className="text-lg ml-15 lg:ml-0 md:ml-0 lg:text-3xl font-bold lg:leading-12 text-slate-800
          md:text-2xl md:leading-8 "
          >
            {formState === 1 ? "Login to your Account" : "Create an Account"}
          </h2>
          <p className="text-sm lg:text-lg text-slate-600 md:text-sm">
            Effortlessly manage your projects and tasks
          </p>
        </div>
        <div
          className="border mt-6 w-[93%] h-[56%] ml-3 rounded-sm border-slate-400  lg:ml-20 lg:w-[75%] lg:h-[48%] 
          lg:mt-7 lg:rounded-2xl transition-transform duration-500 
          md:ml-7 md:w-[80%] md:h-[53%] md:mt-5 md:rounded-md  "
        >
          <form
            onSubmit={handleAuth}
            className="flex flex-col lg:gap-3 lg:ml-10 md:ml-6 md:gap-2.4 gap-2 ml-5 mt-3 lg:mt-2 md:mt-1"
          >
            {formState === 0 && (
              <>
                <label
                  htmlFor=""
                  className="text-sm lg:text-lg md:text-base text-slate-600"
                >
                  UserName
                </label>
                <div className="border border-gray-500 w-[80%] lg:w-[56%] md:w-[73%] rounded-md">
                  <input
                    className="w-full text-[0.90rem] lg:text-lg md:text-sm outline-none text-slate-800"
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </>
            )}

            <label
              htmlFor=""
              className="text-sm lg:text-lg md:text-base text-slate-600"
            >
              Email
            </label>
            <div className="border border-gray-500 w-[80%] lg:w-[56%] md:w-[73%] rounded-md">
              <input
                className="w-full text-[0.90rem]  lg:text-lg md:text-sm outline-none text-slate-800"
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <label
              htmlFor=""
              className="text-sm lg:text-lg md:text-base text-slate-600"
            >
              Password
            </label>
            <div className="border border-gray-500 w-[80%] lg:w-[56%] md:w-[73%] rounded-md">
              <input
                className="w-full text-[0.90rem] lg:text-lg md:text-sm outline-none text-slate-800"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="relative lg:top-0 lg:left-0 mt-7 gap-30 ml-15 text-40 lg:ml-0 lg:mt-10 lg:text-70  md:text-60 md:mt-6  md:ml-7">
              <button
                className="px-20 py-1.5 lg:px-40 lg:py-2.5 rounded-md border-2 border-sky-300 
             bg-[#1082ff] text-white transition-transform duration-500 
             lg:hover:bg-blue-700 md:px-23 md:py-2 "
              >
                {formState === 1 ? "LogIn" : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
