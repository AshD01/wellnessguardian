import { useState } from 'react';
import { Target, Check } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

interface GoalSelectionScreenProps {
  personName: string;
  familyName: string;
  onComplete: (goalId: string) => void;
  onBack: () => void;
}

export function GoalSelectionScreen({ personName, familyName, onComplete, onBack }: GoalSelectionScreenProps) {
  const [selectedGoal, setSelectedGoal] = useState('');

  const goals = [
    { id: 'energy-booster', label: 'More Energy & Vitality', emoji: '⚡', color: '#F4A261' },
    { id: 'strength-seeker', label: 'Build Strength & Power', emoji: '💪', color: '#FF8B9E' },
    { id: 'mobility-master', label: 'Improve Flexibility & Mobility', emoji: '🤸', color: '#B8A8D8' },
    { id: 'calm-cultivator', label: 'Reduce Stress & Find Calm', emoji: '🧘‍♀️', color: '#9B9ECE' }
  ];

  const handleSubmit = () => {
    if (selectedGoal) {
      onComplete(selectedGoal);
    }
  };

  return (
    <div className="min-h-dvh bg-gradient-to-b from-[#FAF7FF] to-[#F3EFFF] flex flex-col relative">
      <AnimatedBackground />

      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-2 relative z-10 max-w-lg mx-auto w-full">
        <div className="text-center mb-5">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF8B9E] to-[#FFC4D0] mx-auto mb-3 flex items-center justify-center shadow-lg">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl mb-2 text-[#4A4458]" style={{ fontFamily: 'var(--font-serif)' }}>
            What's {personName} Ji's wellness goal?
          </h1>
          <p className="text-[#8B7E9E] text-base mb-1">Choose their primary focus for June</p>
          <p className="text-[#8B7E9E] text-sm">{personName} Ji ({familyName} Family)</p>
        </div>

        <div className="space-y-3">
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setSelectedGoal(goal.id)}
              className={`w-full p-5 rounded-2xl border-2 transition-all duration-200 text-left ${
                selectedGoal === goal.id
                  ? 'border-[#FF8B9E] bg-[#FF8B9E]/5 shadow-lg'
                  : 'border-[#F3EFFF] bg-white hover:border-[#FFC4D0] hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-md"
                  style={{ backgroundColor: selectedGoal === goal.id ? `${goal.color}20` : '#F3EFFF' }}
                >
                  {goal.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-base text-[#4A4458]">{goal.label}</p>
                </div>
                {selectedGoal === goal.id && (
                  <div className="w-7 h-7 rounded-full bg-[#FF8B9E] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div
        className="sticky bottom-0 px-6 pt-3 relative z-10 max-w-lg mx-auto w-full bg-gradient-to-t from-[#F3EFFF] via-[#F3EFFF] to-transparent"
        style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
      >
        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="px-8 py-3 rounded-2xl border-2 border-[#F3EFFF] bg-white text-[#4A4458] hover:border-[#FFC4D0] transition-all"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedGoal}
            className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-[#FF8B9E] to-[#FFC4D0] border-2 border-[#D4718A] text-white hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
          >
            Generate Wellness Path
          </button>
        </div>
      </div>
    </div>
  );
}
