import { motion } from 'framer-motion'

export default function Solution() {
  return (
    <section id="solution" className="min-h-screen flex items-center justify-center bg-blue-900 snap-start snap-always">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-4">SecÆth Solution</h2>
        <p className="text-xl">Satellite-based decentralized authentication</p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          {['LEO Mesh', '4x4 Grid', 'Real-Time', 'Global'].map((item, index) => (
            <motion.div
              key={item}
              className="bg-blue-700 p-4 rounded-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

