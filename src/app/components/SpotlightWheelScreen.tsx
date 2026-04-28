import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { Sparkles, Target } from 'lucide-react';

interface SpotlightWheelScreenProps {
  familyName: string;
  familyMembers: string[];
  onPersonSelected: (personIndex: number, personName: string) => void;
}

export function SpotlightWheelScreen({ familyName, familyMembers, onPersonSelected }: SpotlightWheelScreenProps) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [hasSpun, setHasSpun] = useState(false);

  // Create wheel data from family members
  const wheelData = familyMembers.map((member) => ({
    option: member,
    style: {
      backgroundColor: '#FF8B9E',
      textColor: '#FFFFFF',
      fontSize: 16
    }
  }));

  // Alternate colors for visual appeal
  const backgroundColors = familyMembers.map((_, index) =>
    index % 2 === 0 ? '#FF8B9E' : '#FFC4D0'
  );

  const handleSpinClick = () => {
    if (!mustSpin && !hasSpun) {
      const newPrizeNumber = Math.floor(Math.random() * familyMembers.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setHasSpun(true);
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setTimeout(() => {
      onPersonSelected(prizeNumber, familyMembers[prizeNumber]);
    }, 1500);
  };

  const selectedPerson = familyMembers[prizeNumber];

  return (
    <div className="h-screen bg-gradient-to-br from-[#F3EFFF] to-[#FAF7FF] flex flex-col px-6 py-8 relative overflow-hidden">
      {/* Soft decorative background */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(200, 125, 61, 0.2) 2px, transparent 2px)',
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="flex-1 flex flex-col max-w-lg mx-auto w-full relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF8B9E]/10 rounded-full mb-4 border border-[#FF8B9E]/20">
            <Target className="w-4 h-4 text-[#FF8B9E]" />
            <p className="text-sm text-[#FF8B9E] tracking-wider">JUNE WELLNESS SPOTLIGHT</p>
          </div>
          <h1 className="text-3xl mb-3 text-[#4A4458]" style={{ fontFamily: 'var(--font-serif)' }}>
            Who Needs the Wellness Focus?
          </h1>
          <p className="text-[#8B7E9E] text-lg mb-2">
            The {familyName} Family
          </p>
          <p className="text-[#8B7E9E] text-sm">
            Let the system identify who receives the June Wellness Spotlight
          </p>
        </div>

        {/* The Wheel Container */}
        <div className="flex-1 flex flex-col items-center justify-center mb-8">
          <div className="relative mb-8">
            {/* Premium border effects */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#FF8B9E]/20 to-[#B8A8D8]/20 blur-xl"></div>
            <div className="absolute -inset-4 rounded-full border-2 border-[#FFC4D0]/30"></div>

            {/* The Wheel */}
            <div className="relative bg-gradient-to-br from-white to-[#FAF7FF] p-3 rounded-full shadow-2xl">
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={wheelData}
                onStopSpinning={handleStopSpinning}
                backgroundColors={backgroundColors}
                textColors={['#FFFFFF']}
                outerBorderColor="#FF8B9E"
                outerBorderWidth={8}
                innerBorderColor="#FAF7FF"
                innerBorderWidth={4}
                radiusLineColor="#4A4458"
                radiusLineWidth={2}
                fontSize={16}
                perpendicularText={true}
                textDistance={65}
              />
            </div>

            {/* Center indicator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#FF8B9E] to-[#FFC4D0] border-4 border-white shadow-xl flex items-center justify-center pointer-events-none z-10">
              <Target className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Spin Button */}
          {!hasSpun && (
            <div className="text-center">
              <button
                onClick={handleSpinClick}
                className="px-12 py-6 rounded-2xl bg-gradient-to-r from-[#FF8B9E] to-[#FFC4D0] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-white/50 mb-4"
              >
                <span className="text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
                  Spin the Spotlight
                </span>
              </button>
              <p className="text-[#8B7E9E] text-sm">
                The wheel will identify who needs focus this month
              </p>
            </div>
          )}

          {hasSpun && mustSpin && (
            <div className="text-center bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl border-2 border-[#FF8B9E]/20">
              <Sparkles className="w-8 h-8 text-[#FF8B9E] mx-auto mb-3 animate-pulse" />
              <p className="text-[#4A4458] text-lg">
                Analyzing wellness needs...
              </p>
            </div>
          )}

          {hasSpun && !mustSpin && (
            <div className="text-center bg-gradient-to-br from-[#FF8B9E]/10 to-[#B8A8D8]/10 backdrop-blur-sm px-8 py-6 rounded-2xl border-2 border-[#FF8B9E]/30 max-w-md animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF8B9E] to-[#FFC4D0] mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-[#4A4458] mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Spotlight Found!
              </h3>
              <p className="text-[#4A4458] text-lg mb-2">
                <strong>{selectedPerson}</strong> receives the June Wellness Spotlight
              </p>
              <p className="text-[#8B7E9E] text-sm">
                Preparing personalized wellness path...
              </p>
            </div>
          )}
        </div>

        {/* Family Members Preview */}
        {!hasSpun && (
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-[#F3EFFF]">
            <p className="text-[#8B7E9E] text-sm mb-3 text-center">Family Members in the Spotlight Pool</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {familyMembers.map((member, index) => (
                <div key={index} className="px-4 py-2 bg-gradient-to-r from-[#FF8B9E]/10 to-[#FFC4D0]/10 rounded-full border border-[#FF8B9E]/20">
                  <p className="text-[#4A4458] text-sm">{member}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
