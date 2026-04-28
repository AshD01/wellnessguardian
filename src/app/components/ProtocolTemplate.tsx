import { Award, Activity, Apple, Brain, ArrowRight } from 'lucide-react';

interface ProtocolTemplateProps {
  userName: string;
  priorityTitle: string;
  priorityEmoji: string;
  action: string;
  nutrition: string;
  mindset: string;
}

export function ProtocolTemplate({
  userName,
  priorityTitle,
  priorityEmoji,
  action,
  nutrition,
  mindset
}: ProtocolTemplateProps) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-2xl" style={{ aspectRatio: '8.5/11' }}>
      {/* Header Section - Gold Gradient */}
      <div className="relative bg-gradient-to-r from-[#FF8B9E] to-[#FFC4D0] px-12 py-12">
        {/* Decorative Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.3) 10px, rgba(255,255,255,.3) 20px)'
          }}
        />

        {/* Content */}
        <div className="relative text-center">
          <div className="mb-4">
            <Award className="w-20 h-20 text-white mx-auto" strokeWidth={1.5} />
          </div>

          <h1 className="text-4xl text-white mb-3" style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.5px' }}>
            {userName}'s Personal Wellness Protocol
          </h1>

          <div className="flex items-center justify-center gap-3 text-white/95 mb-3">
            <div className="h-px w-12 bg-white/40" />
            <p className="tracking-[0.3em]" style={{ fontSize: '13px' }}>JUNE 2026</p>
            <div className="h-px w-12 bg-white/40" />
          </div>

          <p className="text-white/90 text-sm mb-4">Prepared by the Chief Health Officer</p>

          <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <p className="text-white tracking-[0.25em]" style={{ fontSize: '11px' }}>
              HABUILD JUNE CHALLENGE
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="px-12 py-10">
        {/* Priority Focus Badge */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#FF8B9E]/10 to-[#B8A8D8]/10 rounded-2xl border-2 border-[#FF8B9E]/30">
            <span style={{ fontSize: '32px' }}>{priorityEmoji}</span>
            <h2 className="text-2xl text-[#4A4458]" style={{ fontFamily: 'var(--font-serif)' }}>
              {priorityTitle} Focus
            </h2>
          </div>
        </div>

        {/* The 3 Protocol Components */}
        <div className="space-y-8 mb-10">
          {/* 1. Action */}
          <div className="border-l-4 border-[#FF8B9E] pl-6 py-3 bg-gradient-to-r from-[#FF8B9E]/5 to-transparent rounded-r-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#FF8B9E] flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <h3 className="tracking-[0.15em] text-[#8B7E9E]" style={{ fontSize: '11px' }}>
                1. THE ACTION (HABUILD CORE)
              </h3>
            </div>
            <p className="text-[#4A4458] text-lg leading-relaxed pl-10">
              {action}
            </p>
          </div>

          {/* 2. Nutrition */}
          <div className="border-l-4 border-[#B8A8D8] pl-6 py-3 bg-gradient-to-r from-[#B8A8D8]/5 to-transparent rounded-r-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#B8A8D8] flex items-center justify-center">
                <Apple className="w-4 h-4 text-white" />
              </div>
              <h3 className="tracking-[0.15em] text-[#8B7E9E]" style={{ fontSize: '11px' }}>
                2. THE NUTRITION TIP
              </h3>
            </div>
            <p className="text-[#4A4458] text-lg leading-relaxed pl-10">
              {nutrition}
            </p>
          </div>

          {/* 3. Mindset */}
          <div className="border-l-4 border-[#FFC4D0] pl-6 py-3 bg-gradient-to-r from-[#FFC4D0]/5 to-transparent rounded-r-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#FFC4D0] flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <h3 className="tracking-[0.15em] text-[#8B7E9E]" style={{ fontSize: '11px' }}>
                3. THE MINDSET HABIT
              </h3>
            </div>
            <p className="text-[#4A4458] text-lg leading-relaxed italic pl-10">
              {mindset}
            </p>
          </div>
        </div>

        {/* Conversion Call-to-Action Box */}
        <div className="bg-gradient-to-br from-[#FF8B9E]/8 to-[#B8A8D8]/8 p-6 rounded-2xl border-2 border-[#FF8B9E]/30 mb-10">
          <p className="text-[#4A4458] leading-relaxed mb-4" style={{ fontSize: '15px' }}>
            <span style={{ fontFamily: 'var(--font-serif)' }}>
              This is a blueprint, but the real magic happens in the Challenge.
            </span>
            {' '}Join the June Habuild Challenge for daily live accountability and personalized support.
          </p>
          <div className="flex items-center gap-2 text-[#FF8B9E]">
            <ArrowRight className="w-5 h-5" strokeWidth={2} />
            <span style={{ fontSize: '14px', letterSpacing: '0.5px' }}>
              Join the Habuild Challenge: <strong>habuild.app/challenge</strong>
            </span>
          </div>
        </div>

        {/* Footer - Signature Section */}
        <div className="pt-6 border-t-2 border-[#F3EFFF]">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[#8B7E9E] mb-2" style={{ fontSize: '12px', letterSpacing: '0.1em' }}>
                CHIEF HEALTH OFFICER
              </p>
              <p className="text-[#4A4458] text-2xl" style={{ fontFamily: 'var(--font-serif)' }}>
                {userName}
              </p>
              <div className="mt-3 pt-1 border-t border-[#8B7E9E]/30 w-48">
                <p className="text-[#8B7E9E] text-xs">Signature</p>
              </div>
            </div>
            <div className="text-right">
              <Award className="w-16 h-16 text-[#FF8B9E] ml-auto mb-2" strokeWidth={1.5} />
              <p className="text-[#8B7E9E] text-xs">Certified by Habuild</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
