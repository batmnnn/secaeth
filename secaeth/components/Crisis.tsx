import { motion } from 'framer-motion'

export default function Crisis() {
  return (
    <section id="crisis" className="min-h-screen flex items-center justify-center bg-red-900 snap-start snap-always">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Authentication Crisis</h2>
        <p className="text-xl">300% increase in breaches</p>
        <motion.div
          className="w-64 h-64 bg-red-500 rounded-full mt-8 mx-auto"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  )
}

