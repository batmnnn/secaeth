import { motion } from 'framer-motion'

export default function Future() {
  return (
    <section id="future" className="min-h-screen flex items-center justify-center bg-purple-900 snap-start snap-always">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-4">The Future of Authentication</h2>
        <p className="text-xl">Secure. Global. Revolutionary.</p>
        <motion.div
          className="w-64 h-1 bg-purple-500 mt-8 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 256 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}

