const weapons = [
  // Power Pistols
  {
    id: 'malorian_3516',
    name: 'Malorian Arms 3516',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Medium',
    magazine: '12',
    weight: '3.2',
    rarity: 'Legendary',
    description: 'Johnny Silverhand\'s custom handgun. A powerful, highly accurate pistol with a distinctive design.',
    effects: [
      'Chance to apply Burn',
      'Increased damage to enemies at full health',
      'Can be charged for a powerful shot'
    ]
  },
  {
    id: 'liberty',
    name: 'Liberty',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Medium',
    magazine: '12',
    weight: '2.8',
    rarity: 'Uncommon',
    description: 'A reliable and powerful semi-automatic pistol with good stopping power.',
    effects: [
      'High damage per shot',
      'Good accuracy',
      'Common ammunition type'
    ]
  },
  {
    id: 'unity',
    name: 'Unity',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Moderate',
    fireRate: 'High',
    range: 'Medium',
    magazine: '20',
    weight: '2.5',
    rarity: 'Common',
    description: 'A standard-issue sidearm with balanced performance.',
    effects: [
      'Good all-around performance',
      'Common ammunition type',
      'Easy to handle'
    ]
  },
  {
    id: 'calico',
    name: 'Calico',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Moderate',
    fireRate: 'High',
    range: 'Short',
    magazine: '25',
    weight: '2.1',
    rarity: 'Common',
    description: 'A compact, high-capacity SMG-style pistol.',
    effects: [
      'High fire rate',
      'Good for close-quarters combat'
    ]
  },
  {
    id: 'd5_sidewinder',
    name: 'D5 Sidewinder',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Very High',
    fireRate: 'Slow',
    range: 'Medium',
    magazine: '6',
    weight: '3.5',
    rarity: 'Rare',
    description: 'A heavy revolver with massive stopping power but slow rate of fire.',
    effects: [
      'High damage per shot',
      'Can pierce armor',
      'Slow reload speed'
    ]
  },
  {
    id: 'm76e_omaha',
    name: 'M-76E Omaha',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'High',
    fireRate: 'Very High',
    range: 'Short',
    magazine: '20',
    weight: '2.3',
    rarity: 'Uncommon',
    description: 'A compact machine pistol with a high rate of fire.',
    effects: [
      'Very high fire rate',
      'Good for close quarters',
      'High recoil'
    ]
  },
  {
    id: 'm10af_lexington',
    name: 'M-10AF Lexington',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Moderate',
    fireRate: 'High',
    range: 'Medium',
    magazine: '18',
    weight: '2.4',
    rarity: 'Common',
    description: 'A standard-issue police sidearm with good all-around performance.',
    effects: [
      'Balanced performance',
      'Good accuracy',
      'Common ammunition'
    ]
  },
  {
    id: 'kobra',
    name: 'Kobra',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Moderate',
    fireRate: 'Moderate',
    range: 'Medium',
    magazine: '15',
    weight: '2.8',
    rarity: 'Common',
    description: 'A reliable, well-balanced combat pistol.',
    effects: [
      'Good accuracy',
      'Solid damage'
    ]
  },
  {
    id: 'yukimura',
    name: 'Yukimura',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Very High',
    fireRate: 'Very High',
    range: 'Medium',
    magazine: '20',
    weight: '2.8',
    rarity: 'Epic',
    description: 'A high-tech pistol with smart targeting capabilities and high rate of fire.',
    effects: [
      'Smart targeting',
      'High fire rate',
      'Good for close combat'
    ]
  },
  {
    id: 'kenshin',
    name: 'Kenshin',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '12',
    weight: '2.9',
    rarity: 'Rare',
    description: 'A high-precision pistol with excellent range and stopping power.',
    effects: [
      'High accuracy',
      'Good range',
      'Reduced recoil'
    ]
  },
  {
    id: 'kenshin_archangel',
    name: 'Kenshin (Archangel)',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Very High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '12',
    weight: '3.0',
    rarity: 'Legendary',
    description: 'A custom Kenshin pistol with enhanced capabilities, used by Rogue Amendiares.',
    effects: [
      'Increased damage',
      'Improved accuracy',
      'Chance to apply Bleed'
    ]
  },
  {
    id: 'm76e_dying_light',
    name: 'M-76E Omaha (Dying Light)',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Very High',
    fireRate: 'Very High',
    range: 'Short',
    magazine: '20',
    weight: '2.3',
    rarity: 'Legendary',
    description: 'An iconic version of the M-76E Omaha with enhanced capabilities.',
    effects: [
      'Increased damage',
      'Chance to apply Burn',
      'Faster reload speed'
    ]
  },
  {
    id: 'm10af_kongou',
    name: 'M-10AF Lexington (Kongou)',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'High',
    fireRate: 'High',
    range: 'Medium',
    magazine: '18',
    weight: '2.4',
    rarity: 'Legendary',
    description: 'An iconic Lexington pistol with a gold finish, belonging to Saburo Arasaka.',
    effects: [
      'Increased damage',
      'Improved accuracy',
      'Reduced recoil'
    ]
  },
  {
    id: 'liberty_chingona',
    name: 'Liberty (La Chingona Dorada)',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Very High',
    fireRate: 'High',
    range: 'Medium',
    magazine: '12',
    weight: '2.8',
    rarity: 'Legendary',
    description: 'Jackie Welles\'s custom Liberty pistol with gold engravings and enhanced performance.',
    effects: [
      'Increased damage',
      'Faster fire rate',
      'Unique visual design'
    ]
  },
  {
    id: 'unity_crash',
    name: 'Unity (Crash)',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'High',
    fireRate: 'Very High',
    range: 'Medium',
    magazine: '20',
    weight: '2.5',
    rarity: 'Legendary',
    description: 'A heavily modified Unity pistol with enhanced firepower and unique paint job.',
    effects: [
      'Increased damage',
      'Reduced recoil',
      'Faster reload speed'
    ]
  },
  {
    id: 'd5_comrade',
    name: 'D5 Sidewinder (Comrade\'s Hammer)',
    tech: 'Power',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Extremely High',
    fireRate: 'Very Slow',
    range: 'Long',
    magazine: '1',
    weight: '3.8',
    rarity: 'Legendary',
    description: 'A heavily modified D5 Sidewinder that fires explosive rounds with devastating power.',
    effects: [
      'Massive damage per shot',
      'Explosive rounds',
      'Very slow fire rate'
    ]
  },
  {
    id: 'm179e_achilles',
    name: 'M-179E Achilles',
    tech: 'Tech',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '8',
    weight: '3.2',
    rarity: 'Rare',
    description: 'A precision tech pistol that can charge shots for increased damage.',
    effects: [
      'Charged shots deal bonus damage',
      'High accuracy',
      'Can pierce cover'
    ]
  },
  {
    id: 'm179e_breakthrough',
    name: 'M-179E Achilles (Breakthrough)',
    tech: 'Tech',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Very High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '8',
    weight: '3.2',
    rarity: 'Legendary',
    description: 'A modified Achilles with enhanced penetration capabilities.',
    effects: [
      'Shots pass through walls',
      'Increased damage to armor',
      'Charged shots deal explosive damage'
    ]
  },
  {
    id: 'm179e_psalm',
    name: 'M-179E Achilles (Psalm 11:6)',
    tech: 'Tech',
    type: 'Pistol',
    damage: 'Thermal',
    dps: 'Very High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '8',
    weight: '3.2',
    rarity: 'Legendary',
    description: 'A unique Achilles that deals thermal damage and has a chance to apply burn.',
    effects: [
      'Deals thermal damage',
      'Chance to apply Burn',
      'Increased damage to organic targets'
    ]
  },
  {
    id: 'widow_maker',
    name: 'Widow Maker',
    tech: 'Tech',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Medium',
    magazine: '10',
    weight: '3.5',
    rarity: 'Legendary',
    description: 'A high-tech pistol with advanced targeting capabilities.',
    effects: [
      'Enhanced accuracy',
      'Increased damage to weak points',
      'Can be charged for precision shots'
    ]
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    tech: 'Tech',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Moderate',
    fireRate: 'High',
    range: 'Medium',
    magazine: '18',
    weight: '2.5',
    rarity: 'Rare',
    description: 'A compact tech pistol with adaptive targeting.',
    effects: [
      'Automatic target tracking',
      'Increased damage to moving targets'
    ]
  },
  {
    id: 'viper',
    name: 'Viper',
    tech: 'Tech',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '12',
    weight: '3.0',
    rarity: 'Rare',
    description: 'A precision tech pistol designed for headshots.',
    effects: [
      'Increased critical hit chance',
      'Bonus damage to headshots'
    ]
  },
  {
    id: 'smart_3516',
    name: 'Smart 3516',
    tech: 'Smart',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Medium',
    magazine: '12',
    weight: '3.2',
    rarity: 'Legendary',
    description: 'Smart version of the Malorian 3516 with AI targeting.',
    effects: [
      'AI-assisted targeting',
      'Enhanced accuracy',
      'Can lock onto multiple targets'
    ]
  },
  {
    id: 'smart_kobra',
    name: 'Smart Kobra',
    tech: 'Smart',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Moderate',
    fireRate: 'Moderate',
    range: 'Medium',
    magazine: '15',
    weight: '2.8',
    rarity: 'Rare',
    description: 'Smart version of the Kobra pistol with targeting assistance.',
    effects: [
      'AI target tracking',
      'Automatic threat assessment',
      'Enhanced accuracy'
    ]
  },
  {
    id: 'smart_scorpion',
    name: 'Smart Scorpion',
    tech: 'Smart',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Moderate',
    fireRate: 'High',
    range: 'Medium',
    magazine: '18',
    weight: '2.5',
    rarity: 'Rare',
    description: 'A compact smart pistol with rapid fire capability.',
    effects: [
      'AI-assisted target acquisition',
      'Automatic target prioritization',
      'Enhanced fire rate'
    ]
  },
  {
    id: 'smart_m76e',
    name: 'M-76E Omaha (Smart)',
    tech: 'Smart',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'High',
    fireRate: 'Very High',
    range: 'Short',
    magazine: '20',
    weight: '2.3',
    rarity: 'Rare',
    description: 'Smart version of the M-76E Omaha with AI targeting.',
    effects: [
      'AI-assisted tracking',
      'Improved accuracy while moving',
      'Reduced spread'
    ]
  },
  {
    id: 'smart_m10af',
    name: 'M-10AF Lexington (Smart)',
    tech: 'Smart',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Moderate',
    fireRate: 'High',
    range: 'Medium',
    magazine: '18',
    weight: '2.4',
    rarity: 'Uncommon',
    description: 'Smart version of the standard Lexington sidearm.',
    effects: [
      'Basic smart targeting',
      'Improved accuracy',
      'Reduced recoil'
    ]
  },
  {
    id: 'smart_kenshin',
    name: 'Kenshin (Smart)',
    tech: 'Smart',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '12',
    weight: '2.9',
    rarity: 'Rare',
    description: 'Smart version of the Kenshin with enhanced targeting systems.',
    effects: [
      'Improved headshot accuracy',
      'Target tracking',
      'Reduced bullet drop'
    ]
  },
  {
    id: 'm76e_skippy',
    name: 'M-76E Omaha (Skippy)',
    tech: 'Smart',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Very High',
    fireRate: 'Very High',
    range: 'Medium',
    magazine: '30',
    weight: '2.3',
    rarity: 'Legendary',
    description: 'A talking smart pistol with a unique AI personality. Can switch between lethal and non-lethal modes.',
    effects: [
      'AI personality',
      'Auto-targeting system',
      'Can switch firing modes',
      'Increases headshot damage over time'
    ]
  },
  {
    id: 'm10af_genjiroh',
    name: 'M-10AF Lexington (Genjiroh)',
    tech: 'Smart',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'High',
    fireRate: 'Very High',
    range: 'Medium',
    magazine: '30',
    weight: '2.4',
    rarity: 'Legendary',
    description: 'An iconic smart pistol with increased magazine capacity and fire rate.',
    effects: [
      'Increased magazine size',
      'Faster fire rate',
      'Improved target tracking',
      'Reduced recoil'
    ]
  },
  {
    id: 'kenshin_archangel_smart',
    name: 'Kenshin (Archangel - Smart)',
    tech: 'Smart',
    type: 'Pistol',
    damage: 'Physical',
    dps: 'Very High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '15',
    weight: '3.0',
    rarity: 'Legendary',
    description: 'A smart version of the Archangel pistol with enhanced targeting systems.',
    effects: [
      'Improved headshot accuracy',
      'Target tracking',
      'Chance to apply EMP on hit',
      'Reduced bullet drop'
    ]
  },
  // ========== REVOLVERS ==========
  {
    id: 'nue',
    name: 'Nue',
    tech: 'Power',
    type: 'Revolver',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Slow',
    range: 'Long',
    magazine: '6',
    weight: '3.5',
    rarity: 'Uncommon',
    description: 'A powerful revolver with excellent stopping power and accuracy at range.',
    effects: [
      'High damage per shot',
      'Good accuracy',
      'Slow reload speed'
    ]
  },
  {
    id: 'overture',
    name: 'Overture',
    tech: 'Power',
    type: 'Revolver',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '6',
    weight: '3.3',
    rarity: 'Common',
    description: 'A standard-issue revolver with good balance of power and fire rate.',
    effects: [
      'Reliable performance',
      'Good accuracy',
      'Common ammunition'
    ]
  },
  {
    id: 'archangel',
    name: 'Archangel',
    tech: 'Power',
    type: 'Revolver',
    damage: 'Very High',
    dps: 'Very High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '6',
    weight: '3.6',
    rarity: 'Legendary',
    description: 'A custom revolver with enhanced capabilities, used by Rogue Amendiares.',
    effects: [
      'Increased damage',
      'Improved accuracy',
      'Chance to apply Bleed'
    ]
  },
  {
    id: 'comrades_hammer',
    name: 'Comrade\'s Hammer',
    tech: 'Tech',
    type: 'Revolver',
    damage: 'Extremely High',
    dps: 'Very High',
    fireRate: 'Very Slow',
    range: 'Long',
    magazine: '1',
    weight: '4.0',
    rarity: 'Legendary',
    description: 'A heavily modified revolver that fires explosive rounds with devastating power.',
    effects: [
      'Massive damage per shot',
      'Explosive rounds',
      'Very slow fire rate',
      'Single shot before reload'
    ]
  },
  {
    id: 'crash',
    name: 'Crash',
    tech: 'Power',
    type: 'Revolver',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '6',
    weight: '3.5',
    rarity: 'Legendary',
    description: 'A unique revolver with a distinctive sound and increased stopping power.',
    effects: [
      'Increased damage',
      'Chance to disorient enemies',
      'Unique firing sound'
    ]
  },
  {
    id: 'doom_doom',
    name: 'Doom Doom',
    tech: 'Power',
    type: 'Revolver',
    damage: 'Very High',
    dps: 'Extremely High',
    fireRate: 'Very High',
    range: 'Medium',
    magazine: '6',
    weight: '3.8',
    rarity: 'Legendary',
    description: 'A heavily modified revolver with an extremely high rate of fire for its class.',
    effects: [
      'Very high fire rate',
      'Increased recoil',
      'Reduced accuracy'
    ]
  },
  {
    id: 'la_chingona_dorada',
    name: 'La Chingona Dorada',
    tech: 'Power',
    type: 'Revolver',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '6',
    weight: '3.5',
    rarity: 'Legendary',
    description: 'Jackie Welles\'s custom revolver with gold engravings and enhanced performance.',
    effects: [
      'Increased damage',
      'Improved accuracy',
      'Unique visual design'
    ]
  },
  {
    id: 'mox',
    name: 'Mox',
    tech: 'Power',
    type: 'Revolver',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '6',
    weight: '3.4',
    rarity: 'Epic',
    description: 'A custom revolver with a distinctive pink finish, associated with the Mox gang.',
    effects: [
      'Increased damage to human targets',
      'Chance to apply Bleed',
      'Reduced recoil'
    ]
  },
  {
    id: 'plan_b',
    name: 'Plan B',
    tech: 'Power',
    type: 'Revolver',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '6',
    weight: '3.5',
    rarity: 'Legendary',
    description: 'A high-precision revolver with enhanced stopping power.',
    effects: [
      'Increased headshot damage',
      'Improved accuracy',
      'Reduced bullet drop'
    ]
  },
  {
    id: 'pride',
    name: 'Pride',
    tech: 'Power',
    type: 'Revolver',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '6',
    weight: '3.6',
    rarity: 'Legendary',
    description: 'A custom revolver with a sleek black finish and enhanced performance.',
    effects: [
      'Increased damage',
      'Improved accuracy',
      'Reduced recoil'
    ]
  },
  {
    id: 'sasquatchs_hammer',
    name: 'Sasquatch\'s Hammer',
    tech: 'Power',
    type: 'Revolver',
    damage: 'Extremely High',
    dps: 'Very High',
    fireRate: 'Very Slow',
    range: 'Long',
    magazine: '6',
    weight: '4.2',
    rarity: 'Legendary',
    description: 'A massive revolver with incredible stopping power, used by Sasquatch.',
    effects: [
      'Extremely high damage',
      'Chance to knock down enemies',
      'Very slow fire rate',
      'High recoil'
    ]
  },
  {
    id: 'satori',
    name: 'Satori',
    tech: 'Power',
    type: 'Revolver',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '6',
    weight: '3.5',
    rarity: 'Legendary',
    description: 'A unique revolver with a distinctive design and enhanced capabilities.',
    effects: [
      'Increased critical hit chance',
      'Chance to apply Bleed',
      'Reduced recoil'
    ]
  },
  {
    id: 'silenced_pistol',
    name: 'Silenced Pistol',
    tech: 'Power',
    type: 'Revolver',
    damage: 'High',
    dps: 'Moderate',
    fireRate: 'Moderate',
    range: 'Medium',
    magazine: '6',
    weight: '3.3',
    rarity: 'Rare',
    description: 'A suppressed revolver designed for stealth operations.',
    effects: [
      'Reduced noise',
      'Reduced detection',
      'Decreased range'
    ]
  },
  {
    id: 'silverhand_gun',
    name: 'Johnny Silverhand\'s Gun',
    tech: 'Power',
    type: 'Revolver',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '6',
    weight: '3.6',
    rarity: 'Legendary',
    description: 'A custom revolver used by Johnny Silverhand, with enhanced performance.',
    effects: [
      'Increased damage',
      'Chance to apply Burn',
      'Unique visual effects'
    ]
  },
  {
    id: 'survivor',
    name: 'Survivor',
    tech: 'Power',
    type: 'Revolver',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '6',
    weight: '3.5',
    rarity: 'Epic',
    description: 'A reliable revolver that increases in power when health is low.',
    effects: [
      'Increased damage at low health',
      'Improved accuracy',
      'Faster reload when critically injured'
    ]
  },
  {
    id: 'tinker_bell',
    name: 'Tinker Bell',
    tech: 'Power',
    type: 'Revolver',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '6',
    weight: '3.4',
    rarity: 'Legendary',
    description: 'A unique revolver with a distinctive design and enhanced capabilities.',
    effects: [
      'Increased critical hit damage',
      'Chance to apply random status effect',
      'Reduced recoil'
    ]
  },
  {
    id: 'yorinobus_gun',
    name: 'Yorinobu\'s Gun',
    tech: 'Power',
    type: 'Revolver',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '6',
    weight: '3.5',
    rarity: 'Legendary',
    description: 'A custom revolver used by Yorinobu Arasaka, with enhanced performance.',
    effects: [
      'Increased damage to organic targets',
      'Chance to apply EMP on hit',
      'Reduced recoil'
    ]
  },
  // ========== SUBMACHINE GUNS ==========
  {
    id: 'shingen_mark_v',
    name: 'Shingen Mark V',
    tech: 'Smart',
    type: 'Submachine Gun',
    damage: 'Moderate',
    dps: 'Very High',
    fireRate: 'Very High',
    range: 'Medium',
    magazine: '40',
    weight: '4.2',
    rarity: 'Rare',
    description: 'A high-tech smart SMG with excellent tracking capabilities.',
    effects: [
      'Smart targeting system',
      'Homing bullets',
      'Reduced damage per shot',
      'High ammo consumption'
    ]
  },
  {
    id: 'yukimura',
    name: 'Yukimura',
    tech: 'Power',
    type: 'Submachine Gun',
    damage: 'Moderate',
    dps: 'High',
    fireRate: 'Very High',
    range: 'Short',
    magazine: '30',
    weight: '3.8',
    rarity: 'Uncommon',
    description: 'A compact and reliable SMG favored by many mercenaries.',
    effects: [
      'Good hip-fire accuracy',
      'Low recoil',
      'Fast reload speed'
    ]
  },
  {
    id: 'fenrir',
    name: 'Fenrir',
    tech: 'Power',
    type: 'Submachine Gun',
    damage: 'High',
    dps: 'Very High',
    fireRate: 'High',
    range: 'Medium',
    magazine: '35',
    weight: '4.0',
    rarity: 'Epic',
    description: 'A high-powered SMG with incendiary rounds.',
    effects: [
      'Chance to apply Burn',
      'Increased damage over time',
      'Reduced accuracy at long range'
    ]
  },
  {
    id: 'yukimura_kommando',
    name: 'Yukimura Kommando',
    tech: 'Power',
    type: 'Submachine Gun',
    damage: 'Moderate',
    dps: 'High',
    fireRate: 'Very High',
    range: 'Medium',
    magazine: '35',
    weight: '3.9',
    rarity: 'Rare',
    description: 'A military-grade variant of the Yukimura with improved performance.',
    effects: [
      'Increased damage',
      'Better recoil control',
      'Faster reload speed'
    ]
  },
  {
    id: 'yukimura_sidewinder',
    name: 'Yukimura Sidewinder',
    tech: 'Tech',
    type: 'Submachine Gun',
    damage: 'High',
    dps: 'Very High',
    fireRate: 'High',
    range: 'Medium',
    magazine: '30',
    weight: '4.1',
    rarity: 'Epic',
    description: 'A tech-enhanced Yukimura with charged shot capability.',
    effects: [
      'Can charge shots for increased damage',
      'Penetrates cover',
      'Slower rate of fire'
    ]
  },
  {
    id: 'yukimura_neon_arrow',
    name: 'Yukimura Neon Arrow',
    tech: 'Power',
    type: 'Submachine Gun',
    damage: 'Moderate',
    dps: 'Very High',
    fireRate: 'Extremely High',
    range: 'Short',
    magazine: '40',
    weight: '4.0',
    rarity: 'Legendary',
    description: 'A unique Yukimura with a distinctive neon design and enhanced fire rate.',
    effects: [
      'Extremely high fire rate',
      'Increased recoil',
      'Chance to disorient enemies',
      'Unique visual effects'
    ]
  },
  {
    id: 'yukimura_sidewinder_spec',
    name: 'Yukimura Sidewinder Spec',
    tech: 'Tech',
    type: 'Submachine Gun',
    damage: 'Very High',
    dps: 'Extremely High',
    fireRate: 'High',
    range: 'Medium',
    magazine: '25',
    weight: '4.3',
    rarity: 'Legendary',
    description: 'A specialized version of the Sidewinder with enhanced capabilities.',
    effects: [
      'Charged shots deal massive damage',
      'Chance to stun enemies',
      'Reduced magazine size',
      'Increased weight'
    ]
  },
  {
    id: 'yukimura_sidewinder_legendary',
    name: 'Yukimura Sidewinder (Legendary)',
    tech: 'Tech',
    type: 'Submachine Gun',
    damage: 'Very High',
    dps: 'Extremely High',
    fireRate: 'High',
    range: 'Medium',
    magazine: '30',
    weight: '4.2',
    rarity: 'Legendary',
    description: 'A legendary variant of the Sidewinder with unparalleled performance.',
    effects: [
      'Increased damage',
      'Faster charge time',
      'Chance to apply EMP on hit',
      'Reduced recoil'
    ]
  },
  {
    id: 'yukimura_sidewinder_epic',
    name: 'Yukimura Sidewinder (Epic)',
    tech: 'Tech',
    type: 'Submachine Gun',
    damage: 'High',
    dps: 'Very High',
    fireRate: 'High',
    range: 'Medium',
    magazine: '30',
    weight: '4.1',
    rarity: 'Epic',
    description: 'A high-quality Sidewinder with excellent performance.',
    effects: [
      'Good damage output',
      'Reliable performance',
      'Reduced recoil',
      'Faster reload speed'
    ]
  },
  {
    id: 'yukimura_sidewinder_rare',
    name: 'Yukimura Sidewinder (Rare)',
    tech: 'Tech',
    type: 'Submachine Gun',
    damage: 'Moderate',
    dps: 'High',
    fireRate: 'High',
    range: 'Medium',
    magazine: '30',
    weight: '4.0',
    rarity: 'Rare',
    description: 'A standard-issue Sidewinder with decent performance.',
    effects: [
      'Reliable damage output',
      'Standard features',
      'Average recoil control'
    ]
  },
  {
    id: 'yukimura_sidewinder_uncommon',
    name: 'Yukimura Sidewinder (Uncommon)',
    tech: 'Tech',
    type: 'Submachine Gun',
    damage: 'Moderate',
    dps: 'Moderate',
    fireRate: 'High',
    range: 'Medium',
    magazine: '25',
    weight: '4.0',
    rarity: 'Uncommon',
    description: 'A basic model of the Sidewinder with standard capabilities.',
    effects: [
      'Standard performance',
      'Basic features',
      'Slightly reduced magazine size'
    ]
  },
  {
    id: 'yukimura_sidewinder_common',
    name: 'Yukimura Sidewinder (Common)',
    tech: 'Tech',
    type: 'Submachine Gun',
    damage: 'Low',
    dps: 'Moderate',
    fireRate: 'High',
    range: 'Medium',
    magazine: '20',
    weight: '3.9',
    rarity: 'Common',
    description: 'A basic version of the Sidewinder with reduced capabilities.',
    effects: [
      'Reduced damage',
      'Standard features',
      'Smaller magazine size'
    ]
  },
  {
    id: 'shingen_mark_iv',
    name: 'Shingen Mark IV',
    tech: 'Smart',
    type: 'Submachine Gun',
    damage: 'Moderate',
    dps: 'High',
    fireRate: 'Very High',
    range: 'Medium',
    magazine: '35',
    weight: '4.0',
    rarity: 'Rare',
    description: 'A smart SMG with good tracking capabilities and fire rate.',
    effects: [
      'Smart targeting system',
      'Homing bullets',
      'Reduced damage per shot'
    ]
  },
  {
    id: 'shingen_mark_iii',
    name: 'Shingen Mark III',
    tech: 'Smart',
    type: 'Submachine Gun',
    damage: 'Moderate',
    dps: 'Moderate',
    fireRate: 'High',
    range: 'Medium',
    magazine: '30',
    weight: '3.9',
    rarity: 'Uncommon',
    description: 'An earlier model of the Shingen with decent performance.',
    effects: [
      'Basic smart targeting',
      'Standard features',
      'Average damage output'
    ]
  },
  {
    id: 'shingen_mark_ii',
    name: 'Shingen Mark II',
    tech: 'Smart',
    type: 'Submachine Gun',
    damage: 'Low',
    dps: 'Moderate',
    fireRate: 'High',
    range: 'Medium',
    magazine: '25',
    weight: '3.8',
    rarity: 'Common',
    description: 'An entry-level smart SMG with basic capabilities.',
    effects: [
      'Basic smart features',
      'Reduced damage',
      'Smaller magazine'
    ]
  },
  {
    id: 'fenrir_legendary',
    name: 'Fenrir (Legendary)',
    tech: 'Power',
    type: 'Submachine Gun',
    damage: 'Very High',
    dps: 'Extremely High',
    fireRate: 'High',
    range: 'Medium',
    magazine: '40',
    weight: '4.2',
    rarity: 'Legendary',
    description: 'A legendary variant of the Fenrir with enhanced incendiary capabilities.',
    effects: [
      'High chance to apply Burn',
      'Increased damage over time',
      'Larger magazine',
      'Improved accuracy'
    ]
  },
  {
    id: 'fenrir_rare',
    name: 'Fenrir (Rare)',
    tech: 'Power',
    type: 'Submachine Gun',
    damage: 'High',
    dps: 'High',
    fireRate: 'High',
    range: 'Medium',
    magazine: '35',
    weight: '4.0',
    rarity: 'Rare',
    description: 'A rare version of the Fenrir with good performance.',
    effects: [
      'Chance to apply Burn',
      'Good damage output',
      'Standard features'
    ]
  },
  // ========== SHOTGUNS ==========
  {
    id: 'carnage',
    name: 'Carnage',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'Very High',
    dps: 'Very High',
    fireRate: 'Slow',
    range: 'Short',
    magazine: '6',
    weight: '6.5',
    rarity: 'Rare',
    description: 'A powerful pump-action shotgun with devastating close-range damage.',
    effects: [
      'High damage per shot',
      'Wide spread',
      'Slow rate of fire',
      'Effective at close range'
    ]
  },
  {
    id: 'crusher',
    name: 'Crusher',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'Extremely High',
    dps: 'Very High',
    fireRate: 'Very Slow',
    range: 'Short',
    magazine: '4',
    weight: '7.0',
    rarity: 'Epic',
    description: 'A heavy shotgun designed to take down the toughest targets.',
    effects: [
      'Massive damage per shot',
      'Very slow rate of fire',
      'High recoil',
      'Chance to stagger enemies'
    ]
  },
  {
    id: 'bloody_maria',
    name: 'Bloody Maria',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Short',
    magazine: '8',
    weight: '6.0',
    rarity: 'Legendary',
    description: 'A unique shotgun with a distinctive design and enhanced capabilities.',
    effects: [
      'Chance to cause Bleeding',
      'Increased damage to bleeding targets',
      'Unique visual effects'
    ]
  },
  {
    id: 'mox_shotgun',
    name: 'Mox',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Short',
    magazine: '10',
    weight: '5.8',
    rarity: 'Epic',
    description: 'A sawed-off shotgun with a distinctive pink finish, associated with the Mox gang.',
    effects: [
      'Wide spread',
      'Fast rate of fire for a shotgun',
      'Reduced range',
      'Increased damage at point-blank range'
    ]
  },
  {
    id: 'satara',
    name: 'Satara',
    tech: 'Tech',
    type: 'Shotgun',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Slow',
    range: 'Medium',
    magazine: '2',
    weight: '6.8',
    rarity: 'Rare',
    description: 'A tech shotgun that fires charged projectiles that explode on impact.',
    effects: [
      'Can charge shots for increased damage',
      'Projectiles explode on impact',
      'Very slow rate of fire',
      'Penetrates cover'
    ]
  },
  {
    id: 'headsman',
    name: 'Headsman',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'Extremely High',
    dps: 'Very High',
    fireRate: 'Very Slow',
    range: 'Short',
    magazine: '2',
    weight: '7.5',
    rarity: 'Legendary',
    description: 'A massive double-barreled shotgun with incredible stopping power.',
    effects: [
      'Extremely high damage per shot',
      'Fires both barrels simultaneously',
      'Very slow reload',
      'Chance to dismember enemies'
    ]
  },
  {
    id: 'testera',
    name: 'Testera',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'High',
    dps: 'Very High',
    fireRate: 'High',
    range: 'Short',
    magazine: '12',
    weight: '5.5',
    rarity: 'Rare',
    description: 'A semi-automatic shotgun with a high rate of fire.',
    effects: [
      'Fast rate of fire for a shotgun',
      'Moderate recoil',
      'Good for close-quarters combat'
    ]
  },
  {
    id: 'testera_legendary',
    name: 'Testera (Legendary)',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'Very High',
    dps: 'Extremely High',
    fireRate: 'Very High',
    range: 'Short',
    magazine: '15',
    weight: '5.7',
    rarity: 'Legendary',
    description: 'A legendary variant of the Testera with enhanced capabilities.',
    effects: [
      'Increased damage',
      'Faster rate of fire',
      'Larger magazine',
      'Chance to apply Bleed'
    ]
  },
  {
    id: 'testera_epic',
    name: 'Testera (Epic)',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'High',
    dps: 'Very High',
    fireRate: 'High',
    range: 'Short',
    magazine: '12',
    weight: '5.6',
    rarity: 'Epic',
    description: 'An epic variant of the Testera with improved performance.',
    effects: [
      'Good damage output',
      'Reliable performance',
      'Reduced recoil',
      'Faster reload speed'
    ]
  },
  {
    id: 'testera_rare',
    name: 'Testera (Rare)',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Short',
    magazine: '10',
    weight: '5.5',
    rarity: 'Rare',
    description: 'A standard-issue Testera with good performance.',
    effects: [
      'Reliable damage output',
      'Standard features',
      'Average recoil control'
    ]
  },
  {
    id: 'testera_uncommon',
    name: 'Testera (Uncommon)',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'Moderate',
    dps: 'Moderate',
    fireRate: 'Moderate',
    range: 'Short',
    magazine: '8',
    weight: '5.4',
    rarity: 'Uncommon',
    description: 'A basic model of the Testera with standard capabilities.',
    effects: [
      'Standard performance',
      'Basic features',
      'Slightly reduced magazine size'
    ]
  },
  {
    id: 'testera_common',
    name: 'Testera (Common)',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'Low',
    dps: 'Moderate',
    fireRate: 'Moderate',
    range: 'Short',
    magazine: '6',
    weight: '5.3',
    rarity: 'Common',
    description: 'A basic version of the Testera with reduced capabilities.',
    effects: [
      'Reduced damage',
      'Standard features',
      'Smaller magazine size'
    ]
  },
  {
    id: 'savage_linnet',
    name: 'Savage Linnet',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'High',
    dps: 'Very High',
    fireRate: 'High',
    range: 'Short',
    magazine: '8',
    weight: '6.0',
    rarity: 'Epic',
    description: 'A powerful semi-automatic shotgun with excellent stopping power.',
    effects: [
      'High damage per shot',
      'Fast rate of fire',
      'Good for close-quarters combat',
      'Moderate recoil'
    ]
  },
  {
    id: 'savage_linnet_legendary',
    name: 'Savage Linnet (Legendary)',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'Very High',
    dps: 'Extremely High',
    fireRate: 'Very High',
    range: 'Short',
    magazine: '10',
    weight: '6.2',
    rarity: 'Legendary',
    description: 'A legendary variant of the Savage Linnet with enhanced capabilities.',
    effects: [
      'Increased damage',
      'Faster rate of fire',
      'Larger magazine',
      'Chance to apply Bleed'
    ]
  },
  {
    id: 'savage_linnet_epic',
    name: 'Savage Linnet (Epic)',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'High',
    dps: 'Very High',
    fireRate: 'High',
    range: 'Short',
    magazine: '8',
    weight: '6.1',
    rarity: 'Epic',
    description: 'An epic variant of the Savage Linnet with improved performance.',
    effects: [
      'Good damage output',
      'Reliable performance',
      'Reduced recoil',
      'Faster reload speed'
    ]
  },
  {
    id: 'savage_linnet_rare',
    name: 'Savage Linnet (Rare)',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Short',
    magazine: '6',
    weight: '5.9',
    rarity: 'Rare',
    description: 'A standard-issue Savage Linnet with good performance.',
    effects: [
      'Reliable damage output',
      'Standard features',
      'Average recoil control'
    ]
  },
  {
    id: 'savage_linnet_uncommon',
    name: 'Savage Linnet (Uncommon)',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'Moderate',
    dps: 'Moderate',
    fireRate: 'Moderate',
    range: 'Short',
    magazine: '4',
    weight: '5.8',
    rarity: 'Uncommon',
    description: 'A basic model of the Savage Linnet with standard capabilities.',
    effects: [
      'Standard performance',
      'Basic features',
      'Slightly reduced magazine size'
    ]
  },
  {
    id: 'savage_linnet_common',
    name: 'Savage Linnet (Common)',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'Low',
    dps: 'Moderate',
    fireRate: 'Moderate',
    range: 'Short',
    magazine: '2',
    weight: '5.7',
    rarity: 'Common',
    description: 'A basic version of the Savage Linnet with reduced capabilities.',
    effects: [
      'Reduced damage',
      'Standard features',
      'Smaller magazine size'
    ]
  },
  {
    id: 'doom_doom_shotgun',
    name: 'Doom Doom',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'Extremely High',
    dps: 'Extremely High',
    fireRate: 'Very High',
    range: 'Medium',
    magazine: '12',
    weight: '7.0',
    rarity: 'Legendary',
    description: 'A unique, heavily modified shotgun with an extremely high rate of fire.',
    effects: [
      'Extremely high rate of fire',
      'Massive damage output',
      'High recoil',
      'Unique firing sound'
    ]
  },
  {
    id: 'the_headsman',
    name: 'The Headsman',
    tech: 'Power',
    type: 'Shotgun',
    damage: 'Extremely High',
    dps: 'Very High',
    fireRate: 'Very Slow',
    range: 'Medium',
    magazine: '2',
    weight: '7.2',
    rarity: 'Legendary',
    description: 'A massive, custom-built shotgun that fires explosive slugs.',
    effects: [
      'Fires explosive slugs',
      'Huge damage per shot',
      'Very slow rate of fire',
      'Knockback effect on enemies'
    ]
  },
  // ========== ASSAULT RIFLES ==========
  {
    id: 'm251s_ajax',
    name: 'M251S Ajax',
    tech: 'Power',
    type: 'Assault Rifle',
    damage: 'High',
    dps: 'Very High',
    fireRate: 'High',
    range: 'Long',
    magazine: '30',
    weight: '7.5',
    rarity: 'Rare',
    description: 'A reliable and powerful assault rifle with excellent range and accuracy.',
    effects: [
      'Good accuracy',
      'Controllable recoil',
      'Versatile in most combat situations'
    ]
  },
  {
    id: 'm251s_ajax_legendary',
    name: 'M251S Ajax (Legendary)',
    tech: 'Power',
    type: 'Assault Rifle',
    damage: 'Very High',
    dps: 'Extremely High',
    fireRate: 'Very High',
    range: 'Long',
    magazine: '35',
    weight: '7.7',
    rarity: 'Legendary',
    description: 'A legendary variant of the Ajax with enhanced capabilities.',
    effects: [
      'Increased damage',
      'Faster rate of fire',
      'Larger magazine',
      'Reduced recoil'
    ]
  },
  {
    id: 'm251s_ajax_epic',
    name: 'M251S Ajax (Epic)',
    tech: 'Power',
    type: 'Assault Rifle',
    damage: 'High',
    dps: 'Very High',
    fireRate: 'High',
    range: 'Long',
    magazine: '30',
    weight: '7.6',
    rarity: 'Epic',
    description: 'An epic variant of the Ajax with improved performance.',
    effects: [
      'Good damage output',
      'Reliable performance',
      'Improved accuracy',
      'Faster reload speed'
    ]
  },
  {
    id: 'm251s_ajax_rare',
    name: 'M251S Ajax (Rare)',
    tech: 'Power',
    type: 'Assault Rifle',
    damage: 'High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '25',
    weight: '7.5',
    rarity: 'Rare',
    description: 'A standard-issue Ajax with good performance.',
    effects: [
      'Reliable damage output',
      'Standard features',
      'Average recoil control'
    ]
  },
  {
    id: 'm251s_ajax_uncommon',
    name: 'M251S Ajax (Uncommon)',
    tech: 'Power',
    type: 'Assault Rifle',
    damage: 'Moderate',
    dps: 'Moderate',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '20',
    weight: '7.4',
    rarity: 'Uncommon',
    description: 'A basic model of the Ajax with standard capabilities.',
    effects: [
      'Standard performance',
      'Basic features',
      'Slightly reduced magazine size'
    ]
  },
  {
    id: 'm251s_ajax_common',
    name: 'M251S Ajax (Common)',
    tech: 'Power',
    type: 'Assault Rifle',
    damage: 'Low',
    dps: 'Moderate',
    fireRate: 'Moderate',
    range: 'Medium',
    magazine: '15',
    weight: '7.3',
    rarity: 'Common',
    description: 'A basic version of the Ajax with reduced capabilities.',
    effects: [
      'Reduced damage',
      'Standard features',
      'Smaller magazine size'
    ]
  },
  {
    id: 'copperhead',
    name: 'Copperhead',
    tech: 'Power',
    type: 'Assault Rifle',
    damage: 'Very High',
    dps: 'Extremely High',
    fireRate: 'Very High',
    range: 'Long',
    magazine: '30',
    weight: '7.8',
    rarity: 'Epic',
    description: 'A high-powered assault rifle with excellent stopping power and accuracy.',
    effects: [
      'High damage per shot',
      'Good rate of fire',
      'Controllable recoil',
      'Versatile in most combat situations'
    ]
  },
  {
    id: 'copperhead_legendary',
    name: 'Copperhead (Legendary)',
    tech: 'Power',
    type: 'Assault Rifle',
    damage: 'Extremely High',
    dps: 'Extremely High',
    fireRate: 'Very High',
    range: 'Long',
    magazine: '35',
    weight: '7.9',
    rarity: 'Legendary',
    description: 'A legendary variant of the Copperhead with enhanced capabilities.',
    effects: [
      'Increased damage',
      'Faster rate of fire',
      'Larger magazine',
      'Reduced recoil',
      'Chance to apply Bleed'
    ]
  },
  {
    id: 'copperhead_epic',
    name: 'Copperhead (Epic)',
    tech: 'Power',
    type: 'Assault Rifle',
    damage: 'Very High',
    dps: 'Extremely High',
    fireRate: 'Very High',
    range: 'Long',
    magazine: '30',
    weight: '7.8',
    rarity: 'Epic',
    description: 'An epic variant of the Copperhead with improved performance.',
    effects: [
      'Good damage output',
      'Reliable performance',
      'Improved accuracy',
      'Faster reload speed'
    ]
  },
  {
    id: 'copperhead_rare',
    name: 'Copperhead (Rare)',
    tech: 'Power',
    type: 'Assault Rifle',
    damage: 'High',
    dps: 'Very High',
    fireRate: 'High',
    range: 'Long',
    magazine: '25',
    weight: '7.7',
    rarity: 'Rare',
    description: 'A standard-issue Copperhead with good performance.',
    effects: [
      'Reliable damage output',
      'Standard features',
      'Average recoil control'
    ]
  },
  {
    id: 'copperhead_uncommon',
    name: 'Copperhead (Uncommon)',
    tech: 'Power',
    type: 'Assault Rifle',
    damage: 'Moderate',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '20',
    weight: '7.6',
    rarity: 'Uncommon',
    description: 'A basic model of the Copperhead with standard capabilities.',
    effects: [
      'Standard performance',
      'Basic features',
      'Slightly reduced magazine size'
    ]
  },
  {
    id: 'copperhead_common',
    name: 'Copperhead (Common)',
    tech: 'Power',
    type: 'Assault Rifle',
    damage: 'Low',
    dps: 'Moderate',
    fireRate: 'Moderate',
    range: 'Medium',
    magazine: '15',
    weight: '7.5',
    rarity: 'Common',
    description: 'A basic version of the Copperhead with reduced capabilities.',
    effects: [
      'Reduced damage',
      'Standard features',
      'Smaller magazine size'
    ]
  },
  {
    id: 'm179e_achilles',
    name: 'M179E Achilles',
    tech: 'Tech',
    type: 'Assault Rifle',
    damage: 'Very High',
    dps: 'Extremely High',
    fireRate: 'High',
    range: 'Very Long',
    magazine: '15',
    weight: '8.2',
    rarity: 'Epic',
    description: 'A high-tech assault rifle that fires charged projectiles capable of penetrating cover.',
    effects: [
      'Can charge shots for increased damage',
      'Projectiles penetrate cover',
      'High accuracy at long range',
      'Slower rate of fire'
    ]
  },
  {
    id: 'm179e_achilles_legendary',
    name: 'M179E Achilles (Legendary)',
    tech: 'Tech',
    type: 'Assault Rifle',
    damage: 'Extremely High',
    dps: 'Extremely High',
    fireRate: 'High',
    range: 'Very Long',
    magazine: '20',
    weight: '8.4',
    rarity: 'Legendary',
    description: 'A legendary variant of the Achilles with enhanced capabilities.',
    effects: [
      'Increased damage',
      'Faster charge time',
      'Larger magazine',
      'Chance to apply EMP on hit',
      'Projectiles penetrate multiple targets'
    ]
  },
  {
    id: 'm179e_achilles_epic',
    name: 'M179E Achilles (Epic)',
    tech: 'Tech',
    type: 'Assault Rifle',
    damage: 'Very High',
    dps: 'Extremely High',
    fireRate: 'High',
    range: 'Very Long',
    magazine: '15',
    weight: '8.3',
    rarity: 'Epic',
    description: 'An epic variant of the Achilles with improved performance.',
    effects: [
      'Good damage output',
      'Improved charge time',
      'Better accuracy',
      'Faster reload speed'
    ]
  },
  {
    id: 'm179e_achilles_rare',
    name: 'M179E Achilles (Rare)',
    tech: 'Tech',
    type: 'Assault Rifle',
    damage: 'High',
    dps: 'Very High',
    fireRate: 'Moderate',
    range: 'Very Long',
    magazine: '12',
    weight: '8.2',
    rarity: 'Rare',
    description: 'A standard-issue Achilles with good performance.',
    effects: [
      'Reliable damage output',
      'Standard features',
      'Average charge time',
      'Good accuracy'
    ]
  },
  {
    id: 'm179e_achilles_uncommon',
    name: 'M179E Achilles (Uncommon)',
    tech: 'Tech',
    type: 'Assault Rifle',
    damage: 'Moderate',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '10',
    weight: '8.1',
    rarity: 'Uncommon',
    description: 'A basic model of the Achilles with standard capabilities.',
    effects: [
      'Standard performance',
      'Basic features',
      'Slightly slower charge time',
      'Reduced magazine size'
    ]
  },
  {
    id: 'm179e_achilles_common',
    name: 'M179E Achilles (Common)',
    tech: 'Tech',
    type: 'Assault Rifle',
    damage: 'Low',
    dps: 'Moderate',
    fireRate: 'Slow',
    range: 'Long',
    magazine: '8',
    weight: '8.0',
    rarity: 'Common',
    description: 'A basic version of the Achilles with reduced capabilities.',
    effects: [
      'Reduced damage',
      'Standard features',
      'Smaller magazine size',
      'Slower charge time'
    ]
  },
  // ========== LIGHT MACHINE GUNS ==========
  {
    id: 'defender',
    name: 'Defender',
    tech: 'Power',
    type: 'LMG',
    damage: 'Very High',
    dps: 'Extremely High',
    fireRate: 'High',
    range: 'Long',
    magazine: '80',
    weight: '12.5',
    rarity: 'Epic',
    description: 'A high-capacity light machine gun with sustained fire capability.',
    effects: [
      'Large magazine capacity',
      'High rate of fire',
      'Good suppression capabilities',
      'Heavy recoil when firing continuously'
    ]
  },
  {
    id: 'defender_legendary',
    name: 'Defender (Legendary)',
    tech: 'Power',
    type: 'LMG',
    damage: 'Extremely High',
    dps: 'Extremely High',
    fireRate: 'Very High',
    range: 'Long',
    magazine: '100',
    weight: '12.8',
    rarity: 'Legendary',
    description: 'A legendary variant of the Defender with enhanced firepower and capacity.',
    effects: [
      'Increased damage',
      'Larger magazine',
      'Reduced recoil',
      'Chance to apply Suppression effect',
      'Improved accuracy when mounted'
    ]
  },
  {
    id: 'defender_rare',
    name: 'Defender (Rare)',
    tech: 'Power',
    type: 'LMG',
    damage: 'High',
    dps: 'Very High',
    fireRate: 'High',
    range: 'Long',
    magazine: '60',
    weight: '12.3',
    rarity: 'Rare',
    description: 'A standard-issue Defender with good performance.',
    effects: [
      'Reliable damage output',
      'Good suppression capabilities',
      'Standard features',
      'Moderate recoil control'
    ]
  },
  {
    id: 'defender_uncommon',
    name: 'Defender (Uncommon)',
    tech: 'Power',
    type: 'LMG',
    damage: 'Moderate',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Medium',
    magazine: '50',
    weight: '12.0',
    rarity: 'Uncommon',
    description: 'A basic model of the Defender with standard capabilities.',
    effects: [
      'Standard performance',
      'Basic features',
      'Smaller magazine size',
      'Increased recoil'
    ]
  },
  // ========== PRECISION RIFLES ==========
  {
    id: 'nue',
    name: 'Nue',
    tech: 'Power',
    type: 'Precision Rifle',
    damage: 'High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Very Long',
    magazine: '10',
    weight: '6.5',
    rarity: 'Rare',
    description: 'A semi-automatic precision rifle with excellent accuracy and stopping power.',
    effects: [
      'High accuracy',
      'Good range',
      'Effective against armored targets',
      'Moderate recoil'
    ]
  },
  {
    id: 'nue_legendary',
    name: 'Nue (Legendary)',
    tech: 'Power',
    type: 'Precision Rifle',
    damage: 'Very High',
    dps: 'Very High',
    fireRate: 'High',
    range: 'Very Long',
    magazine: '12',
    weight: '6.7',
    rarity: 'Legendary',
    description: 'A legendary variant of the Nue with enhanced capabilities.',
    effects: [
      'Increased damage',
      'Faster rate of fire',
      'Improved accuracy',
      'Chance to apply Bleed',
      'Reduced recoil'
    ]
  },
  {
    id: 'nue_epic',
    name: 'Nue (Epic)',
    tech: 'Power',
    type: 'Precision Rifle',
    damage: 'High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Very Long',
    magazine: '10',
    weight: '6.6',
    rarity: 'Epic',
    description: 'An epic variant of the Nue with improved performance.',
    effects: [
      'Good damage output',
      'Improved accuracy',
      'Faster reload speed',
      'Reduced recoil'
    ]
  },
  {
    id: 'nue_rare',
    name: 'Nue (Rare)',
    tech: 'Power',
    type: 'Precision Rifle',
    damage: 'High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '8',
    weight: '6.5',
    rarity: 'Rare',
    description: 'A standard-issue Nue with good performance.',
    effects: [
      'Reliable damage output',
      'Good accuracy',
      'Standard features',
      'Moderate recoil control'
    ]
  },
  {
    id: 'nue_uncommon',
    name: 'Nue (Uncommon)',
    tech: 'Power',
    type: 'Precision Rifle',
    damage: 'Moderate',
    dps: 'Moderate',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '6',
    weight: '6.4',
    rarity: 'Uncommon',
    description: 'A basic model of the Nue with standard capabilities.',
    effects: [
      'Standard performance',
      'Basic features',
      'Smaller magazine size',
      'Increased recoil'
    ]
  },
  {
    id: 'nue_common',
    name: 'Nue (Common)',
    tech: 'Power',
    type: 'Precision Rifle',
    damage: 'Low',
    dps: 'Moderate',
    fireRate: 'Slow',
    range: 'Medium',
    magazine: '5',
    weight: '6.3',
    rarity: 'Common',
    description: 'A basic version of the Nue with reduced capabilities.',
    effects: [
      'Reduced damage',
      'Standard features',
      'Smaller magazine size',
      'Slower rate of fire'
    ]
  },
  // ========== SNIPER RIFLES ==========
  {
    id: 'nokota_overwatch',
    name: 'Nokota Overwatch',
    tech: 'Power',
    type: 'Sniper Rifle',
    damage: 'Extremely High',
    dps: 'Very High',
    fireRate: 'Slow',
    range: 'Extreme',
    magazine: '5',
    weight: '9.5',
    rarity: 'Epic',
    description: 'A high-powered bolt-action sniper rifle with exceptional range and stopping power.',
    effects: [
      'Extremely high damage per shot',
      'Exceptional accuracy',
      'Can penetrate cover',
      'Slow rate of fire',
      'Scope with variable zoom'
    ]
  },
  {
    id: 'nokota_overwatch_legendary',
    name: 'Nokota Overwatch (Legendary)',
    tech: 'Power',
    type: 'Sniper Rifle',
    damage: 'Extremely High',
    dps: 'Extremely High',
    fireRate: 'Moderate',
    range: 'Extreme',
    magazine: '7',
    weight: '9.7',
    rarity: 'Legendary',
    description: 'A legendary variant of the Nokota Overwatch with enhanced capabilities.',
    effects: [
      'Increased damage',
      'Faster bolt action',
      'Improved scope',
      'Chance to apply Bleed',
      'Reduced scope sway',
      'Can penetrate multiple targets'
    ]
  },
  {
    id: 'nokota_overwatch_epic',
    name: 'Nokota Overwatch (Epic)',
    tech: 'Power',
    type: 'Sniper Rifle',
    damage: 'Extremely High',
    dps: 'Very High',
    fireRate: 'Slow',
    range: 'Extreme',
    magazine: '5',
    weight: '9.6',
    rarity: 'Epic',
    description: 'An epic variant of the Nokota Overwatch with improved performance.',
    effects: [
      'High damage output',
      'Improved accuracy',
      'Better scope stability',
      'Reduced recoil',
      'Faster reload speed'
    ]
  },
  {
    id: 'nokota_overwatch_rare',
    name: 'Nokota Overwatch (Rare)',
    tech: 'Power',
    type: 'Sniper Rifle',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Slow',
    range: 'Very Long',
    magazine: '4',
    weight: '9.5',
    rarity: 'Rare',
    description: 'A standard-issue Nokota Overwatch with good performance.',
    effects: [
      'Reliable damage output',
      'Good accuracy',
      'Standard scope',
      'Moderate recoil control'
    ]
  },
  {
    id: 'ashura',
    name: 'Ashura',
    tech: 'Smart',
    type: 'Sniper Rifle',
    damage: 'High',
    dps: 'Very High',
    fireRate: 'High',
    range: 'Long',
    magazine: '4',
    weight: '8.5',
    rarity: 'Epic',
    description: 'A smart sniper rifle with tracking projectiles that follow targets.',
    effects: [
      'Smart targeting system',
      'Homing projectiles',
      'Good rate of fire for a sniper rifle',
      'Requires smart link cyberware'
    ]
  },
  {
    id: 'ashura_legendary',
    name: 'Ashura (Legendary)',
    tech: 'Smart',
    type: 'Sniper Rifle',
    damage: 'Very High',
    dps: 'Extremely High',
    fireRate: 'Very High',
    range: 'Long',
    magazine: '6',
    weight: '8.7',
    rarity: 'Legendary',
    description: 'A legendary variant of the Ashura with enhanced smart targeting.',
    effects: [
      'Improved smart targeting',
      'Faster projectile speed',
      'Increased damage',
      'Can track multiple targets',
      'Reduced lock-on time'
    ]
  },
  {
    id: 'ashura_epic',
    name: 'Ashura (Epic)',
    tech: 'Smart',
    type: 'Sniper Rifle',
    damage: 'High',
    dps: 'Very High',
    fireRate: 'High',
    range: 'Long',
    magazine: '4',
    weight: '8.6',
    rarity: 'Epic',
    description: 'An epic variant of the Ashura with improved performance.',
    effects: [
      'Good tracking capability',
      'Faster lock-on',
      'Improved accuracy',
      'Better target acquisition'
    ]
  },
  {
    id: 'ashura_rare',
    name: 'Ashura (Rare)',
    tech: 'Smart',
    type: 'Sniper Rifle',
    damage: 'High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Long',
    magazine: '3',
    weight: '8.5',
    rarity: 'Rare',
    description: 'A standard-issue Ashura with good performance.',
    effects: [
      'Reliable smart targeting',
      'Standard features',
      'Moderate lock-on time',
      'Good accuracy'
    ]
  },
  {
    id: 'breakthrough',
    name: 'Breakthrough',
    tech: 'Tech',
    type: 'Sniper Rifle',
    damage: 'Extremely High',
    dps: 'Very High',
    fireRate: 'Very Slow',
    range: 'Extreme',
    magazine: '3',
    weight: '10.0',
    rarity: 'Legendary',
    description: 'A powerful tech sniper rifle that fires charged projectiles capable of penetrating multiple targets.',
    effects: [
      'Can charge shots for increased damage',
      'Projectiles penetrate all cover',
      'Can hit multiple targets in a line',
      'Very slow rate of fire',
      'High recoil'
    ]
  },
  {
    id: 'breakthrough_epic',
    name: 'Breakthrough (Epic)',
    tech: 'Tech',
    type: 'Sniper Rifle',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Very Slow',
    range: 'Extreme',
    magazine: '2',
    weight: '9.8',
    rarity: 'Epic',
    description: 'An epic variant of the Breakthrough with improved performance.',
    effects: [
      'Good penetration capability',
      'Faster charge time',
      'Improved accuracy',
      'Reduced recoil'
    ]
  },
  {
    id: 'breakthrough_rare',
    name: 'Breakthrough (Rare)',
    tech: 'Tech',
    type: 'Sniper Rifle',
    damage: 'High',
    dps: 'Moderate',
    fireRate: 'Very Slow',
    range: 'Very Long',
    magazine: '1',
    weight: '9.5',
    rarity: 'Rare',
    description: 'A standard-issue Breakthrough with good performance.',
    effects: [
      'Penetrates cover',
      'Standard charge time',
      'Good accuracy',
      'High recoil'
    ]
  },
  {
    id: 'rahu',
    name: 'Rahu',
    tech: 'Power',
    type: 'Sniper Rifle',
    damage: 'Very High',
    dps: 'High',
    fireRate: 'Moderate',
    range: 'Very Long',
    magazine: '8',
    weight: '8.0',
    rarity: 'Epic',
    description: 'A semi-automatic sniper rifle with a good balance of power and rate of fire.',
    effects: [
      'Good rate of fire for a sniper rifle',
      'High damage output',
      'Effective at medium to long range',
      'Moderate recoil',
      'Standard scope with 4x zoom'
    ]
  },
  // ========== EDGED WEAPONS ==========
  {
    id: 'monowire',
    name: 'Monowire',
    tech: 'Cyberware',
    type: 'Edged',
    damage: 'Very High',
    dps: 'Extremely High',
    attackSpeed: 'Very Fast',
    range: 'Short',
    weight: '1.5',
    rarity: 'Legendary',
    description: 'A cybernetic whip made of a monofilament wire that can slice through almost anything.',
    effects: [
      'Ignores most armor',
      'Chance to cause Bleeding',
      'Can hit multiple targets in a wide arc',
      'Requires arm cyberware slot'
    ]
  },
  {
    id: 'mantis_blades',
    name: 'Mantis Blades',
    tech: 'Cyberware',
    type: 'Edged',
    damage: 'High',
    dps: 'Very High',
    attackSpeed: 'Very Fast',
    range: 'Very Short',
    weight: '2.0',
    rarity: 'Legendary',
    description: 'Retractable arm blades that extend from the forearms, perfect for quick, lethal strikes.',
    effects: [
      'Fast attack speed',
      'Can perform leaping attacks',
      'Chance to cause Bleeding',
      'Requires arm cyberware slot'
    ]
  },
  {
    id: 'knife',
    name: 'Combat Knife',
    tech: 'Standard',
    type: 'Edged',
    damage: 'Moderate',
    dps: 'High',
    attackSpeed: 'Fast',
    range: 'Very Short',
    weight: '0.8',
    rarity: 'Common',
    description: 'A standard-issue combat knife, reliable and easy to conceal.',
    effects: [
      'Quick attacks',
      'Can be thrown',
      'Stealth kills'
    ]
  },
  {
    id: 'katana',
    name: 'Katana',
    tech: 'Standard',
    type: 'Edged',
    damage: 'Very High',
    dps: 'High',
    attackSpeed: 'Moderate',
    range: 'Short',
    weight: '2.5',
    rarity: 'Rare',
    description: 'A traditional Japanese sword known for its sharpness and precision.',
    effects: [
      'High damage per hit',
      'Chance to cause Bleeding',
      'Can deflect bullets with proper timing',
      'Wide attack arc'
    ]
  },
  {
    id: 'scalpel',
    name: 'Scalpel',
    tech: 'Standard',
    type: 'Edged',
    damage: 'Low',
    dps: 'Moderate',
    attackSpeed: 'Very Fast',
    range: 'Very Short',
    weight: '0.3',
    rarity: 'Uncommon',
    description: 'A surgical instrument that can be used as a weapon in a pinch.',
    effects: [
      'Very fast attacks',
      'High critical hit chance',
      'Can be concealed',
      'Bonus damage against unarmored targets'
    ]
  },
  {
    id: 'machete',
    name: 'Machete',
    tech: 'Standard',
    type: 'Edged',
    damage: 'High',
    dps: 'High',
    attackSpeed: 'Moderate',
    range: 'Short',
    weight: '1.8',
    rarity: 'Common',
    description: 'A large, heavy knife used as both a tool and a weapon.',
    effects: [
      'Good damage output',
      'Can break through light obstacles',
      'Useful for survival situations',
      'Durable construction'
    ]
  },
  {
    id: 'chainsword',
    name: 'Chainsword',
    tech: 'Power',
    type: 'Edged',
    damage: 'Extremely High',
    dps: 'Extremely High',
    attackSpeed: 'Slow',
    range: 'Short',
    weight: '4.5',
    rarity: 'Legendary',
    description: 'A brutal melee weapon with a motorized chain-blade that tears through flesh and armor alike.',
    effects: [
      'Massive damage per hit',
      'Chance to cause Bleeding',
      'Can stagger enemies',
      'Requires power source',
      'Loud when active'
    ]
  },
  // ========== BLUNT WEAPONS ==========
  {
    id: 'gorilla_arms',
    name: 'Gorilla Arms',
    tech: 'Cyberware',
    type: 'Blunt',
    damage: 'Very High',
    dps: 'High',
    attackSpeed: 'Moderate',
    range: 'Very Short',
    weight: '3.0',
    rarity: 'Legendary',
    description: 'Cybernetic arms that enhance punching power to superhuman levels.',
    effects: [
      'Increased melee damage',
      'Chance to stun enemies',
      'Can break through locked doors',
      'Requires arm cyberware slot',
      'Bonus to Athletics checks'
    ]
  },
  {
    id: 'baseball_bat',
    name: 'Baseball Bat',
    tech: 'Standard',
    type: 'Blunt',
    damage: 'Moderate',
    dps: 'Moderate',
    attackSpeed: 'Moderate',
    range: 'Short',
    weight: '2.0',
    rarity: 'Common',
    description: 'A wooden baseball bat, simple but effective in the right hands.',
    effects: [
      'Chance to stagger enemies',
      'Can be found almost anywhere',
      'No maintenance required',
      'Non-lethal option available'
    ]
  },
  {
    id: 'sledgehammer',
    name: 'Sledgehammer',
    tech: 'Standard',
    type: 'Blunt',
    damage: 'Very High',
    dps: 'High',
    attackSpeed: 'Slow',
    range: 'Short',
    weight: '4.5',
    rarity: 'Uncommon',
    description: 'A heavy sledgehammer designed for demolition work.',
    effects: [
      'High impact damage',
      'Can break through walls and obstacles',
      'Chance to knock down enemies',
      'High stamina consumption',
      'Slow swing speed'
    ]
  },
  {
    id: 'tonfa',
    name: 'Tactical Tonfa',
    tech: 'Standard',
    type: 'Blunt',
    damage: 'Moderate',
    dps: 'High',
    attackSpeed: 'Very Fast',
    range: 'Very Short',
    weight: '1.2',
    rarity: 'Rare',
    description: 'A police-issue tactical tonfa, designed for crowd control.',
    effects: [
      'Fast attack speed',
      'Can block incoming attacks',
      'Bonus to defense',
      'Non-lethal option',
      'Good for counter-attacks'
    ]
  },
  {
    id: 'pipe_wrench',
    name: 'Heavy Pipe Wrench',
    tech: 'Standard',
    type: 'Blunt',
    damage: 'High',
    dps: 'Moderate',
    attackSpeed: 'Slow',
    range: 'Short',
    weight: '3.0',
    rarity: 'Common',
    description: 'A heavy-duty pipe wrench that can double as a weapon.',
    effects: [
      'Good damage output',
      'Useful as a tool',
      'Can be used to repair machinery',
      'Durable construction'
    ]
  },
  {
    id: 'stun_baton',
    name: 'Stun Baton',
    tech: 'Tech',
    type: 'Blunt',
    damage: 'Low',
    dps: 'Moderate',
    attackSpeed: 'Fast',
    range: 'Short',
    weight: '1.5',
    rarity: 'Uncommon',
    description: 'An electrified baton used by law enforcement.',
    effects: [
      'Chance to stun enemies',
      'Non-lethal damage',
      'Requires battery charge',
      'Effective against cyberware',
      'Can disable electronics'
    ]
  },
  {
    id: 'monkey_wrench',
    name: 'Monkey Wrench',
    tech: 'Standard',
    type: 'Blunt',
    damage: 'Moderate',
    dps: 'Moderate',
    attackSpeed: 'Moderate',
    range: 'Short',
    weight: '2.2',
    rarity: 'Common',
    description: 'A versatile tool that can be used as an improvised weapon.',
    effects: [
      'Balanced performance',
      'Useful as a tool',
      'No maintenance required',
      'Commonly available'
    ]
  },
  // ========== THROWABLE WEAPONS ==========
  {
    id: 'throwing_knives',
    name: 'Throwing Knives',
    tech: 'Standard',
    type: 'Throwable',
    damage: 'High',
    dps: 'Moderate',
    throwSpeed: 'Fast',
    range: 'Medium',
    weight: '0.5',
    ammo: '3',
    rarity: 'Uncommon',
    description: 'A set of balanced throwing knives for silent takedowns.',
    effects: [
      'Silent when thrown',
      'Can be retrieved after use',
      'High critical hit chance',
      'No reload required',
      'Limited ammo capacity'
    ]
  },
  {
    id: 'shuriken',
    name: 'Shuriken',
    tech: 'Standard',
    type: 'Throwable',
    damage: 'Moderate',
    dps: 'High',
    throwSpeed: 'Very Fast',
    range: 'Short',
    weight: '0.3',
    ammo: '5',
    rarity: 'Rare',
    description: 'Traditional Japanese throwing stars, excellent for quick attacks.',
    effects: [
      'Very fast throw speed',
      'Can be thrown in rapid succession',
      'Chance to cause Bleeding',
      'Difficult to recover after throwing',
      'Can be used in melee'
    ]
  },
  {
    id: 'throwing_axes',
    name: 'Throwing Axes',
    tech: 'Standard',
    type: 'Throwable',
    damage: 'Very High',
    dps: 'High',
    throwSpeed: 'Moderate',
    range: 'Medium',
    weight: '1.2',
    ammo: '2',
    rarity: 'Uncommon',
    description: 'Heavy throwing axes that deal significant damage on impact.',
    effects: [
      'High damage per hit',
      'Can be used in melee',
      'Loud on impact',
      'Can be retrieved after use',
      'Limited ammo capacity'
    ]
  },
  {
    id: 'chakram',
    name: 'Chakram',
    tech: 'Standard',
    type: 'Throwable',
    damage: 'High',
    dps: 'High',
    throwSpeed: 'Fast',
    range: 'Medium',
    weight: '0.8',
    ammo: '1',
    rarity: 'Rare',
    description: 'A circular throwing weapon that can hit multiple targets.',
    effects: [
      'Can hit multiple enemies in path',
      'Returns to thrower',
      'Good accuracy',
      'Can be deflected',
      'Requires skill to use effectively'
    ]
  },
  {
    id: 'kunai',
    name: 'Kunai',
    tech: 'Standard',
    type: 'Throwable',
    damage: 'Moderate',
    dps: 'Moderate',
    throwSpeed: 'Fast',
    range: 'Short',
    weight: '0.4',
    ammo: '4',
    rarity: 'Uncommon',
    description: 'A multi-purpose throwing and stabbing tool.',
    effects: [
      'Can be used in melee',
      'Good for climbing',
      'Can be poisoned',
      'Easy to conceal',
      'Versatile tool'
    ]
  },
  {
    id: 'throwing_knives_legendary',
    name: 'Throwing Knives (Legendary)',
    tech: 'Tech',
    type: 'Throwable',
    damage: 'Very High',
    dps: 'High',
    throwSpeed: 'Very Fast',
    range: 'Long',
    weight: '0.6',
    ammo: '5',
    rarity: 'Legendary',
    description: 'High-tech throwing knives with enhanced capabilities.',
    effects: [
      'Homing capability',
      'Increased damage',
      'Can be recalled',
      'Chance to cause Bleeding',
      'Silent operation'
    ]
  },
  {
    id: 'throwing_knives_epic',
    name: 'Throwing Knives (Epic)',
    tech: 'Tech',
    type: 'Throwable',
    damage: 'High',
    dps: 'High',
    throwSpeed: 'Very Fast',
    range: 'Medium',
    weight: '0.5',
    ammo: '4',
    rarity: 'Epic',
    description: 'Enhanced throwing knives with improved performance.',
    effects: [
      'Improved accuracy',
      'Faster throw speed',
      'Can be retrieved after use',
      'Good damage output',
      'Silent when thrown'
    ]
  },
  // ========== GRENADES ==========
  {
    id: 'frag_grenade',
    name: 'Frag Grenade',
    tech: 'Standard',
    type: 'Grenade',
    damage: 'Very High',
    blastRadius: 'Large',
    fuseTime: '3s',
    weight: '0.8',
    ammo: '1',
    rarity: 'Common',
    description: 'Standard fragmentation grenade that explodes into deadly shrapnel.',
    effects: [
      'High explosive damage',
      'Large blast radius',
      'Can be cooked',
      'Loud explosion',
      'Standard issue'
    ]
  },
  {
    id: 'emp_grenade',
    name: 'EMP Grenade',
    tech: 'Tech',
    type: 'Grenade',
    damage: 'Low',
    blastRadius: 'Medium',
    fuseTime: '2s',
    weight: '0.6',
    ammo: '1',
    rarity: 'Uncommon',
    description: 'Electromagnetic pulse grenade that disables electronics and cyberware.',
    effects: [
      'Disables electronics',
      'Stuns robotic enemies',
      'Temporarily disables cyberware',
      'No physical damage',
      'Silent explosion'
    ]
  },
  {
    id: 'flashbang',
    name: 'Flashbang',
    tech: 'Standard',
    type: 'Grenade',
    damage: 'None',
    blastRadius: 'Large',
    fuseTime: '2s',
    weight: '0.5',
    ammo: '1',
    rarity: 'Common',
    description: 'Non-lethal grenade that produces a bright flash and loud bang to disorient enemies.',
    effects: [
      'Blinds enemies',
      'Deafens enemies',
      'Non-lethal',
      'Short duration',
      'Effective in enclosed spaces'
    ]
  },
  {
    id: 'incendiary_grenade',
    name: 'Incendiary Grenade',
    tech: 'Standard',
    type: 'Grenade',
    damage: 'High',
    blastRadius: 'Medium',
    fuseTime: '3s',
    weight: '0.9',
    ammo: '1',
    rarity: 'Uncommon',
    description: 'Creates a fireball on impact, setting enemies and objects on fire.',
    effects: [
      'Causes Burn status',
      'Creates fire hazard area',
      'Damage over time',
      'Lights dark areas',
      'Can be used to destroy flammable objects'
    ]
  },
  {
    id: 'bounce_back',
    name: 'Bounce Back',
    tech: 'Tech',
    type: 'Grenade',
    damage: 'Moderate',
    blastRadius: 'Small',
    fuseTime: '1s',
    weight: '0.4',
    ammo: '3',
    rarity: 'Rare',
    description: 'Smart grenade that bounces off surfaces before detonating.',
    effects: [
      'Bounces before exploding',
      'Can be thrown around corners',
      'Reduced damage',
      'Smaller blast radius',
      'Can be tricky to time'
    ]
  },
  {
    id: 'biohazard_grenade',
    name: 'Biohazard Grenade',
    tech: 'Tech',
    type: 'Grenade',
    damage: 'Moderate',
    blastRadius: 'Medium',
    fuseTime: '3s',
    weight: '0.7',
    ammo: '1',
    rarity: 'Rare',
    description: 'Releases a cloud of toxic gas that damages enemies over time.',
    effects: [
      'Creates toxic cloud',
      'Damage over time',
      'Reduced effectiveness against sealed armor',
      'Cloud lingers',
      'Hazardous to user without protection'
    ]
  },
  {
    id: 'cyber_emp_grenade',
    name: 'Cyber EMP Grenade',
    tech: 'Tech',
    type: 'Grenade',
    damage: 'High',
    blastRadius: 'Large',
    fuseTime: '2s',
    weight: '0.7',
    ammo: '1',
    rarity: 'Epic',
    description: 'Advanced EMP grenade that combines electronic disruption with explosive force.',
    effects: [
      'Disables electronics',
      'Deals damage to all enemies',
      'Larger blast radius',
      'Shorter fuse time',
      'Rare and valuable'
    ]
  },
  {
    id: 'flashbang_legendary',
    name: 'Flashbang (Legendary)',
    tech: 'Tech',
    type: 'Grenade',
    damage: 'None',
    blastRadius: 'Very Large',
    fuseTime: '1s',
    weight: '0.5',
    ammo: '2',
    rarity: 'Legendary',
    description: 'Advanced flashbang with enhanced effects and faster detonation.',
    effects: [
      'Instant detonation on impact',
      'Massive blinding effect',
      'Longer duration',
      'Affects cybernetic vision',
      'Does not affect the user'
    ]
  }
]

export default weapons;
