import { getDestinyByIndex } from './WheelDestinies';
import { Award, Activity, Apple, Brain, Share2, Sparkles, Crown } from 'lucide-react';

interface KarmaCardScreenProps {
  destinyIndex: number;
  familyName: string;
  familyMembers: string[];
  onShare: () => void;
  onReset: () => void;
}

export function KarmaCardScreen({
  destinyIndex,
  familyName,
  familyMembers,
  onShare,
  onReset
}: KarmaCardScreenProps) {
  const destiny = getDestinyByIndex(destinyIndex);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E1DEE6] to-[#DBD7E6] flex flex-col px-6 py-8">
      <div className="flex-1 flex flex-col max-w-lg mx-auto w-full">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E67D8E]/10 to-[#A697C2]/10 rounded-full mb-4 border-2 border-[#E67D8E]/30">
            <Crown className="w-4 h-4 text-[#E67D8E]" />
            <p className="text-sm text-[#E67D8E] tracking-wider">YOUR FAMILY'S JUNE KARMA</p>
          </div>
          <h2 className="text-2xl text-[#433D4F] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
            The {familyName} Family Wellness Karma
          </h2>
          <p className="text-[#7D718E]">
            Destiny revealed for June 2026
          </p>
        </div>

        {/* The Karma Card - This is the shareable asset */}
        <div className="bg-white rounded-3xl shadow-2xl border-4 overflow-hidden mb-6"
             style={{
               borderImage: `linear-gradient(135deg, ${destiny.color}, #E6B0BB) 1`,
               borderImageSlice: 1
             }}>

          {/* Card Header - Destiny Name */}
          <div className="relative px-8 py-10 text-center"
               style={{
                 background: `linear-gradient(135deg, ${destiny.color}, ${destiny.color}dd)`,
               }}>
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10"
                 style={{
                   backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                   backgroundSize: '20px 20px'
                 }}>
            </div>

            <div className="relative">
              <div className="text-7xl mb-4">{destiny.icon}</div>
              <h1 className="text-4xl text-white mb-3" style={{ fontFamily: 'var(--font-serif)', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                {destiny.name}
              </h1>
              <p className="text-white/95 text-lg mb-2">
                {destiny.description}
              </p>
              <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mt-2">
                <p className="text-white text-xs tracking-widest">JUNE 2026 • HABUILD</p>
              </div>
            </div>
          </div>

          {/* Card Body - The Protocol */}
          <div className="px-8 py-8">
            <div className="mb-6">
              <h3 className="text-center text-[#433D4F] mb-4 text-lg" style={{ fontFamily: 'var(--font-serif)' }}>
                Your Family's Sacred Path
              </h3>
              <p className="text-center text-[#7D718E] mb-2">
                {familyMembers.join(', ')}
              </p>
            </div>

            <div className="space-y-5">
              <div className="border-l-4 pl-5 py-2" style={{ borderColor: destiny.color }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: `${destiny.color}20` }}>
                    <Activity className="w-4 h-4" style={{ color: destiny.color }} />
                  </div>
                  <h4 className="text-xs text-[#7D718E] tracking-wider">THE DAILY ACTION</h4>
                </div>
                <p className="text-[#433D4F] leading-relaxed">{destiny.action}</p>
              </div>

              <div className="border-l-4 border-[#A697C2] pl-5 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-[#A697C2]/20 flex items-center justify-center">
                    <Apple className="w-4 h-4 text-[#A697C2]" />
                  </div>
                  <h4 className="text-xs text-[#7D718E] tracking-wider">THE NOURISHMENT</h4>
                </div>
                <p className="text-[#433D4F] leading-relaxed">{destiny.nutrition}</p>
              </div>

              <div className="border-l-4 border-[#E6B0BB] pl-5 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-[#E6B0BB]/20 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-[#E6B0BB]" />
                  </div>
                  <h4 className="text-xs text-[#7D718E] tracking-wider">THE SACRED MINDSET</h4>
                </div>
                <p className="text-[#433D4F] leading-relaxed italic">{destiny.mindset}</p>
              </div>
            </div>

            {/* Conversion Message */}
            <div className="mt-8 pt-6 border-t-2 border-[#DBD7E6]">
              <div className="bg-gradient-to-br from-[#E67D8E]/5 to-[#A697C2]/5 p-5 rounded-2xl border-2 border-[#E67D8E]/20 text-center">
                <p className="text-sm text-[#433D4F] mb-3 leading-relaxed">
                  <span style={{ fontFamily: 'var(--font-serif)' }}>Your June Wellness Karma has been revealed.</span> Join the Habuild Challenge for daily guidance to fulfill your destiny.
                </p>
                <p className="text-xs text-[#7D718E]">
                  ✨ Your first task begins June 1st, 2026
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-[#7D718E] text-xs">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E67D8E]" />
                <span>Certified by Habuild</span>
              </div>
              <span>#{familyName}Family</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={onShare}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#E67D8E] to-[#E6B0BB] border-2 border-[#BF667C] text-white hover:shadow-2xl transition-all shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Share2 className="w-5 h-5" />
            Share My Family's Destiny
          </button>

          <button
            onClick={onReset}
            className="w-full py-4 rounded-2xl border-2 border-[#DBD7E6] bg-white text-[#433D4F] hover:border-[#E6B0BB] transition-all"
          >
            Spin Again for Another Family Member
          </button>
        </div>

        <div className="bg-gradient-to-r from-[#E67D8E]/10 to-[#A697C2]/10 rounded-2xl p-5 border border-[#E67D8E]/20">
          <h4 className="text-[#433D4F] mb-2 text-center" style={{ fontFamily: 'var(--font-serif)' }}>
            Pro Tip: Screenshot & Share
          </h4>
          <p className="text-sm text-[#433D4F] text-center leading-relaxed">
            Screenshot your Karma Card and post it to WhatsApp Status with: "Our family's June Karma is {destiny.name}. What's yours? 🎡"
          </p>
        </div>
      </div>
    </div>
  );
}
