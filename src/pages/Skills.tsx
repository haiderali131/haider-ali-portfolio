import { Code2, Cpu, Database, Terminal, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  return (
    <div className="bg-[#0C0C0C] text-white py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
          PAGE 03 • TECH STACK
        </span>
        <h1 className="text-4xl md:text-6xl font-black mt-4 mb-14">TECHNICAL SKILLS</h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-8 bg-[#121212] border border-white/10 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold">Languages</h3>
            </div>
            {[
              ['C++ (STL, Pointers, Memory)', '90%', 'bg-purple-500', 'w-[90%]'],
              ['Java (OOP, Collections)', '80%', 'bg-pink-500', 'w-[80%]'],
              ['SQL (Joins, Schemas)', '85%', 'bg-emerald-500', 'w-[85%]'],
              ['Python (Scripting)', '75%', 'bg-indigo-500', 'w-[75%]'],
            ].map(([name, pct, color, width]) => (
              <div key={name} className="mb-5">
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span>{name}</span><span className="text-gray-400">{pct}</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className={`${color} h-full ${width}`}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-[#121212] border border-white/10 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-8 h-8 text-pink-400" />
              <h3 className="text-2xl font-bold">Core Computer Science</h3>
            </div>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="p-3.5 bg-white/5 rounded-2xl">
                <p className="font-bold text-white flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-400" /> Data Structures</p>
                <p className="text-gray-400 text-xs mt-1">Arrays, Linked Lists, Stacks, Queues, Trees, Hash Tables</p>
              </li>
              <li className="p-3.5 bg-white/5 rounded-2xl">
                <p className="font-bold text-white flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-400" /> OOP</p>
                <p className="text-gray-400 text-xs mt-1">Encapsulation, Abstraction, Inheritance, Polymorphism</p>
              </li>
              <li className="p-3.5 bg-white/5 rounded-2xl">
                <p className="font-bold text-white flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-400" /> Algorithm Analysis</p>
                <p className="text-gray-400 text-xs mt-1">Big-O notation, Sorting & Searching</p>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-[#121212] border border-white/10 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-indigo-400" />
              <h3 className="text-2xl font-bold">Databases</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> SQL: Joins, Subqueries, Aggregations, Indexes</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Normalization (1NF, 2NF, 3NF)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> ER Diagrams & Schema Design</li>
            </ul>
          </div>

          <div className="p-8 bg-[#121212] border border-white/10 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-8 h-8 text-emerald-400" />
              <h3 className="text-2xl font-bold">Web & Tools</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> React, TypeScript, Vite, Tailwind CSS</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Git & GitHub (github.com/haiderali131)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> VS Code, CLion, Linux Terminal</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
