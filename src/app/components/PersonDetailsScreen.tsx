import { useState } from 'react';
import { User, Phone } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

interface PersonDetailsScreenProps {
  personLabel: string;
  familyName: string;
  onComplete: (data: { actualName: string; phone: string }) => void;
  onBack: () => void;
}

export function PersonDetailsScreen({ personLabel, familyName, onComplete, onBack }: PersonDetailsScreenProps) {
  const [actualName, setActualName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');

  const countryCodes = [
    { code: '+91', flag: '🇮🇳' },
    { code: '+1', flag: '🇺🇸' },
    { code: '+44', flag: '🇬🇧' },
    { code: '+971', flag: '🇦🇪' },
    { code: '+65', flag: '🇸🇬' },
    { code: '+61', flag: '🇦🇺' },
    { code: '+81', flag: '🇯🇵' },
    { code: '+86', flag: '🇨🇳' },
    { code: '+33', flag: '🇫🇷' },
    { code: '+49', flag: '🇩🇪' },
    { code: '+52', flag: '🇲🇽' },
    { code: '+55', flag: '🇧🇷' },
    { code: '+27', flag: '🇿🇦' },
    { code: '+82', flag: '🇰🇷' },
    { code: '+60', flag: '🇲🇾' }
  ];

  const handleSubmit = () => {
    if (actualName.trim() && phone.trim()) {
      onComplete({
        actualName: actualName.trim(),
        phone: `${countryCode} ${phone.trim()}`
      });
    }
  };

  return (
    <div className="min-h-dvh bg-gradient-to-b from-[#E1DEE6] to-[#DBD7E6] flex flex-col relative">
      <AnimatedBackground />

      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-2 relative z-10 max-w-lg mx-auto w-full">
        <div className="text-center mb-5">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E67D8E] to-[#E6B0BB] mx-auto mb-3 flex items-center justify-center shadow-lg">
            <User className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl mb-2 text-[#433D4F]" style={{ fontFamily: 'var(--font-serif)' }}>
            Spotlight on {personLabel} Ji
          </h1>
          <p className="text-[#7D718E] text-base mb-1">Let's get their details</p>
          <p className="text-[#7D718E] text-sm">
            {personLabel} Ji from the {familyName} family selected for the June Wellness Spotlight
          </p>
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2 text-[#433D4F] mb-2 text-sm">
            <User className="w-4 h-4 text-[#E67D8E]" />
            <span>What is {personLabel} Ji's name?</span>
          </label>
          <input
            type="text"
            value={actualName}
            onChange={(e) => setActualName(e.target.value)}
            placeholder="Enter their full name"
            className="w-full p-4 rounded-2xl border-2 border-[#DBD7E6] bg-white focus:border-[#E67D8E] focus:outline-none transition-all text-base text-[#433D4F]"
            autoFocus
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2 text-[#433D4F] mb-2 text-sm">
            <Phone className="w-4 h-4 text-[#E67D8E]" />
            <span>WhatsApp Number</span>
          </label>
          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-28 p-4 rounded-2xl border-2 border-[#DBD7E6] bg-white focus:border-[#E67D8E] focus:outline-none transition-all text-sm text-[#433D4F]"
            >
              {countryCodes.map(({ code, flag }) => (
                <option key={code} value={code}>{flag} {code}</option>
              ))}
            </select>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="98765 43210"
              className="flex-1 p-4 rounded-2xl border-2 border-[#DBD7E6] bg-white focus:border-[#E67D8E] focus:outline-none transition-all text-base text-[#433D4F]"
            />
          </div>
          <p className="text-xs text-[#7D718E] mt-1 ml-1">We'll send their personalized wellness plan here</p>
        </div>
      </div>

      <div
        className="sticky bottom-0 px-6 pt-3 relative z-10 max-w-lg mx-auto w-full bg-gradient-to-t from-[#DBD7E6] via-[#DBD7E6] to-transparent"
        style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
      >
        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="px-8 py-3 rounded-2xl border-2 border-[#DBD7E6] bg-white text-[#433D4F] hover:border-[#E6B0BB] transition-all"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={!actualName.trim() || !phone.trim()}
            className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-[#E67D8E] to-[#E6B0BB] border-2 border-[#BF667C] text-white hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
