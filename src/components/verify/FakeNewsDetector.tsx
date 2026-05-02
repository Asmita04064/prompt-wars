import React, { useState } from 'react';
import { ShieldCheck, Search, Loader2, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';
import { verifyNews } from '../../lib/gemini';
import Markdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';

export default function FakeNewsDetector() {
  const [newsContent, setNewsContent] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    if (!newsContent.trim() || isLoading) return;
    setIsLoading(true);
    try {
      const analysis = await verifyNews(newsContent);
      setResult(analysis || "Error processing verification.");
    } catch (error) {
      setResult("Unable to verify at this moment.");
    } finally {
      setIsLoading(false);
    }
  };

  const getVerdictStyles = (text: string) => {
    if (text.includes('Likely True')) return { color: 'text-green-600', bg: 'bg-green-50', icon: <CheckCircle className="text-green-600" /> };
    if (text.includes('Likely False') || text.includes('Highly Likely False')) return { color: 'text-red-600', bg: 'bg-red-50', icon: <AlertTriangle className="text-red-600" /> };
    return { color: 'text-yellow-600', bg: 'bg-yellow-50', icon: <HelpCircle className="text-yellow-600" /> };
  };

  const styles = result ? getVerdictStyles(result) : null;

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 overflow-hidden">
      <div className="p-8 space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-red-100 rounded-2xl">
            <ShieldCheck className="text-red-600" size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Fake News Detector</h2>
            <p className="text-gray-500 font-medium">NLP-powered verification for election claims</p>
          </div>
        </div>

        <div className="space-y-4">
          <textarea
            value={newsContent}
            onChange={(e) => setNewsContent(e.target.value)}
            placeholder="Paste an election claim, WhatsApp forward, or news headline here..."
            className="w-full h-32 p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-500/30 transition-all text-gray-800 placeholder:text-gray-400"
          />
          <button
            onClick={handleVerify}
            disabled={isLoading || !newsContent.trim()}
            className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 disabled:opacity-50 transition-all shadow-lg"
          >
            {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Search size={20} />}
            {isLoading ? 'Analyzing Claim...' : 'Verify Now'}
          </button>
        </div>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl border ${styles?.bg} ${styles?.color.replace('text', 'border')}`}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0">{styles?.icon}</div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg uppercase tracking-wider">AI Verification Result</h4>
                  <div className="prose prose-sm max-w-none text-gray-700 font-medium">
                    <Markdown>{result}</Markdown>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">System Status: Active</p>
        <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">Engine: Gemini-3-NLP</p>
      </div>
    </div>
  );
}
