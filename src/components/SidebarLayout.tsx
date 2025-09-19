"use client";
import React, { useState } from "react";
import AnimatedSidebar from "@/components/AnimatedSidebar";
import MenuIcon from "@/components/MenuIcon";

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen">
      <button
        className="fixed top-4 left-4 z-50 bg-[#181824] text-white p-2 rounded-full shadow hover:bg-[#23234a] transition flex items-center justify-center border border-blue-900"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <MenuIcon size={28} className="" />
      </button>
      <AnimatedSidebar open={open} onClose={() => setOpen(false)}>
        <nav className="flex flex-col gap-4">
          <a href="/" className="text-white hover:text-blue-300">Dashboard</a>
          <a href="/posts" className="text-white hover:text-blue-300">Posts</a>
          <a href="/users" className="text-white hover:text-blue-300">Users</a>
          <a href="/profile" className="text-white hover:text-blue-300">Profile</a>
        </nav>
      </AnimatedSidebar>
      <div className="pl-0 md:pl-0">
        {children}
      </div>
    </div>
  );
}
