import { useState } from 'react';
import { ProtocolTemplate } from './ProtocolTemplate';
import { Download, Code } from 'lucide-react';

interface ProtocolContent {
  title: string;
  emoji: string;
  action: string;
  nutrition: string;
  mindset: string;
}

const protocols: Record<string, ProtocolContent> = {
  joint: {
    title: 'Joint Health',
    emoji: '🦴',
    action: '5-min Morning Joint Mobility (Rotate wrists, ankles, neck)',
    nutrition: 'Include one source of Omega-3 (Walnuts or Flax seeds) daily',
    mindset: '"Move like water": If you sit for 30 mins, stand for 1 min.'
  },
  energy: {
    title: 'Energy',
    emoji: '⚡',
    action: '3-min Surya Namaskar (Sun Salutation) upon waking',
    nutrition: 'Swap afternoon tea/coffee for a fruit or glass of water',
    mindset: '"The 10-second breath": Inhale deep when you feel a slump.'
  },
  stress: {
    title: 'Stress Relief',
    emoji: '🧘‍♀️',
    action: '5-min Evening Meditation (The "Habuild Calm")',
    nutrition: 'Add 1 cup of chamomile or green tea post-dinner',
    mindset: '"Screen Sunset": All screens off 1 hour before bed.'
  },
  weight: {
    title: 'Weight Management',
    emoji: '🌱',
    action: '15-min Brisk Walk post-dinner',
    nutrition: '"The 80% Rule": Stop eating when 80% full',
    mindset: '"Journaling": Track 1 healthy choice made today.'
  }
};

export function TemplatePreview() {
  const [selectedPriority, setSelectedPriority] = useState<string>('joint');
  const [userName, setUserName] = useState('Priya Sharma');
  const [showCode, setShowCode] = useState(false);

  const protocol = protocols[selectedPriority];

  const placeholderCode = `// PDFMonkey / Bannerbear Variables

{{User_Name}} = "${userName}"
{{Priority_Title}} = "${protocol.title}"
{{Priority_Emoji}} = "${protocol.emoji}"
{{Action}} = "${protocol.action}"
{{Nutrition}} = "${protocol.nutrition}"
{{Mindset}} = "${protocol.mindset}"

// Make.com Router Logic

IF priority = "${selectedPriority}" THEN
  SET Priority_Title = "${protocol.title}"
  SET Priority_Emoji = "${protocol.emoji}"
  SET Action = "${protocol.action}"
  SET Nutrition = "${protocol.nutrition}"
  SET Mindset = "${protocol.mindset}"
`;

  const handleScreenshot = () => {
    alert('Right-click on the template below and select "Save Image As..." or use your screenshot tool to capture this template for use in Canva/Figma.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3EFFF] to-[#FAF7FF] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Control Panel */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <h1 className="text-3xl mb-2 text-[#4A4458]" style={{ fontFamily: 'var(--font-serif)' }}>
            Protocol Template Preview
          </h1>
          <p className="text-[#8B7E9E] mb-6">
            Design reference for PDFMonkey / Bannerbear integration
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-[#8B7E9E] mb-2">
                User Name (<code className="text-xs bg-[#F3EFFF] px-1 rounded">{'{{User_Name}}'}</code>):
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#F3EFFF] focus:border-[#FF8B9E] focus:outline-none"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="block text-sm text-[#8B7E9E] mb-2">Priority Focus:</label>
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#F3EFFF] focus:border-[#FF8B9E] focus:outline-none"
              >
                <option value="joint">🦴 Joint Health</option>
                <option value="energy">⚡ Energy</option>
                <option value="stress">🧘‍♀️ Stress Relief</option>
                <option value="weight">🌱 Weight Management</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleScreenshot}
              className="flex items-center gap-2 px-6 py-3 bg-[#FF8B9E] text-white rounded-xl hover:bg-[#B86D2D] transition-all"
            >
              <Download className="w-4 h-4" />
              Save Template as Image
            </button>
            <button
              onClick={() => setShowCode(!showCode)}
              className="flex items-center gap-2 px-6 py-3 border-2 border-[#FF8B9E] text-[#FF8B9E] rounded-xl hover:bg-[#FF8B9E] hover:text-white transition-all"
            >
              <Code className="w-4 h-4" />
              {showCode ? 'Hide' : 'Show'} Variables
            </button>
          </div>

          {showCode && (
            <div className="mt-6 bg-[#4A4458] text-[#B8A8D8] rounded-xl p-5 overflow-x-auto">
              <pre className="text-sm font-mono whitespace-pre-wrap">{placeholderCode}</pre>
            </div>
          )}
        </div>

        {/* Template Preview */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-gray-200 to-gray-100 p-8 rounded-3xl shadow-2xl">
            <ProtocolTemplate
              userName={userName}
              priorityTitle={protocol.title}
              priorityEmoji={protocol.emoji}
              action={protocol.action}
              nutrition={protocol.nutrition}
              mindset={protocol.mindset}
            />
          </div>
        </div>

        {/* Documentation Link */}
        <div className="mt-8 text-center">
          <p className="text-[#8B7E9E] text-sm">
            📋 Full integration guide available in{' '}
            <code className="bg-[#F3EFFF] px-2 py-1 rounded text-[#FF8B9E]">TEMPLATE_GUIDE.md</code>
          </p>
        </div>
      </div>
    </div>
  );
}
