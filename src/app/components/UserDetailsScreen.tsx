import { useState } from 'react';
import { User, Phone } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

interface UserDetailsScreenProps {
  onComplete: (data: { userName: string; userPhone: string }) => void;
  onBack: () => void;
}

export function UserDetailsScreen({ onComplete, onBack }: UserDetailsScreenProps) {
  const [userName, setUserName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');

  const countryCodes = [
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+1', country: 'USA', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+971', country: 'UAE', flag: '🇦🇪' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+52', country: 'Mexico', flag: '🇲🇽' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' }
  ];

  const handleSubmit = () => {
    if (userName.trim() && phone.trim()) {
      onComplete({
        userName: userName.trim(),
        userPhone: `${countryCode} ${phone.trim()}`
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7FF] to-[#F3EFFF] overflow-y-auto relative">
      <AnimatedBackground />
      <div className="max-w-lg mx-auto w-full px-6 py-8 relative z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF8B9E] to-[#FFC4D0] mx-auto mb-4 flex items-center justify-center shadow-lg">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl mb-3 text-[#4A4458]" style={{ fontFamily: 'var(--font-serif)' }}>
            Welcome, Wellness Guardian!
          </h1>
          <p className="text-[#8B7E9E] text-lg mb-2">
            First, let's get your details
          </p>
          <p className="text-[#8B7E9E] text-sm">
            We'll keep you updated on your family's wellness journey
          </p>
        </div>

        <div className="mb-6">
          <label className="flex items-center gap-2 text-[#4A4458] mb-3">
            <User className="w-5 h-5 text-[#FF8B9E]" />
            <span>Your Name</span>
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full p-5 rounded-2xl border-2 border-[#F3EFFF] bg-white focus:border-[#FF8B9E] focus:outline-none transition-all text-lg text-[#4A4458]"
            autoFocus
          />
        </div>

        <div className="mb-8">
          <label className="flex items-center gap-2 text-[#4A4458] mb-3">
            <Phone className="w-5 h-5 text-[#FF8B9E]" />
            <span>Your WhatsApp Number</span>
          </label>
          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-32 p-5 rounded-2xl border-2 border-[#F3EFFF] bg-white focus:border-[#FF8B9E] focus:outline-none transition-all text-base text-[#4A4458]"
            >
              {countryCodes.map(({ code, country, flag }) => (
                <option key={code} value={code}>
                  {flag} {code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="98765 43210"
              className="flex-1 p-5 rounded-2xl border-2 border-[#F3EFFF] bg-white focus:border-[#FF8B9E] focus:outline-none transition-all text-lg text-[#4A4458]"
            />
          </div>
          <p className="text-xs text-[#8B7E9E] mt-2 ml-1">
            We'll send updates and wellness insights here
          </p>
        </div>

        <div className="flex gap-3 pb-6">
          <button
            onClick={onBack}
            className="px-8 py-4 rounded-2xl border-2 border-[#F3EFFF] bg-white text-[#4A4458] hover:border-[#FFC4D0] transition-all"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={!userName.trim() || !phone.trim()}
            className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-[#FF8B9E] to-[#FFC4D0] text-white hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
