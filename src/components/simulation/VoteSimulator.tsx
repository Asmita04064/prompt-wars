import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Fingerprint, CheckCircle2, ChevronRight, UserCheck } from 'lucide-react';

export default function VoteSimulator() {
  const [step, setStep] = useState(0);
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);

  const steps = [
    { title: "Voter Identification", icon: <UserCheck />, description: "Presenting identification to the polling officer." },
    { title: "Finger Marking", icon: <Fingerprint />, description: "Application of indelible ink on the left index finger." },
    { title: "EVM Unit", icon: <ChevronRight />, description: "Select your candidate on the Control Unit." },
    { title: "VVPAT Verification", icon: <CheckCircle2 />, description: "Verify the paper slip behind the glass screen." }
  ];

  return (
    <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -translate-y-1/2" />
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black tracking-tight">Mock Voting Simulator</h2>
          <p className="text-gray-400 font-medium text-lg">Experience the polling booth process from start to finish.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s, idx) => (
            <div key={idx} className={`p-4 rounded-3xl border transition-all ${
              step === idx ? 'bg-blue-600 border-blue-500 shadow-xl shadow-blue-600/40 translate-y-[-4px]' : 'bg-gray-800/50 border-gray-700 opacity-50'
            }`}>
              <div className="mb-2">{s.icon}</div>
              <p className="text-xs font-black uppercase tracking-widest">{s.title}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] min-h-[400px] flex items-center justify-center p-8">
           <AnimatePresence mode="wait">
             {step === 0 && (
               <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-8">
                 <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto ring-4 ring-blue-600/20">
                   <UserCheck size={40} className="text-blue-500" />
                 </div>
                 <h3 className="text-2xl font-bold">Step 1: Identity Verified</h3>
                 <p className="text-gray-400 max-w-md mx-auto">The Polling Officer has verified your name on the electoral roll. Your ID is in order.</p>
                 <button onClick={() => setStep(1)} className="px-12 py-4 bg-blue-600 rounded-2xl font-bold hover:bg-blue-700 transition-all">Proceed to Marking</button>
               </motion.div>
             )}

             {step === 1 && (
               <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-8">
                 <div className="w-24 h-24 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto ring-4 ring-purple-600/20">
                   <Fingerprint size={40} className="text-purple-500" />
                 </div>
                 <h3 className="text-2xl font-bold">Step 2: Marks for Democracy</h3>
                 <p className="text-gray-400 max-w-md mx-auto">Indelible ink is applied to your finger. You are now officially recognized as having arrived to vote.</p>
                 <button onClick={() => setStep(2)} className="px-12 py-4 bg-blue-600 rounded-2xl font-bold hover:bg-blue-700 transition-all">Move to EVM</button>
               </motion.div>
             )}

             {step === 2 && (
               <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-md space-y-6">
                 <h3 className="text-xl font-bold text-center mb-8">Select Your Candidate</h3>
                 <div className="space-y-3">
                   {['Candidate A (Eco Party)', 'Candidate B (Unity Party)', 'Candidate C (Progressive)'].map((c) => (
                     <button
                       key={c}
                       onClick={() => { setSelectedCandidate(c); setStep(3); }}
                       className="w-full p-6 bg-gray-800 hover:bg-blue-600/20 border border-gray-700 rounded-3xl text-left flex items-center justify-between group transition-all"
                     >
                       <span className="font-bold">{c}</span>
                       <div className="w-6 h-6 rounded-full border-2 border-gray-600 group-hover:border-blue-500" />
                     </button>
                   ))}
                 </div>
               </motion.div>
             )}

             {step === 3 && (
               <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-8">
                 <div className="w-32 h-44 bg-gray-800 rounded-xl border-4 border-gray-700 mx-auto overflow-hidden flex flex-col items-center justify-center p-4">
                    <div className="w-full h-24 bg-white/10 rounded-lg flex items-center justify-center">
                       <p className="text-[10px] font-mono text-blue-400">VVPAT SLIP</p>
                    </div>
                    <div className="mt-4 text-[8px] font-mono text-gray-500 whitespace-pre text-left leading-tight">
                       Electoral Unit #0092<br/>
                       Voted for:<br/>
                       <span className="text-white text-[10px]">{selectedCandidate}</span>
                    </div>
                 </div>
                 <h3 className="text-2xl font-bold">Voting Complete!</h3>
                 <p className="text-gray-400">The VVPAT slip appeared for 7 seconds. Your vote is securely recorded.</p>
                 <button onClick={() => { setStep(0); setSelectedCandidate(null); }} className="px-8 py-3 ring-2 ring-white/20 rounded-2xl font-bold hover:bg-white/10 transition-all">Reset Simulation</button>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
