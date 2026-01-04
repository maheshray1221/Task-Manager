import React from "react";

export default function Footer() {
  return (
    <div
      className="w-full h-20 lg:h-35 md:h-25 lg:pt-6 md:pt-5 pt-3 bg-[#202938] text-sm text-[#fdfdfd] 
        text-center md:text-base lg:text-lg"
    >
      <p>&copy;2025 ProTasks.All rights reserved</p>
      <div className="flex justify-evenly mt-2 lg:flex-col lg:inline  ">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}
