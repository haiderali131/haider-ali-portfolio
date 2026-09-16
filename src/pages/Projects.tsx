import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <div className="bg-[#0C0C0C] text-white py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
          PAGE 04 • CASE STUDIES
        </span>
        <h1 className="text-4xl md:text-6xl font-black mt-4 mb-14">SOFTWARE PROJECTS</h1>

        <div className="space-y-10">

          <div className="p-8 md:p-12 bg-[#121212] border border-white/10 rounded-3xl hover:border-purple-500/40 transition-all">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">C++ • OOP • File I/O</span>
                <h2 className="text-3xl font-bold mt-3">Student Management System</h2>
              </div>
              <a href="https://github.com/haiderali131" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all">
                GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="text-white font-bold mb-2">Problem</h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  A console system to add, search, update and persist student records with GPA
                  calculation — without losing data when the program closes.
                </p>
                <h4 className="text-white font-bold mb-2">OOP Concepts Used</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  <li>Encapsulation — private student attributes</li>
                  <li>Inheritance — Student extends base Person class</li>
                  <li>File I/O — persistent storage</li>
                </ul>
              </div>
              <div className="bg-[#09090b] p-6 rounded-2xl border border-white/5 font-mono text-xs text-purple-300 h-fit">
                <p className="text-gray-500 mb-2">{'// Class structure'}</p>
                <code>
                  class Student : public Person &#123;<br />
                  &nbsp;&nbsp;string rollNo;<br />
                  &nbsp;&nbsp;float gpa;<br />
                  &nbsp;&nbsp;void calculateGPA();<br />
                  &nbsp;&nbsp;void saveToFile(ofstream &amp;out);<br />
                  &#125;;
                </code>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-[#121212] border border-white/10 rounded-3xl hover:border-pink-500/40 transition-all">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">DSA • Algorithms • Benchmarking</span>
                <h2 className="text-3xl font-bold mt-3">Time & Space Complexity Analyzer</h2>
              </div>
              <a href="https://github.com/haiderali131" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all">
                GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="text-white font-bold mb-2">Problem</h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Empirical vs theoretical performance comparison of sorting and searching
                  algorithms across input sizes from 1,000 to 1,000,000 elements.
                </p>
                <h4 className="text-white font-bold mb-2">Algorithms Tested</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  <li>QuickSort & MergeSort — O(n log n)</li>
                  <li>Binary Search — O(log n)</li>
                  <li>BubbleSort — O(n²) bottleneck</li>
                </ul>
              </div>
              <div className="bg-[#09090b] p-6 rounded-2xl border border-white/5 font-mono text-xs text-pink-300 h-fit">
                <p className="text-gray-500 mb-2">{'// Results (N = 100,000)'}</p>
                <p className="text-emerald-400">QuickSort: 12ms</p>
                <p className="text-emerald-400">MergeSort: 18ms</p>
                <p className="text-red-400">BubbleSort: 14,200ms</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
