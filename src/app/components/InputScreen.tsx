import { useState } from 'react';
import { Users, Plus, Minus } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

interface InputScreenProps {
  onComplete: (data: { familyName: string; familyMembers: string[] }) => void;
  onBack: () => void;
}

interface FamilyCategory {
  id: string;
  label: string;
  emoji: string;
  singular: string;
  plural: string;
}

export function InputScreen({ onComplete, onBack }: InputScreenProps) {
  const [familyName, setFamilyName] = useState('');
  const [counts, setCounts] = useState<Record<string, number>>({
    spouse: 0,
    son: 0,
    daughter: 0,
    mother: 0,
    father: 0,
    grandchildren: 0
  });

  const categories: FamilyCategory[] = [
    { id: 'spouse', label: 'Spouse', emoji: '❤️', singular: 'Spouse', plural: 'Spouses' },
    { id: 'son', label: 'Son', emoji: '👦', singular: 'Son', plural: 'Sons' },
    { id: 'daughter', label: 'Daughter', emoji: '👧', singular: 'Daughter', plural: 'Daughters' },
    { id: 'mother', label: 'Mother', emoji: '👩', singular: 'Mother', plural: 'Mothers' },
    { id: 'father', label: 'Father', emoji: '👨', singular: 'Father', plural: 'Fathers' },
    { id: 'grandchildren', label: 'Grandchildren', emoji: '👶', singular: 'Grandchild', plural: 'Grandchildren' }
  ];

  const increment = (id: string) => {
    setCounts(prev => ({
      ...prev,
      [id]: Math.min((prev[id] || 0) + 1, 9)
    }));
  };

  const decrement = (id: string) => {
    setCounts(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0)
    }));
  };

  const getTotalCount = () => {
    return Object.values(counts).reduce((sum, count) => sum + count, 0);
  };

  const getFamilyMembersList = () => {
    const members: string[] = [];

    categories.forEach(category => {
      const count = counts[category.id];
      if (count > 0) {
        for (let i = 0; i < count; i++) {
          if (count === 1) {
            members.push(category.singular);
          } else {
            members.push(`${category.singular} ${i + 1}`);
          }
        }
      }
    });

    return members;
  };

  const handleSubmit = () => {
    if (familyName.trim() && getTotalCount() > 0) {
      onComplete({
        familyName: familyName.trim(),
        familyMembers: getFamilyMembersList()
      });
    }
  };

  const totalCount = getTotalCount();

  return (
    <div className="min-h-dvh bg-gradient-to-b from-[#E1DEE6] to-[#DBD7E6] overflow-y-auto relative">
      <AnimatedBackground />
      <div className="max-w-lg mx-auto w-full px-6 py-6 relative z-10">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-6 h-6 text-[#E67D8E]" />
            <h2 className="text-2xl text-[#433D4F]" style={{ fontFamily: 'var(--font-serif)' }}>
              Who all are in your family?
            </h2>
          </div>
          <p className="text-[#7D718E] text-sm">
            {totalCount > 0 ? `${totalCount} family member${totalCount !== 1 ? 's' : ''} selected` : 'Select at least one family member'}
          </p>
        </div>

        {/* Family Name Input */}
        <div className="mb-4">
          <label className="text-sm text-[#7D718E] mb-2 block">Family Name</label>
          <input
            type="text"
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
            placeholder="e.g., Sharma, Patel, Kumar"
            className="w-full p-3 rounded-xl border-2 border-[#DBD7E6] bg-white focus:border-[#E67D8E] focus:outline-none transition-all text-[#433D4F]"
            autoFocus
          />
        </div>

        {/* Family Member Categories */}
        <div className="mb-4">
          <div className="space-y-2">
            {categories.map(category => (
              <div
                key={category.id}
                className="bg-white rounded-xl p-4 border-2 border-[#DBD7E6] hover:border-[#E6B0BB]/50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-base text-[#433D4F]">{category.label}</p>
                    <span className="text-xl">{category.emoji}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrement(category.id)}
                      disabled={counts[category.id] === 0}
                      className="w-9 h-9 rounded-lg bg-[#DBD7E6] text-[#433D4F] hover:bg-[#E6B0BB] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <div className="w-8 text-center">
                      <span className="text-xl text-[#433D4F]">{counts[category.id]}</span>
                    </div>

                    <button
                      onClick={() => increment(category.id)}
                      disabled={counts[category.id] >= 9}
                      className="w-9 h-9 rounded-lg bg-gradient-to-r from-[#E67D8E] to-[#E6B0BB] border-2 border-[#BF667C] text-white hover:shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex gap-3 pb-6">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-xl border-2 border-[#DBD7E6] bg-white text-[#433D4F] hover:border-[#E6B0BB] transition-all"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={!familyName.trim() || totalCount === 0}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#E67D8E] to-[#E6B0BB] border-2 border-[#BF667C] text-white hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
          >
            Spin the Spotlight ({totalCount})
          </button>
        </div>
      </div>
    </div>
  );
}
