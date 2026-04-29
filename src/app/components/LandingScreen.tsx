import videoSrc from '../../imports/ezgif-6013d935486327ab.mp4';

interface LandingScreenProps {
  onNext: () => void;
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute blur-[70px] left-[50px] opacity-20 rounded-full size-[420px] top-[36px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 422 422\\' xmlns=\\'http://www.w3.org/2000/svg\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'url(%23g)\\'/><defs><radialGradient id=\\'g\\'><stop stop-color=\\'rgba(255,139,158,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute blur-[67px] left-[14px] opacity-20 rounded-full size-[334px] bottom-[80px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 334 334\\' xmlns=\\'http://www.w3.org/2000/svg\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'url(%23g)\\'/><defs><radialGradient id=\\'g\\'><stop stop-color=\\'rgba(184,168,216,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute bg-[rgba(255,196,208,0.4)] left-[40px] rounded-full size-[8px] top-[80px]" />
      <div className="absolute bg-[rgba(255,139,158,0.3)] right-[80px] rounded-full size-[12px] top-[160px]" />
      <div className="absolute bg-[rgba(184,168,216,0.3)] left-[64px] rounded-full size-[8px] bottom-[120px]" />
    </div>
  );
}

export function LandingScreen({ onNext }: LandingScreenProps) {
  return (
    <div
      className="min-h-dvh flex flex-col relative overflow-hidden"
      style={{ backgroundImage: "linear-gradient(114.74deg, rgb(232,222,255) 0%, rgb(245,240,255) 50%, rgb(255,232,240) 100%)" }}
    >
      <AnimatedBackground />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-12 pb-4 relative z-10 text-center">
        {/* Decorative circle */}
        <div className="w-24 h-24 rounded-full bg-[rgba(255,139,158,0.25)] mb-6" />

        {/* Title */}
        <h1
          className="text-[#4a4458] text-3xl font-medium leading-tight mb-4"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Become the Wellness Guardian of your family!
        </h1>

        {/* Subtitle */}
        <p className="text-[#8b7e9e] text-base mb-6 max-w-xs">
          Spin the wheel to make a personalised wellness guide for your Family!
        </p>

        {/* Video */}
        <div className="w-full rounded-2xl overflow-hidden" style={{ opacity: 0.27 }}>
          <video autoPlay loop muted playsInline className="w-full">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* CTA pinned to bottom */}
      <div className="px-6 pb-8 pt-4 relative z-10" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
        <button
          onClick={onNext}
          className="w-full h-[56px] rounded-2xl shadow-lg text-white text-lg font-medium"
          style={{
            fontFamily: 'var(--font-serif)',
            backgroundImage: "linear-gradient(90deg, rgb(255,139,158) 0%, rgb(255,196,208) 100%)"
          }}
        >
          Get Started Now →
        </button>
        <p className="text-center text-[#8b7e9e] text-xs mt-3">
          ✨ Free • Takes 30 seconds • Get personalized guidance
        </p>
      </div>
    </div>
  );
}
