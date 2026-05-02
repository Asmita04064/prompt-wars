import React from 'react';
import { COMPARISON_DATA } from '../../constants';
import { Globe, Shield, Zap, Heart } from 'lucide-react';

export default function ComparativeAnalysis() {
  const metrics = [
    { key: 'transparency', label: 'Transparency', icon: <Shield className="text-emerald-500" /> },
    { key: 'efficiency', label: 'Efficiency', icon: <Zap className="text-amber-500" /> },
    { key: 'accessibility', label: 'Accessibility', icon: <Globe className="text-blue-500" /> },
    { key: 'trust', label: 'Trustworthiness', icon: <Heart className="text-rose-500" /> },
  ] as const;

  return (
    <div className="grid gap-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">Global Election Comparison</h2>
        <p className="text-gray-500 font-medium">Analyzing the structural differences between the two largest democracies: India & the United States.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 space-y-12">
          <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
             <img src="https://flagcdn.com/in.svg" className="w-12 h-12 rounded-full object-cover border border-gray-100" alt="India" />
             <div>
               <h3 className="text-2xl font-bold text-gray-900">India</h3>
               <p className="text-xs font-black uppercase tracking-widest text-gray-400">Largest Democracy</p>
             </div>
          </div>
          <div className="space-y-8">
            {metrics.map((m) => (
              <div key={m.key} className="space-y-2 group">
                <div className="flex items-center gap-3">
                  {m.icon}
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400">{m.label}</span>
                </div>
                <p className="text-gray-800 font-bold pl-8 group-hover:text-blue-600 transition-colors">
                  {(COMPARISON_DATA as any)[m.key].india}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 space-y-12">
          <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
             <img src="https://flagcdn.com/us.svg" className="w-12 h-12 rounded-full object-cover border border-gray-100" alt="USA" />
             <div>
               <h3 className="text-2xl font-bold text-gray-900">USA</h3>
               <p className="text-xs font-black uppercase tracking-widest text-gray-400">Oldest Democracy</p>
             </div>
          </div>
          <div className="space-y-8">
            {metrics.map((m) => (
              <div key={m.key} className="space-y-2 group">
                <div className="flex items-center gap-3">
                  {m.icon}
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400">{m.label}</span>
                </div>
                <p className="text-gray-800 font-bold pl-8 group-hover:text-blue-600 transition-colors">
                  {(COMPARISON_DATA as any)[m.key].us}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 text-center">
        <h4 className="text-xl font-bold text-gray-900 mb-2">Verdict: Which is Better?</h4>
        <p className="text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
          While the **US system** excels in state-level autonomy and decentralized resilience, the **Indian system** (under the ECI) is far more efficient in ensuring accessibility in remote areas and maintaining a standardized, transparent technological floor (EVM-VVPAT) for over 900 million voters.
        </p>
      </div>
    </div>
  );
}
