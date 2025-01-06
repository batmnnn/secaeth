import { motion } from 'framer-motion'

export default function Security() {
  return (
    <section id="security" className="min-h-screen flex items-center justify-center bg-green-900 snap-start snap-always">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Security Features</h2>
        <div className="flex justify-center space-x-4 mt-8">
          {['Random', 'Decentralized', 'Temporary'].map((item, index) => (
            <motion.div
              key={item}
              className="w-24 h-24 bg-green-700 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

