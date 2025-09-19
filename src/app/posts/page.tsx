"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Card from '@/components/Card';
import useFetch from '@/hooks/useFetch';

export default function PostsPage() {
  const [simulateError, setSimulateError] = useState(false);
  const { data: posts, loading, error } = useFetch(
    simulateError
      ? 'https://jsonplaceholder.typicode.com/invalid-posts'
      : 'https://jsonplaceholder.typicode.com/posts'
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1C1C3C] via-[#2D2D6D] to-[#3C3C9C] p-6 md:p-12 text-white">
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Posts</h1>
        <button
          className="mb-6 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded shadow transition"
          onClick={() => setSimulateError((e) => !e)}
        >
          {simulateError ? 'Show Real Posts' : 'Simulate Error'}
        </button>
        {loading && (
          <div className="mb-4 flex items-center justify-center">
            <span className="inline-block w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mr-2"></span>
            <span>Loading posts...</span>
          </div>
        )}
        {error && <div className="mb-4 text-red-400 font-semibold">Failed to load posts: {error}</div>}
        {!loading && !error && posts && (
          <motion.div
            className="grid gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
              hidden: {},
            }}
          >
            {posts.map((post: any) => (
              <motion.div
                key={post.id}
                variants={{
                  hidden: { opacity: 0, y: 80, scale: 0.85 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 80,
                      damping: 8,
                      mass: 0.7,
                      bounce: 0.6
                    }
                  },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href={`/posts/${post.id}`} className="block">
                  <Card title={post.title} body={post.body} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </main>
  );
}
