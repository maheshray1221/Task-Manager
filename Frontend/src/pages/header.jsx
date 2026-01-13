import React, { useEffect, useState } from "react";
import {} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        className="flex justify-between w-full h-15 lg:h-[4vw] bg-[#f0f9ff] fixed top-0 left-0 z-999"
      >
        <h2 className="pl-2 font-bold lg:leading-10 lg:ml-10 text-2xl lg:text-3xl mt-2.5 text-slate-800">
          ProTasks
        </h2>
        <div className=" lg:mr-10 mt-2.5">
          <button
            onClick={() => navigate("/register")}
            className=" px-3.5 py-1.5 rounded-full  lg:px-4 lg:py-2 right-4 mr-6 border border-slate-700 text-slate-700  lg:bg-white
        lg:transition-transform lg:duration-500 lg:hover:scale-105 lg:hover:bg-[#f0daef]"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/register")}
            className="rounded-full mr-1.5 px-3.5 py-1.5 lg:px-4 lg:py-2 right-4 border border-blue-600
        lg:transition-transform lg:duration-500 lg:hover:scale-105 text-blue-600 lg:hover:bg-blue-500
         lg:hover:text-white"
          >
            Sign Up
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
