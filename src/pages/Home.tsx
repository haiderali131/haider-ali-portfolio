import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, Cpu, Database, GraduationCap, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 px-4 py-2 rounded-full text-purple-300 text-xs md:text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            Software Engineering Student @ UET Lahore 🎓
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-8">
            Engineering Systems with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
              Precision & Speed.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            Hi, I'm <strong className="text-white">Haider Ali</strong> based in Gohad Pur, Sialkot. I focus on core computer science engineering: <strong className="text-white">Data Structures (DSA)</strong>, <strong className="text-white">Object-Oriented Design (OOP)</strong>, <strong className="text-white">Relational SQL</strong>, and modern web applications.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all"
            >
              Explore Projects
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <Link 
              to="/about"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 rounded-full text-gray-300 hover:text-white transition-all font-medium"
            >
              Academic Background
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#121212] border border-white/10 rounded-3xl">
              <Cpu className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3">DSA & Problem Solving</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Writing optimal code focused on Time Complexity (O(n log n)) and Space Complexity trade-offs.
              </p>
            </div>

            <div className="p-8 bg-[#121212] border border-white/10 rounded-3xl">
              <Database className="w-10 h-10 text-pink-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Database Architecture</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Designing normalized Relational Schemas, SQL joins, indexes, and DBMS concepts.
              </p>
            </div>

            <div className="p-8 bg-[#121212] border border-white/10 rounded-3xl">
              <Code2 className="w-10 h-10 text-indigo-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Full-Stack Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building fast web systems using modern React, Vite, TypeScript, and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
