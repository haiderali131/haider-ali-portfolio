import { Link } from 'react-router-dom';
import { Phone, MapPin, Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-14 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <h2 className="text-xl font-black text-white mb-3">HAIDER ALI</h2>
          <p className="text-sm leading-relaxed mb-4">
            Software Engineering Student @ UET Lahore. C++ | Java | Python | SQL | DSA | OOP.
          </p>
          <p className="text-xs flex items-center gap-2">
            <MapPin className="w-4 h-4 text-pink-500" /> Gohad Pur, Sialkot, Pakistan
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-white uppercase mb-4">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-purple-400">About & Academics</Link></li>
            <li><Link to="/skills" className="hover:text-purple-400">Technical Skills</Link></li>
            <li><Link to="/projects" className="hover:text-purple-400">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-purple-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-white uppercase mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-purple-400" />
              <a href="tel:03266474765" className="hover:text-white">0326 6474765</a>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-400" />
              <a href="https://github.com/haiderali131" target="_blank" rel="noreferrer" className="hover:text-white">github.com/haiderali131</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn / Haider Ali</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Haider Ali • Software Engineering @ UET Lahore
      </div>
    </footer>
  );
}
