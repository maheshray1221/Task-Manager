import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "../components/Sidebar";
export default function Layout() {
  return (
    <div>
      <div className="flex flex-1 ">
        <Sidebar />
        <main className="flex-1 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
