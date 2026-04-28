import { getPathById } from './WellnessPaths';
import { Activity, Apple, Brain, Share2 } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

interface WellnessPathCardScreenProps {
  personName: string;
  familyName: string;
  goalId: string;
  phone: string;
  onShare: () => void;
  onReset: () => void;
}

export function WellnessPathCardScreen({
  personName,
  familyName,
  goalId,
  phone,
  onShare,
  onReset
}: WellnessPathCardScreenProps) {
  const path = getPathById(goalId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8DEFF] via-[#F5F0FF] to-[#FFE8F0] flex flex-col px-6 py-6 relative overflow-y-auto">
      <AnimatedBackground />

      <div className="flex flex-col max-w-lg mx-auto w-full relative z-10 py-4">
        {/* The Wellness Path Card - Shareable Asset */}
        <div id="wellness-card" className="bg-white rounded-3xl shadow-2xl mb-4">

          {/* Card Header */}
          <div className="relative px-8 py-8 text-center"
               style={{
                 background: `linear-gradient(135deg, ${path.color}, ${path.color}dd)`,
               }}>
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-10"
                 style={{
                   backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                   backgroundSize: '16px 16px'
                 }}>
            </div>

            <div className="relative">
              <div className="text-7xl mb-6">{path.icon}</div>

              <h1 className="text-3xl text-white mb-4" style={{
                fontFamily: 'var(--font-serif)',
                textShadow: '0 2px 15px rgba(0,0,0,0.2)'
              }}>
                {path.name}
              </h1>

              <p className="text-white/95 text-xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                {path.tagline}
              </p>

              <div className="mt-4 pt-6 border-t-2 border-white/30">
                <p className="text-white text-xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>{personName} Ji</p>
                <p className="text-white/90">{familyName} Family</p>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="px-8 py-6">
            <div className="space-y-4">
              <div className="border-l-4 pl-5 py-2" style={{ borderColor: path.color }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: `${path.color}20` }}>
                    <Activity className="w-4 h-4" style={{ color: path.color }} />
                  </div>
                  <h4 className="text-xs text-[#8B7E9E] tracking-wider">YOUR DAILY ACTION</h4>
                </div>
                <p className="text-[#4A4458] leading-relaxed">{path.action}</p>
              </div>

              <div className="border-l-4 border-[#B8A8D8] pl-5 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#B8A8D8]/20 flex items-center justify-center">
                    <Apple className="w-4 h-4 text-[#B8A8D8]" />
                  </div>
                  <h4 className="text-xs text-[#8B7E9E] tracking-wider">YOUR NUTRITION FOCUS</h4>
                </div>
                <p className="text-[#4A4458] leading-relaxed">{path.nutrition}</p>
              </div>

              <div className="border-l-4 border-[#FFC4D0] pl-5 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#FFC4D0]/20 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-[#FFC4D0]" />
                  </div>
                  <h4 className="text-xs text-[#8B7E9E] tracking-wider">YOUR MINDSET MANTRA</h4>
                </div>
                <p className="text-[#4A4458] leading-relaxed italic">{path.mindset}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pb-6">
          <button
            onClick={onShare}
            className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-[#FF8B9E] to-[#FFC4D0] text-white hover:shadow-2xl transition-all shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 border-2 border-white/20"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm">Share</span>
          </button>

          <button
            onClick={onReset}
            className="flex-1 py-4 rounded-2xl border-2 border-[#B8A8D8]/40 bg-white/80 text-[#4A4458] hover:bg-white hover:border-[#B8A8D8] transition-all text-sm font-medium"
          >
            Create Another
          </button>
        </div>
      </div>
    </div>
  );
}
