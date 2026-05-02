import React, { useState } from 'react';
import { ELECTION_PHASES } from '../../constants';
import { CheckCircle2, ChevronRight, Info, AlertCircle, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProcessGuide() {
  const [activeTab, setActiveTab] = useState(ELECTION_PHASES[0].id);

  const activePhase = ELECTION_PHASES.find(p => p.id === activeTab)!;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {ELECTION_PHASES.map((phase) => (
          <button
            key={phase.id}
            onClick={() => setActiveTab(phase.id)}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
              activeTab === phase.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                : 'bg-white border border-gray-100 text-gray-500 hover:bg-gray-50'
            }`}
          >
            {phase.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <h3 className="text-3xl font-black text-gray-900 tracking-tight">{activePhase.title}</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">{activePhase.description}</p>
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="flex gap-4">
                  <Info className="text-blue-600 shrink-0" />
                  <p className="text-sm text-blue-800 font-medium leading-relaxed">{activePhase.details}</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-gray-400" size={20} />
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Key Stakeholders</h4>
                </div>
                <ul className="space-y-3">
                  {activePhase.stakeholders.map((s, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="text-gray-400" size={20} />
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Real-world Issues</h4>
                </div>
                <ul className="space-y-3">
                  {activePhase.issues.map((issue, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-red-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest opacity-50">Quick Guide</h4>
              <div className="space-y-8">
                {ELECTION_PHASES.map((p, idx) => (
                  <div key={p.id} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                        activeTab === p.id 
                          ? 'bg-blue-600 border-blue-600 text-white scale-110 shadow-lg shadow-blue-500/40' 
                          : 'border-white/20 text-white/40'
                      }`}>
                        {idx + 1}
                      </div>
                      {idx !== ELECTION_PHASES.length - 1 && (
                        <div className="w-0.5 h-full bg-white/10 my-1" />
                      )}
                    </div>
                    <div className="pt-2">
                       <p className={`text-sm font-bold transition-all ${activeTab === p.id ? 'text-white translate-x-2' : 'text-white/40'}`}>
                         {p.title}
                       </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
