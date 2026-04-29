export interface WellnessPath {
  id: string;
  name: string;
  icon: string;
  color: string;
  tagline: string;
  description: string;
  focus: string;
  action: string;
  nutrition: string;
  mindset: string;
}

export const wellnessPaths: WellnessPath[] = [
  {
    id: 'energy-booster',
    name: 'The Energy Booster',
    icon: '⚡',
    color: '#FFB5A7',
    tagline: 'Ignite Your Inner Vitality',
    description: 'For those who need a spark of energy and sustained stamina',
    focus: 'Boosting daily energy levels and eliminating fatigue',
    action: '3-min Surya Namaskar (Sun Salutation) every morning',
    nutrition: 'Start day with seasonal fruits, swap afternoon caffeine for water',
    mindset: '"I am energized": Channel vitality through deep breathing'
  },
  {
    id: 'strength-seeker',
    name: 'The Strength Seeker',
    icon: '💪',
    color: '#E67D8E',
    tagline: 'Build Unshakeable Power',
    description: 'For those ready to build physical and mental resilience',
    focus: 'Developing core strength and body confidence',
    action: '15-min strength training with bodyweight or light weights',
    nutrition: 'Protein-rich meals: lentils, paneer, eggs, or chicken daily',
    mindset: '"I am powerful": Affirm your strength each morning'
  },
  {
    id: 'mobility-master',
    name: 'The Mobility Master',
    icon: '🤸',
    color: '#A697C2',
    tagline: 'Move with Freedom & Grace',
    description: 'For those seeking pain-free movement and flexibility',
    focus: 'Improving joint health and range of motion',
    action: '10-min joint mobility routine (wrists, ankles, neck, hips)',
    nutrition: 'Anti-inflammatory foods: turmeric, ginger, omega-3 sources',
    mindset: '"I move freely": Embrace fluid, pain-free movement'
  },
  {
    id: 'calm-cultivator',
    name: 'The Calm Cultivator',
    icon: '🧘‍♀️',
    color: '#A697C2',
    tagline: 'Find Your Inner Peace',
    description: 'For those seeking stress relief and mental clarity',
    focus: 'Reducing stress and cultivating emotional balance',
    action: '5-min meditation or deep breathing before bed',
    nutrition: 'Calming foods: chamomile tea, warm milk, almonds',
    mindset: '"I am at peace": Release tension, embrace calm'
  }
];

export const getPathById = (id: string): WellnessPath => {
  return wellnessPaths.find(p => p.id === id) || wellnessPaths[0];
};

export const getRandomPath = (): WellnessPath => {
  return wellnessPaths[Math.floor(Math.random() * wellnessPaths.length)];
};
