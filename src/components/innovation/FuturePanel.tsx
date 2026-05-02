import React from 'react';
import { Database, ShieldAlert, Fingerprint, Lock, Cpu, Globe } from 'lucide-react';

export default function FuturePanel() {
  const innovations = [
    {
      title: "Blockchain Voting",
      icon: <Database className="text-indigo-400" />,
      desc: "Immutable ledgers to eliminate counting disputes and ensure permanent records of every vote without compromising anonymity.",
      status: "Prototypes Active"
    },
    {
      title: "AI Fraud Detection",
      icon: <ShieldAlert className="text-pink-400" />,
      desc: "Real-time anomaly detection in voter turnout data and social media sentiment to flag coordinated misinformation campaigns.",
      status: "In Development"
    },
    {
      title: "Biometric Identity",
      icon: <Fingerprint className="text-cyan-400" />,
      desc: "Zero-Knowledge Proof (ZKP) based digital IDs that allow remote voting while mathematically proving user identity without storing PII.",
      status: "Concept Stage"
    }
  ];

  return (
    <div className="bg-black text-white rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
      {/* Cyberpunk accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/10 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-black uppercase tracking-widest">
            Future Tech 2035
          </div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tight leading-[0.9]">Designing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">Un-Riggarble</span> Election.</h2>
          <p className="text-gray-400 text-xl font-medium max-w-lg leading-relaxed">
            The next generation of democracy won't rely on trust—it will rely on mathematical proof. We are building the infrastructure for a transparent future.
          </p>
          
          <div className="flex gap-12">
            <div>
              <p className="text-3xl font-black text-white">0%</p>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-1">Expected Fraud</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">100%</p>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-1">Auditability</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {innovations.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-black rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{item.status}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
