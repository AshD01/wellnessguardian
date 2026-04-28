export function AnimatedBackground() {
  return (
    <>
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orb 1 */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl animate-float-slow"
          style={{
            background: 'radial-gradient(circle, #FF8B9E 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            animationDelay: '0s'
          }}
        />

        {/* Large floating orb 2 */}
        <div
          className="absolute w-80 h-80 rounded-full opacity-20 blur-3xl animate-float-slower"
          style={{
            background: 'radial-gradient(circle, #B8A8D8 0%, transparent 70%)',
            top: '60%',
            right: '10%',
            animationDelay: '2s'
          }}
        />

        {/* Medium floating orb 3 */}
        <div
          className="absolute w-64 h-64 rounded-full opacity-15 blur-2xl animate-float-medium"
          style={{
            background: 'radial-gradient(circle, #FFC4D0 0%, transparent 70%)',
            bottom: '20%',
            left: '15%',
            animationDelay: '4s'
          }}
        />

        {/* Small floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-[#FFC4D0]/40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-[#FF8B9E]/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-16 w-2 h-2 rounded-full bg-[#B8A8D8]/30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-12 w-2.5 h-2.5 rounded-full bg-[#FFC4D0]/25 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-60 left-24 w-1.5 h-1.5 rounded-full bg-[#FF8B9E]/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </>
  );
}
