import { Phone, MapPin, Globe, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[#0C0C0C] text-white py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
          PAGE 05 • CONTACT
        </span>
        <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4">GET IN TOUCH</h1>
        <p className="text-gray-400 text-lg max-w-2xl mb-14">
          Open for internships, freelance work and software engineering collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="p-8 bg-[#121212] border border-white/10 rounded-3xl space-y-6 h-fit">
            <h2 className="text-2xl font-bold">Contact Details</h2>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600/20 border border-purple-500/30 rounded-2xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">Phone</p>
                <a href="tel:03266474765" className="text-lg font-bold hover:text-purple-400">0326 6474765</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-600/20 border border-pink-500/30 rounded-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">Location</p>
                <p className="font-bold">Gohad Pur, Sialkot, Pakistan</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-600/20 border border-indigo-500/30 rounded-2xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">GitHub</p>
                <a href="https://github.com/haiderali131" target="_blank" rel="noreferrer" className="font-bold hover:text-indigo-400">github.com/haiderali131</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-600/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">LinkedIn</p>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-bold hover:text-emerald-400">linkedin.com / Haider Ali</a>
              </div>
            </div>
          </div>

          <div className="p-8 bg-[#121212] border border-white/10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500" />
              <input type="text" placeholder="Your email or phone" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500" />
              <textarea rows={5} placeholder="Your message..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500"></textarea>
              <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
