"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function UserModal({ user, onClose }: { user: any; onClose: () => void }) {
  if (!user) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white text-gray-900 rounded-xl shadow-xl p-8 max-w-md w-full relative"
          initial={{ scale: 0.6, y: 200, opacity: 0 }}
          animate={{ scale: 1.08, y: -16, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 10, mass: 0.7, bounce: 0.7 } }}
          exit={{ scale: 0.6, y: 200, opacity: 0, transition: { type: 'spring', stiffness: 120, damping: 10, mass: 0.7, bounce: 0.7 } }}
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
          <h2 className="text-xl font-bold mb-2">{user.name}</h2>
          <div className="mb-2"><span className="font-semibold">Email:</span> {user.email}</div>
          <div className="mb-2"><span className="font-semibold">Username:</span> {user.username}</div>
          <div className="mb-2"><span className="font-semibold">Phone:</span> {user.phone}</div>
          <div className="mb-2"><span className="font-semibold">Website:</span> {user.website}</div>
          <div className="mb-2"><span className="font-semibold">Company:</span> {user.company?.name}</div>
          <div className="mb-2"><span className="font-semibold">Address:</span> {user.address?.suite}, {user.address?.street}, {user.address?.city}, {user.address?.zipcode}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
