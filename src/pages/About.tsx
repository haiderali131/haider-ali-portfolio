import { GraduationCap, BookOpen, MapPin, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#0C0C0C] text-white py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
          PAGE 02 • ABOUT & ACADEMICS
        </span>
        <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4">ABOUT HAIDER ALI</h1>
        <p className="text-gray-400 text-lg max-w-2xl mb-14">
          Software Engineering student driven by algorithms, clean architecture and databases.
        </p>

        <div className="p-8 md:p-12 bg-[#121212] border border-purple-500/30 rounded-3xl mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-purple-600/20 border border-purple-500/40 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">University of Engineering and Technology (UET), Lahore</h2>
              <p className="text-purple-300 font-medium">BS Software Engineering</p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            Studying core software engineering: computer systems, algorithm design, object-oriented
            paradigms and database theory at one of Pakistan's top engineering universities.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400 border-t border-white/10 pt-6">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-pink-400" /> Gohad Pur, Sialkot, Pakistan</span>
            <span className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-purple-400" /> Dept. of Software Engineering</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Relevant Coursework</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#121212] border border-white/10 rounded-2xl">
            <h4 className="text-lg font-bold text-purple-400 mb-3">Core CS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Data Structures & Algorithms</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Object-Oriented Programming</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Discrete Mathematics</li>
            </ul>
          </div>
          <div className="p-6 bg-[#121212] border border-white/10 rounded-2xl">
            <h4 className="text-lg font-bold text-pink-400 mb-3">Software Systems</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-400" /> Database Management Systems</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-400" /> Software Requirements Eng.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-400" /> Operating Systems</li>
            </ul>
          </div>
          <div className="p-6 bg-[#121212] border border-white/10 rounded-2xl">
            <h4 className="text-lg font-bold text-indigo-400 mb-3">Development</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Web Development (React)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Git & GitHub</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Software Design Patterns</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
