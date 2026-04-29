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
    <div className="h-screen bg-gradient-to-b from-[#FAF7FF] to-[#F3EFFF] flex flex-col px-6 py-8 overflow-hidden relative">
      <AnimatedBackground />
      <div className="flex-1 flex flex-col max-w-lg mx-auto w-full relative z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF8B9E] to-[#FFC4D0] mx-auto mb-4 flex items-center justify-center shadow-lg">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl mb-3 text-[#4A4458]" style={{ fontFamily: 'var(--font-serif)' }}>
            What's {personName} Ji's wellness goal?
          </h1>
          <p className="text-[#8B7E9E] text-lg mb-2">
            Choose their primary focus for June
          </p>
          <p className="text-[#8B7E9E] text-sm">
            {personName} Ji ({familyName} Family)
          </p>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="space-y-3 mb-8 overflow-y-auto flex-1">
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-200 text-left ${
                  selectedGoal === goal.id
                    ? 'border-[#FF8B9E] bg-[#FF8B9E]/5 shadow-lg'
                    : 'border-[#F3EFFF] bg-white hover:border-[#FFC4D0] hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-md"
                    style={{
                      backgroundColor: selectedGoal === goal.id ? `${goal.color}20` : '#F3EFFF'
                    }}
                  >
                    {goal.emoji}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-[#4A4458] mb-1">{goal.label}</p>
                  </div>
                  {selectedGoal === goal.id && (
                    <div className="w-8 h-8 rounded-full bg-[#FF8B9E] flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="px-8 py-4 rounded-2xl border-2 border-[#F3EFFF] bg-white text-[#4A4458] hover:border-[#FFC4D0] transition-all"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedGoal}
            className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-[#FF8B9E] to-[#FFC4D0] border-2 border-[#D4718A] text-white hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
          >
            Generate Wellness Path
          </button>
        </div>
      </div>
    </div>
  );
}
