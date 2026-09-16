import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Code2 } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const active = (path: string) =>
    location.pathname === path ? 'text-purple-400 font-bold' : 'text-gray-400 hover:text-white';

  return (
    <nav className="sticky top-0 z-50 bg-[#0C0C0C]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-wider text-white">HAIDER ALI</h1>
            <p className="text-[11px] text-purple-400 font-mono flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5" /> UET LAHORE
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className={active('/')}>Home</Link>
          <Link to="/about" className={active('/about')}>About</Link>
          <Link to="/skills" className={active('/skills')}>Skills</Link>
          <Link to="/projects" className={active('/projects')}>Projects</Link>
          <Link to="/contact" className={active('/contact')}>Contact</Link>
        </div>

        <Link to="/contact" className="text-xs md:text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-all">
          Hire Me
        </Link>
      </div>
    </nav>
  );
}
