import React, { useState } from 'react';
import { 
  Vote, 
  MessageSquare, 
  ShieldCheck, 
  BookOpen, 
  Cpu, 
  ChevronRight, 
  LayoutDashboard,
  Menu,
  X,
  Target,
  Users,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ChatBot from './components/chat/ChatBot';
import FakeNewsDetector from './components/verify/FakeNewsDetector';
import ProcessGuide from './components/education/ProcessGuide';
import ComparativeAnalysis from './components/education/ComparativeAnalysis';
import VoteSimulator from './components/simulation/VoteSimulator';
import FuturePanel from './components/innovation/FuturePanel';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'education' | 'ai' | 'simulation' | 'future'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { id: 'education', label: 'Election Guide', icon: <BookOpen size={18} /> },
    { id: 'ai', label: 'AI Workspace', icon: <MessageSquare size={18} /> },
    { id: 'simulation', label: 'Mock Voting', icon: <Vote size={18} /> },
    { id: 'future', label: 'Innovation', icon: <Cpu size={18} /> },
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'education':
        return (
          <div className="space-y-24 py-12">
            <section className="container mx-auto px-6">
               <div className="mb-12">
                 <h2 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600 mb-2">Part 1: The Lifecycle</h2>
                 <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">Election Process <br/>Education System</h1>
               </div>
               <ProcessGuide />
            </section>
            <section className="container mx-auto px-6">
               <div className="mb-12">
                 <h2 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600 mb-2">Part 2: Comparative Analysis</h2>
               </div>
               <ComparativeAnalysis />
            </section>
          </div>
        );
      case 'ai':
        return (
          <div className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                 <h2 className="text-sm font-black uppercase tracking-[0.2em] text-red-600 mb-2">Part 4: Core Engine</h2>
                 <h1 className="text-5xl font-black text-gray-900 tracking-tight leading-[0.9]">VoteSmart AI <br/>Command Center</h1>
                 <p className="text-gray-500 font-medium text-lg leading-relaxed">
                   Harnessing NLP and LLMs to answer voter queries, debunk myths, and provide non-partisan candidate insights in real-time.
                 </p>
              </div>
              <ChatBot />
            </div>
            <div className="space-y-12">
              <FakeNewsDetector />
              <div className="bg-blue-600 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                <Compass className="absolute -bottom-8 -right-8 w-40 h-40 opacity-10" />
                <h3 className="text-2xl font-bold mb-4">Candidate Comparison</h3>
                <p className="opacity-80 font-medium text-sm leading-relaxed mb-6">
                   Analyze candidate histories, criminal records, asset declarations, and vision manifestos using our data-driven insight engine.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Criminal Records', val: 'Verified by NGO ADR' },
                    { label: 'Asset Disclosures', val: 'Scraped from ECI Data' },
                    { label: 'Manifesto Analysis', val: 'NLP Semantic Mapping' }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between border-b border-white/20 pb-2">
                       <span className="text-xs font-bold uppercase">{stat.label}</span>
                       <span className="text-xs font-mono">{stat.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'simulation':
        return (
          <div className="container mx-auto px-6 py-12">
            <section className="mb-12">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-purple-600 mb-2">Virtual Polling</h2>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">Immersion Training</h1>
            </section>
            <VoteSimulator />
          </div>
        );
      case 'future':
        return (
          <div className="container mx-auto px-6 py-12">
            <section className="mb-12">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-600 mb-2">Election 2035</h2>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">The Future of Trust</h1>
            </section>
            <FuturePanel />
          </div>
        );
      default:
        return (
          <div className="space-y-24">
            {/* HERO */}
            <section className="relative pt-24 pb-12 overflow-hidden">
              <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest">
                    <Target size={14} /> Shaping Modern Democracy
                  </div>
                  <h1 className="text-7xl lg:text-9xl font-black text-gray-900 leading-[0.82] tracking-tighter">
                    VOTE <br/> <span className="text-blue-600">SMART</span>
                  </h1>
                  <p className="text-xl text-gray-500 font-medium max-w-md leading-relaxed">
                    The world's first AI-driven election education system designed to improve voter awareness, trust, and participation.
                  </p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setActiveView('ai')}
                      className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all flex items-center gap-3 shadow-xl"
                    >
                      Explore AI Tools <ChevronRight size={18} />
                    </button>
                    <button 
                      onClick={() => setActiveView('education')}
                      className="px-8 py-4 bg-white text-gray-900 border border-gray-100 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-sm"
                    >
                      Start Learning
                    </button>
                  </div>
                </motion.div>
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 blur-[120px] rounded-full -z-10" />
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-4 pt-12">
                       <div className="bg-white p-6 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-50">
                         <Users className="text-blue-600 mb-4" size={32} />
                         <p className="text-2xl font-black">940M</p>
                         <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Potential Voters (India)</p>
                       </div>
                       <div className="bg-gray-900 text-white p-6 rounded-[2.5rem] shadow-xl">
                         <ShieldCheck className="text-blue-400 mb-4" size={32} />
                         <p className="text-2xl font-black">100%</p>
                         <p className="text-xs font-bold text-blue-300/50 uppercase tracking-widest">Auditable Tech</p>
                       </div>
                     </div>
                     <div className="space-y-4">
                       <div className="bg-blue-600 text-white p-6 rounded-[2.5rem] shadow-xl">
                         <Cpu className="text-white mb-4" size={32} />
                         <p className="text-2xl font-black">AI</p>
                         <p className="text-xs font-bold text-blue-100/50 uppercase tracking-widest">Verification Engine</p>
                       </div>
                       <div className="bg-white p-6 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-50">
                         <Vote className="text-gray-900 mb-4" size={32} />
                         <p className="text-2xl font-black">MOCK</p>
                         <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Election Simulator</p>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            </section>

            {/* PROBLEM BREAKDOWN SECTION */}
            <section className="bg-gray-50 py-24 border-y border-gray-100">
               <div className="container mx-auto px-6">
                  <div className="text-center mb-16 space-y-4">
                    <h2 className="text-sm font-black uppercase tracking-[0.2em] text-red-600">Part 3: Challenges</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">The Democratic Debt</h3>
                    <p className="text-gray-500 font-medium max-w-2xl mx-auto">Modern elections face systemic threats that require digital solutions.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { title: "Fake News & Misinformation", desc: "Coordinated digital attacks designed to polarize voter sentiment and subvert factual discourse.", icon: <ShieldCheck className="text-red-500" /> },
                      { title: "Low Youth Participation", desc: "Disconnected interface between traditional political processes and digital-native generations.", icon: <Users className="text-blue-500" /> },
                      { title: "Lack of Civic Education", desc: "Structural decay in basic understanding of the electoral lifecycle and governance mechanics.", icon: <BookOpen className="text-emerald-500" /> }
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 space-y-4 group hover:shadow-xl transition-all">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
                        <h4 className="text-xl font-black text-gray-900">{item.title}</h4>
                        <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-600">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setActiveView('home')}
          >
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
              <Vote size={24} />
            </div>
            <span className="text-xl font-black tracking-tighter">VOTE<span className="text-blue-600">SMART</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id as any)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                  activeView === item.id 
                    ? 'bg-gray-900 text-white shadow-lg' 
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </div>

          <button 
            className="md:hidden p-2 text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActiveView(item.id as any); setMobileMenuOpen(false); }}
                  className="w-full p-6 text-left border border-gray-100 rounded-3xl flex items-center gap-4 transition-colors hover:bg-blue-50"
                >
                  <div className="bg-gray-100 p-2 rounded-lg">{item.icon}</div>
                  <span className="text-lg font-bold">{item.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Vote size={18} />
              </div>
              <span className="text-lg font-black tracking-tighter uppercase italic">VoteSmart AI</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm font-medium leading-relaxed">
              Advancing democratic integrity through artificial intelligence and civic education. Built for the next billion voters.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-blue-500">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-medium">
              <li className="hover:text-white cursor-pointer">Election Commission Data</li>
              <li className="hover:text-white cursor-pointer">NGO ADR Reports</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">API Documentation</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-blue-500">Contact</h4>
            <p className="text-sm text-gray-400 font-medium leading-relaxed">
              innovation@votesmart.ai<br/>
              Civic Tower, New Delhi
            </p>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] uppercase font-black tracking-widest text-gray-600">
           <span>© 2026 VoteSmart AI Foundation</span>
           <span>Designed for Global Impact</span>
        </div>
      </footer>
    </div>
  );
}
