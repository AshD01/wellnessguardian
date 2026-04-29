import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

interface PersonSelectionScreenProps {
  familyMembers: string[];
  onPersonSelected: (index: number, label: string) => void;
  onSpinWheel: () => void;
  onBack: () => void;
}

export function PersonSelectionScreen({
  familyMembers,
  onPersonSelected,
  onSpinWheel,
  onBack
}: PersonSelectionScreenProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handleContinue = () => {
    if (selectedIndex !== null) {
      onPersonSelected(selectedIndex, familyMembers[selectedIndex]);
    }
  };

  return (
    <div className="min-h-dvh bg-gradient-to-b from-[#E1DEE6] to-[#DBD7E6] overflow-y-auto relative">
      <AnimatedBackground />
      <div className="max-w-lg mx-auto w-full px-6 py-5 relative z-10">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E67D8E] to-[#E6B0BB] mx-auto mb-3 flex items-center justify-center shadow-lg">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl mb-2 text-[#433D4F]" style={{ fontFamily: 'var(--font-serif)' }}>
            Who do you want to design the wellness plan for?
          </h1>
          <p className="text-[#7D718E] text-lg mb-2">
            Choose a family member
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {familyMembers.map((member, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
                selectedIndex === index
                  ? 'border-[#E67D8E] bg-[#E67D8E]/5 shadow-lg'
                  : 'border-[#DBD7E6] bg-white hover:border-[#E6B0BB] hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg text-[#433D4F]">{member} Ji</span>
                {selectedIndex === index && (
                  <div className="w-6 h-6 rounded-full bg-[#E67D8E] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          ))}

          {/* Spin the Wheel Option */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#A697C2]/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#E1DEE6] text-[#7D718E]">or</span>
            </div>
          </div>

          <button
            onClick={onSpinWheel}
            className="w-full p-6 rounded-2xl border-2 border-[#A697C2]/40 bg-gradient-to-br from-[#A697C2]/10 to-[#E67D8E]/10 hover:border-[#A697C2] hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A697C2] to-[#E67D8E] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-lg text-[#433D4F] mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                  I'm not sure - Spin the wheel!
                </p>
                <p className="text-sm text-[#7D718E]">
                  Let the spotlight decide
                </p>
              </div>
            </div>
          </button>
        </div>

        <div className="flex gap-3 pb-6">
          <button
            onClick={onBack}
            className="px-8 py-4 rounded-2xl border-2 border-[#DBD7E6] bg-white text-[#433D4F] hover:border-[#E6B0BB] transition-all"
          >
            Back
          </button>
          <button
            onClick={handleContinue}
            disabled={selectedIndex === null}
            className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-[#E67D8E] to-[#E6B0BB] border-2 border-[#BF667C] text-white hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
