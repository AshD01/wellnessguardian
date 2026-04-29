import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { wheelDestinies, getDestinyByIndex } from './WheelDestinies';
import { Sparkles } from 'lucide-react';

interface FortuneWheelScreenProps {
  familyName: string;
  familyMembers: string[];
  onResult: (destinyIndex: number) => void;
}

export function FortuneWheelScreen({ familyName, familyMembers, onResult }: FortuneWheelScreenProps) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [hasSpun, setHasSpun] = useState(false);

  const wheelData = wheelDestinies.map((destiny) => ({
    option: destiny.icon,
    style: {
      backgroundColor: destiny.color,
      textColor: '#FFFFFF',
      fontSize: 32
    }
  }));

  const handleSpinClick = () => {
    if (!mustSpin && !hasSpun) {
      const newPrizeNumber = Math.floor(Math.random() * wheelDestinies.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setHasSpun(true);
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setTimeout(() => {
      onResult(prizeNumber);
    }, 1000);
  };

  const selectedDestiny = wheelDestinies[prizeNumber];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4A4458] via-[#5B3A1F] to-[#4A4458] flex flex-col px-6 py-8 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(200, 125, 61, 0.3) 35px, rgba(200, 125, 61, 0.3) 70px)'
           }}>
      </div>

      <div className="flex-1 flex flex-col max-w-lg mx-auto w-full relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF8B9E]/20 backdrop-blur-sm rounded-full mb-4 border border-[#FF8B9E]/30">
            <Sparkles className="w-4 h-4 text-[#FFC4D0]" />
            <p className="text-sm text-[#FFC4D0] tracking-wider">JUNE FAMILY FORTUNE</p>
          </div>
          <h1 className="text-3xl mb-3 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
            Discover Your Family's Wellness Karma
          </h1>
          <p className="text-[#FFC4D0] text-lg mb-2">
            The {familyName} Family
          </p>
          <p className="text-[#8B7E9E] text-sm">
            {familyMembers.join(', ')}
          </p>
        </div>

        {/* The Wheel Container */}
        <div className="flex-1 flex flex-col items-center justify-center mb-8">
          <div className="relative mb-8">
            {/* Ornate Border Around Wheel */}
            <div className="absolute -inset-6 rounded-full border-4 border-[#FF8B9E]/30 animate-pulse"></div>
            <div className="absolute -inset-4 rounded-full border-2 border-[#FFC4D0]/50"></div>

            {/* The Wheel */}
            <div className="relative bg-gradient-to-br from-[#FF8B9E] to-[#FFC4D0] p-2 rounded-full shadow-2xl">
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={wheelData}
                onStopSpinning={handleStopSpinning}
                backgroundColors={wheelDestinies.map(d => d.color)}
                textColors={['#FFFFFF']}
                outerBorderColor="#4A4458"
                outerBorderWidth={8}
                innerBorderColor="#FAF7FF"
                innerBorderWidth={4}
                radiusLineColor="#4A4458"
                radiusLineWidth={2}
                fontSize={32}
                perpendicularText={false}
                textDistance={60}
              />
            </div>

            {/* Center Circle Indicator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#FF8B9E] to-[#FFC4D0] border-4 border-white shadow-xl flex items-center justify-center pointer-events-none z-10">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#FF8B9E]" />
              </div>
            </div>
          </div>

          {/* Spin Button */}
          {!hasSpun && (
            <button
              onClick={handleSpinClick}
              className="px-12 py-6 rounded-2xl bg-gradient-to-r from-[#FF8B9E] to-[#FFC4D0] border-2 border-[#D4718A] text-white shadow-2xl hover:shadow-[0_0_30px_rgba(200,125,61,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
                Spin the Wheel
              </span>
            </button>
          )}

          {hasSpun && mustSpin && (
            <div className="text-center">
              <p className="text-[#FFC4D0] text-lg animate-pulse">
                Revealing your destiny...
              </p>
            </div>
          )}

          {hasSpun && !mustSpin && (
            <div className="text-center bg-gradient-to-r from-[#FF8B9E]/20 to-[#FFC4D0]/20 backdrop-blur-sm px-8 py-6 rounded-2xl border-2 border-[#FF8B9E]/30 max-w-md">
              <div className="text-5xl mb-3">{selectedDestiny.icon}</div>
              <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                {selectedDestiny.name}
              </h3>
              <p className="text-[#FFC4D0] mb-4">
                {selectedDestiny.description}
              </p>
              <p className="text-white/80 text-sm">
                Generating your Wellness Karma Card...
              </p>
            </div>
          )}
        </div>

        {/* Legend - Show all destinies */}
        {!hasSpun && (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
            <p className="text-[#FFC4D0] text-sm mb-3 text-center">8 Paths of Wellness Karma</p>
            <div className="grid grid-cols-4 gap-3">
              {wheelDestinies.map((destiny) => (
                <div key={destiny.id} className="text-center">
                  <div className="text-2xl mb-1">{destiny.icon}</div>
                  <p className="text-white/60 text-xs">{destiny.name.replace('The ', '')}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
