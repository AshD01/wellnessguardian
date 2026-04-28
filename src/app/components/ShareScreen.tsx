import { MessageCircle, Check, Share2 } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

interface ShareScreenProps {
  data: {
    personName: string;
    familyName: string;
    priority: string;
  };
  onReset: () => void;
}

export function ShareScreen({ data, onReset }: ShareScreenProps) {
  const fullName = `${data.personName} ${data.familyName}`;
  const projectUrl = window.location.origin;

  const whatsappMessage = encodeURIComponent(
    `${fullName} Ji just received the Wellness Spotlight!\n\nThe wheel identified who needs wellness focus, and I got my personalized path.\n\nWho in YOUR family needs the spotlight? Find out: ${projectUrl}`
  );

  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  const handleWhatsAppShare = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="h-screen bg-gradient-to-b from-[#FAF7FF] to-[#F3EFFF] flex flex-col px-6 py-8 overflow-hidden relative">
      <AnimatedBackground />
      <div className="flex-1 flex flex-col max-w-lg mx-auto w-full justify-center relative z-10">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#B8A8D8] to-[#FF8B9E] mx-auto mb-6 flex items-center justify-center shadow-2xl">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl mb-3 text-[#4A4458]" style={{ fontFamily: 'var(--font-serif)' }}>
            Wellness Path Assigned!
          </h2>
          <p className="text-lg text-[#8B7E9E] mb-2">
            {fullName} Ji Wellness Spotlight Complete
          </p>
          <p className="text-sm text-[#8B7E9E]">
            Share your personalized path with loved ones
          </p>
        </div>

        <div className="mb-8">
          <button
            onClick={handleWhatsAppShare}
            className="w-full py-5 rounded-2xl bg-[#25D366] text-white hover:bg-[#1DA851] transition-all shadow-xl flex items-center justify-center gap-2 hover:shadow-2xl hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            Share on WhatsApp
          </button>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-[#F3EFFF] mb-6">
          <div className="flex items-start gap-3">
            <Share2 className="w-5 h-5 text-[#FF8B9E] flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-[#4A4458] mb-3">Message Preview</h3>
              <div className="bg-[#FAF7FF] p-4 rounded-xl border border-[#F3EFFF] text-sm text-[#4A4458] leading-relaxed space-y-2">
                <p>{fullName} Ji just received the Wellness Spotlight!</p>
                <p>The wheel identified who needs wellness focus, and I got my personalized path.</p>
                <p>Who in YOUR family needs the spotlight? Find out: <span className="text-[#B8A8D8] underline">{projectUrl}</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#FF8B9E]/10 to-[#B8A8D8]/10 rounded-2xl p-5 border-2 border-[#FF8B9E]/20 mb-6">
          <h4 className="text-[#4A4458] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Pro Tip</h4>
          <p className="text-sm text-[#4A4458] leading-relaxed">
            Screenshot your Wellness Path Card and post: "I received the Wellness Spotlight! Who in your family needs focus? 🎯"
          </p>
        </div>

        <button
          onClick={onReset}
          className="w-full py-4 rounded-2xl border-2 border-[#F3EFFF] bg-white text-[#4A4458] hover:border-[#FFC4D0] transition-all"
        >
          Find Spotlight for Another Family
        </button>
      </div>
    </div>
  );
}
