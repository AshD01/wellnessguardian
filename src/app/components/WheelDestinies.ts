export interface WheelDestiny {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  focus: string;
  action: string;
  nutrition: string;
  mindset: string;
}

export const wheelDestinies: WheelDestiny[] = [
  {
    id: 'warrior',
    name: 'The Warrior',
    icon: '⚔️',
    color: '#C87D3D',
    description: 'Path of Strength and Vitality',
    focus: 'Building physical and mental strength',
    action: '15-min strength training (bodyweight exercises or yoga)',
    nutrition: 'Add protein-rich foods: lentils, paneer, or eggs daily',
    mindset: '"I am strong": Affirm your power every morning'
  },
  {
    id: 'lotus',
    name: 'The Lotus',
    icon: '🪷',
    color: '#E589B5',
    description: 'Path of Flexibility and Grace',
    focus: 'Cultivating flexibility and inner peace',
    action: '10-min gentle stretching or yoga flow',
    nutrition: 'Hydrate with 8 glasses of water and herbal teas',
    mindset: '"I flow with ease": Embrace flexibility in body and mind'
  },
  {
    id: 'sun',
    name: 'The Sun',
    icon: '☀️',
    color: '#F4A261',
    description: 'Path of Energy and Radiance',
    focus: 'Boosting vitality and inner light',
    action: '3-min Surya Namaskar (Sun Salutation) at sunrise',
    nutrition: 'Include seasonal fruits and vitamin C sources',
    mindset: '"I radiate energy": Channel the sun\'s vitality'
  },
  {
    id: 'mountain',
    name: 'The Mountain',
    icon: '⛰️',
    color: '#8B7355',
    description: 'Path of Stability and Grounding',
    focus: 'Building endurance and stability',
    action: '20-min brisk walk or hiking',
    nutrition: 'Root vegetables and whole grains for grounding',
    mindset: '"I am unshakeable": Stand firm like a mountain'
  },
  {
    id: 'river',
    name: 'The River',
    icon: '🌊',
    color: '#5B9A96',
    description: 'Path of Flow and Cleansing',
    focus: 'Detoxification and renewal',
    action: '5-min deep breathing or pranayama',
    nutrition: 'Warm water with lemon upon waking, green vegetables',
    mindset: '"I release and renew": Flow like water'
  },
  {
    id: 'tree',
    name: 'The Tree',
    icon: '🌳',
    color: '#6B8E23',
    description: 'Path of Balance and Growth',
    focus: 'Finding equilibrium in all aspects',
    action: 'Tree pose practice (5 min) for balance',
    nutrition: 'Balanced meals with all food groups',
    mindset: '"I am rooted and growing": Balance stability with growth'
  },
  {
    id: 'flame',
    name: 'The Flame',
    icon: '🔥',
    color: '#D4183D',
    description: 'Path of Transformation and Passion',
    focus: 'Igniting metabolism and transformation',
    action: '10-min high-energy movement or dance',
    nutrition: 'Metabolism-boosting spices: turmeric, ginger, cayenne',
    mindset: '"I transform with fire": Embrace change with passion'
  },
  {
    id: 'moon',
    name: 'The Moon',
    icon: '🌙',
    color: '#9B9ECE',
    description: 'Path of Rest and Restoration',
    focus: 'Deep rest and emotional healing',
    action: '5-min evening meditation or gentle stretching',
    nutrition: 'Calming foods: warm milk, almonds, chamomile tea',
    mindset: '"I rest deeply": Honor the power of restoration'
  }
];

export const getDestinyByIndex = (index: number): WheelDestiny => {
  return wheelDestinies[index % wheelDestinies.length];
};
