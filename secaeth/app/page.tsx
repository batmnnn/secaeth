'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [grid, setGrid] = useState(Array(16).fill(false))
  const [showComingSoon, setShowComingSoon] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(prevGrid => prevGrid.map(() => Math.random() > 0.5))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComingSoon(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold mb-8">SecÆth</h1>
      <div className="grid grid-cols-4 gap-2 mb-8">
        {grid.map((active, index) => (
          <motion.div
            key={index}
            className={`w-16 h-16 rounded-full ${active ? 'bg-blue-500' : 'bg-gray-700'}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: active ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
      <div className="text-center max-w-md">
        <p className="text-xl mb-4">Satellite-based authentication</p>
        <p className="text-sm opacity-70">Secure. Global. Revolutionary.</p>
      </div>
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-2xl font-bold text-blue-400"
          >
            Coming Soon
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="mt-12 relative w-64 h-1 bg-blue-900"
        initial={{ width: 0 }}
        animate={{ width: 256 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute top-0 left-0 h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </main>
  )
}

