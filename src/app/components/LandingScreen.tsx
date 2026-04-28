import videoSrc from '../../imports/ezgif-6013d935486327ab.mp4';

interface LandingScreenProps {
  onNext: () => void;
}

function Container() {
  return <div className="absolute blur-[70.387px] left-[50.08px] opacity-20 rounded-[21643844px] size-[422.323px] top-[36.16px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 422.32 422.32\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -29.863 -29.863 0 211.16 211.16)\\'><stop stop-color=\\'rgba(255,139,158,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(191,104,119,0.75)\\' offset=\\'0.175\\'/><stop stop-color=\\'rgba(128,70,79,0.5)\\' offset=\\'0.35\\'/><stop stop-color=\\'rgba(64,35,40,0.25)\\' offset=\\'0.525\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />;
}

function Container1() {
  return <div className="absolute blur-[66.883px] left-[14.44px] opacity-20 rounded-[20566376px] size-[334.416px] top-[516.46px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 334.42 334.42\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -23.647 -23.647 0 167.21 167.21)\\'><stop stop-color=\\'rgba(184,168,216,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(138,126,162,0.75)\\' offset=\\'0.175\\'/><stop stop-color=\\'rgba(92,84,108,0.5)\\' offset=\\'0.35\\'/><stop stop-color=\\'rgba(46,42,54,0.25)\\' offset=\\'0.525\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />;
}

function Container2() {
  return <div className="blur-[40px] opacity-15 rounded-[19679800px] size-[256px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 256 256\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -18.102 -18.102 0 128 128)\\'><stop stop-color=\\'rgba(255,196,208,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(191,147,156,0.75)\\' offset=\\'0.175\\'/><stop stop-color=\\'rgba(128,98,104,0.5)\\' offset=\\'0.35\\'/><stop stop-color=\\'rgba(64,49,52,0.25)\\' offset=\\'0.525\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />;
}

function AnimatedBackground() {
  return (
    <div className="absolute h-[852.776px] left-0 overflow-clip top-0 w-[392.957px]">
      <Container />
      <Container1 />
      <div className="absolute flex items-center justify-center left-[66.83px] size-[274.316px] top-[400.02px]">
        <div className="flex-none rotate-[4.26deg]">
          <Container2 />
        </div>
      </div>
      <div className="absolute bg-[rgba(255,196,208,0.4)] left-[39.99px] opacity-57 rounded-[19679800px] size-[7.991px] top-[79.99px]" />
      <div className="absolute bg-[rgba(255,139,158,0.3)] left-[300.97px] opacity-93 rounded-[19679800px] size-[11.996px] top-[160px]" />
      <div className="absolute bg-[rgba(184,168,216,0.3)] left-[63.99px] opacity-57 rounded-[19679800px] size-[7.991px] top-[684.79px]" />
      <div className="absolute bg-[rgba(255,196,208,0.25)] left-[334.97px] opacity-57 rounded-[19679800px] size-[9.998px] top-[240px]" />
      <div className="absolute bg-[rgba(255,139,158,0.2)] left-[95.99px] opacity-93 rounded-[19679800px] size-[5.993px] top-[606.78px]" />
    </div>
  );
}

export function LandingScreen({ onNext }: LandingScreenProps) {
  return (
    <div className="h-screen overflow-clip relative w-full" style={{ backgroundImage: "linear-gradient(114.74deg, rgb(232, 222, 255) 0%, rgb(234, 225, 255) 7.1429%, rgb(236, 227, 255) 14.286%, rgb(238, 230, 255) 21.429%, rgb(239, 232, 255) 28.571%, rgb(241, 235, 255) 35.714%, rgb(243, 237, 255) 42.857%, rgb(245, 240, 255) 50%, rgb(246, 239, 253) 57.143%, rgb(248, 238, 251) 64.286%, rgb(249, 237, 249) 71.429%, rgb(251, 235, 246) 78.571%, rgb(252, 234, 244) 85.714%, rgb(254, 233, 242) 92.857%, rgb(255, 232, 240) 100%)" }}>
      <AnimatedBackground />

      <div className="absolute h-[804.792px] left-[23.99px] top-[23.99px] w-[344.974px]">
        <div className="absolute h-[506.436px] left-0 top-[91.15px] w-[344.974px]">
          <p className="-translate-x-1/2 absolute font-['Inter',sans-serif] font-normal leading-[28px] left-[172.51px] text-[#8b7e9e] text-[16px] text-center top-[80.86px] w-[345px]">
            Spin the wheel to make a personalised wellness guide for your Family!
          </p>

          <div className="absolute h-[424px] left-[-110.99px] opacity-27 top-[154.86px] w-[565px]">
            <video autoPlay className="absolute max-w-none object-cover size-full" loop muted playsInline>
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="absolute content-stretch flex flex-col items-start left-[103.01px] opacity-27 size-[138.67px] top-[22.01px]">
          <div className="bg-[rgba(255,139,158,0.3)] h-[138.67px] rounded-[34112372px] shrink-0 w-full" />
        </div>

        <div className="absolute h-[134.987px] left-[0.01px] top-[16.01px] w-[344.974px]">
          <p className="-translate-x-1/2 absolute font-['Lora',sans-serif] font-medium leading-[45px] left-[172.5px] text-[#4a4458] text-[36px] text-center top-[-1.17px] w-[345px]">
            Become the Wellness Guardian of your family!
          </p>
        </div>

        <button
          onClick={onNext}
          className="absolute h-[60.089px] left-[0.01px] rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[684.01px] w-[344.974px]"
          style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 139, 158) 0%, rgb(255, 143, 162) 7.1429%, rgb(255, 147, 165) 14.286%, rgb(255, 152, 169) 21.429%, rgb(255, 156, 172) 28.571%, rgb(255, 160, 176) 35.714%, rgb(255, 164, 179) 42.857%, rgb(255, 168, 183) 50%, rgb(255, 172, 186) 57.143%, rgb(255, 176, 190) 64.286%, rgb(255, 180, 194) 71.429%, rgb(255, 184, 197) 78.571%, rgb(255, 188, 201) 85.714%, rgb(255, 192, 204) 92.857%, rgb(255, 196, 208) 100%)" }}
        >
          <p className="-translate-x-1/2 absolute font-['Lora',sans-serif] font-medium leading-[28px] left-[172.87px] text-[20px] text-center text-white top-[16.16px] whitespace-nowrap">
            Get Started Now →
          </p>
        </button>

        <div className="absolute h-[15.991px] left-[0.01px] top-[756.01px] w-[344.974px]">
          <p className="-translate-x-1/2 absolute font-['Inter',sans-serif] font-normal leading-[16px] left-[172.83px] text-[#8b7e9e] text-[12px] text-center top-[0.59px] whitespace-nowrap">
            ✨ Free • Takes 30 seconds • Get personalized guidance
          </p>
        </div>
      </div>
    </div>
  );
}
