"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function AnimatedSidebar({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#181824] via-[#23234a] to-[#23234a] shadow-2xl z-50 flex flex-col border-r-4 border-blue-900"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } }}
          exit={{ x: -300, opacity: 0, transition: { type: 'spring', stiffness: 120, damping: 16 } }}
        >
          <button
            className="self-end m-4 text-white text-2xl hover:text-blue-300"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            &times;
          </button>
          <div className="flex-1 p-6 overflow-y-auto">
            {children}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
