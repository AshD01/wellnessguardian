import { Award, Sparkles, Activity, Apple, Brain, ArrowRight } from 'lucide-react';

interface ResultScreenProps {
  data: {
    members: string[];
    priority: string;
    name: string;
  };
  onShare: () => void;
}

interface ProtocolContent {
  title: string;
  emoji: string;
  action: string;
  nutrition: string;
  mindset: string;
}

export function ResultScreen({ data, onShare }: ResultScreenProps) {
  const protocolsByPriority: Record<string, ProtocolContent> = {
    joint: {
      title: 'Joint Health',
      emoji: '🦴',
      action: '5-min Morning Joint Mobility (Rotate wrists, ankles, neck)',
      nutrition: 'Include one source of Omega-3 (Walnuts or Flax seeds) daily',
      mindset: '"Move like water": If you sit for 30 mins, stand for 1 min.'
    },
    energy: {
      title: 'Energy',
      emoji: '⚡',
      action: '3-min Surya Namaskar (Sun Salutation) upon waking',
      nutrition: 'Swap afternoon tea/coffee for a fruit or glass of water',
      mindset: '"The 10-second breath": Inhale deep when you feel a slump.'
    },
    stress: {
      title: 'Stress Relief',
      emoji: '🧘‍♀️',
      action: '5-min Evening Meditation (The "Habuild Calm")',
      nutrition: 'Add 1 cup of chamomile or green tea post-dinner',
      mindset: '"Screen Sunset": All screens off 1 hour before bed.'
    },
    weight: {
      title: 'Weight Management',
      emoji: '🌱',
      action: '15-min Brisk Walk post-dinner',
      nutrition: '"The 80% Rule": Stop eating when 80% full',
      mindset: '"Journaling": Track 1 healthy choice made today.'
    }
  };

  const protocol = protocolsByPriority[data.priority] || protocolsByPriority.joint;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E1DEE6] to-[#DBD7E6] flex flex-col px-6 py-8">
      <div className="flex-1 flex flex-col max-w-lg mx-auto w-full">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A697C2]/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#A697C2]" />
            <p className="text-sm text-[#A697C2]">PROTOCOL READY</p>
          </div>
          <h2 className="text-xl text-[#433D4F]" style={{ fontFamily: 'var(--font-serif)' }}>
            Your Personal Wellness Protocol
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border-4 border-[#E67D8E]/30 overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-[#E67D8E] to-[#E6B0BB] px-6 py-6 text-center relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10"
                 style={{
                   backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.3) 10px, rgba(255,255,255,.3) 20px)'
                 }}>
            </div>
            <div className="relative">
              <h1 className="text-2xl text-white mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                {data.name}'s Personal Wellness Protocol
              </h1>
              <p className="text-white/90 text-sm tracking-wide mb-1">June 2026</p>
              <p className="text-white/80 text-xs">Prepared by the Chief Health Officer</p>
              <div className="mt-3 inline-block px-3 py-1 bg-white/20 rounded-full">
                <p className="text-white text-xs tracking-widest">HABUILD JUNE CHALLENGE</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-6">
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E67D8E]/5 rounded-xl mb-2">
                <span className="text-2xl">{protocol.emoji}</span>
                <h3 className="text-lg text-[#433D4F]" style={{ fontFamily: 'var(--font-serif)' }}>
                  {protocol.title} Focus
                </h3>
              </div>
            </div>

            <div className="space-y-5">
              <div className="border-l-4 border-[#E67D8E] pl-4 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-[#E67D8E]" />
                  <h4 className="text-sm text-[#7D718E] tracking-wide">1. THE ACTION (HABUILD CORE)</h4>
                </div>
                <p className="text-[#433D4F] leading-relaxed">{protocol.action}</p>
              </div>

              <div className="border-l-4 border-[#A697C2] pl-4 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <Apple className="w-4 h-4 text-[#A697C2]" />
                  <h4 className="text-sm text-[#7D718E] tracking-wide">2. THE NUTRITION TIP</h4>
                </div>
                <p className="text-[#433D4F] leading-relaxed">{protocol.nutrition}</p>
              </div>

              <div className="border-l-4 border-[#E6B0BB] pl-4 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-4 h-4 text-[#E6B0BB]" />
                  <h4 className="text-sm text-[#7D718E] tracking-wide">3. THE MINDSET HABIT</h4>
                </div>
                <p className="text-[#433D4F] leading-relaxed italic">{protocol.mindset}</p>
              </div>
            </div>

            <div className="mt-6 border-t-2 border-[#DBD7E6] pt-6">
              <div className="bg-gradient-to-br from-[#E67D8E]/5 to-[#A697C2]/5 p-5 rounded-2xl border-2 border-[#E67D8E]/20">
                <p className="text-sm text-[#433D4F] leading-relaxed mb-4">
                  <span style={{ fontFamily: 'var(--font-serif)' }}>This is a blueprint, but the real magic happens in the Challenge.</span> Join the June Habuild Challenge for daily live accountability and personalized support.
                </p>
                <div className="flex items-center gap-2 text-[#E67D8E]">
                  <ArrowRight className="w-4 h-4" />
                  <a href="#" className="text-sm underline hover:text-[#B86D2D]">
                    Join the Habuild Challenge
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DBD7E6] flex items-center justify-between">
              <div>
                <p className="text-xs text-[#7D718E] mb-1">Chief Health Officer</p>
                <p className="text-[#433D4F]" style={{ fontFamily: 'var(--font-serif)' }}>
                  {data.name}
                </p>
              </div>
              <Award className="w-12 h-12 text-[#E67D8E]" />
            </div>
          </div>
        </div>

        <button
          onClick={onShare}
          className="w-full py-5 rounded-2xl bg-[#A697C2] text-white hover:bg-[#4A8884] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
        >
          Send Protocol to Family
        </button>

        <p className="text-center text-xs text-[#7D718E] mt-4">
          Share via WhatsApp to activate your family health circle
        </p>
      </div>
    </div>
  );
}
