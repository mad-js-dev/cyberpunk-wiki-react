const vehicles = [
  // Archer Vehicles
  {
    id: 'archer_hella_ecd',
    manufacturer: 'Archer',
    series: 'EC-D i360',
    model: 'Hella',
    type: 'car',
    class: 'Economy',
    price: 0, // Not buyable, obtained from The Ripperdoc mission
    buyable: false,
    topSpeed: 150,
    handling: 4.5,
    acceleration: 5.0,
    description: 'V\'s initial and only vehicle during Act 1. This version of the Hella has a unique model, more horsepower than the average Hella EC-D i360, unique decorations and wider wheels.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'The Ripperdoc mission',
    year: '2077'
  },
  {
    id: 'archer_quartz_ecl',
    manufacturer: 'Archer',
    model: 'Quartz',
    series: 'EC-L r275',
    type: 'car',
    class: 'Sport',
    price: 22000,
    buyable: true,
    topSpeed: 180,
    handling: 7.0,
    acceleration: 7.5,
    description: 'The first sportscar released by Archer, in production since 2041. Bearing the angular lines and low profile of popular civilian vehicles from a hundred years prior, the Quartz is the car of choice for those who can afford a set of wheels with more than two pedals and a chain. Popular with nomads for its endurance and reliability in rough terrain.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2041-2077'
  },
  {
    id: 'archer_quartz_ect',
    manufacturer: 'Archer',
    model: 'Quartz',
    series: 'EC-T2 r660',
    type: 'car',
    class: 'Sport',
    price: 31000,
    buyable: true,
    topSpeed: 195,
    handling: 7.5,
    acceleration: 8.0,
    description: 'A high-performance variant of the Quartz EC-L r275 with a considerable upgrade in terms of horsepower. Features the same iconic angular design but with enhanced performance capabilities.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077'
  },
  {
    id: 'archer_quartz_bandit',
    manufacturer: 'Archer',
    model: 'Quartz',
    series: 'Bandit',
    type: 'car',
    class: 'Sport',
    price: 0, // Special DLC vehicle
    buyable: false,
    topSpeed: 200,
    handling: 8.0,
    acceleration: 8.5,
    description: 'A limited-edition Quartz with classic soul, nova style and enough horsepower to leave all other vehicles in the dust. This custom variant features a unique livery and performance upgrades, making it one of the most sought-after vehicles in Night City.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Free DLC (Patch 1.3)',
    year: '2077',
    isDlc: true
  },
  {
    id: 'archer_quartz_sidewinder',
    manufacturer: 'Archer',
    model: 'Quartz',
    series: 'Sidewinder',
    type: 'car',
    class: 'Off-Road',
    price: 90000,
    buyable: true,
    topSpeed: 190,
    handling: 8.5,
    acceleration: 8.0,
    description: 'A custom Nomad variant of the Quartz, equipped with a powerful engine capable of handling rough terrain. Features reinforced suspension, off-road tires, and additional armor plating for wasteland travel. The Sidewinder is a favorite among the Aldecaldos and other nomad clans.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      'Reinforced suspension',
      'Off-road tires',
      'Additional armor plating',
      'Raised chassis',
      'Custom nomad livery'
    ]
  },
  {
    id: 'archer_quartz_specter',
    manufacturer: 'Archer',
    model: 'Quartz',
    series: 'Specter',
    type: 'car',
    class: 'Sport',
    price: 0, // Not directly purchasable
    buyable: false,
    topSpeed: 205,
    handling: 8.5,
    acceleration: 8.5,
    description: 'A high-performance, limited-production variant of the Quartz with a focus on speed and handling. The Specter features a lightweight chassis, aerodynamic body kit, and a tuned engine for maximum performance. Its sleek, all-black design makes it a favorite among Night City\'s elite.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Special event reward',
    year: '2077',
    limitedEdition: true
  },
  // Makigai Vehicles
  {
    id: 'makigai_maimai_p126',
    manufacturer: 'Makigai',
    model: 'MaiMai',
    series: 'P126',
    type: 'car',
    class: 'Economy',
    price: 22000,
    buyable: true,
    topSpeed: 140,
    handling: 6.5,
    acceleration: 4.5,
    description: 'The MaiMai P126 is a compact city car with improved horsepower and maximum speed for longer travels. Features a minimalist design and efficient performance, making it perfect for navigating the tight streets of Night City. The P126 variant lacks a frontal iron bumper and has a different tailgate compared to the base model.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      'Compact city car design',
      'Improved horsepower',
      'Efficient fuel consumption',
      'Japanese voice assistant'
    ]
  },
  {
    id: 'makigai_tanishi_t400',
    manufacturer: 'Makigai',
    model: 'Tanishi',
    series: 'T400',
    type: 'car',
    class: 'Economy',
    price: 0, // Not buyable, obtained from Mr. Hands
    buyable: false,
    topSpeed: 130,
    handling: 5.5,
    acceleration: 4.0,
    description: 'A small, practical city car provided by Mr. Hands during the "Lucretia My Reflection" mission. Features a compact design perfect for navigating the crowded streets of Night City. The Tanishi comes with a Japanese voice assistant that greets the driver in Japanese when entering or exiting the vehicle.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Mr. Hands during "Lucretia My Reflection" mission',
    year: '2077'
  },
  {
    id: 'makigai_tanishi_kuma',
    manufacturer: 'Makigai',
    model: 'Tanishi',
    series: 'Kuma',
    type: 'car',
    class: 'Off-Road',
    price: 35000,
    buyable: true,
    topSpeed: 160,
    handling: 7.0,
    acceleration: 6.0,
    description: 'A customized off-road variant of the Tanishi, the "Kuma" features enhanced suspension, all-terrain tires, and a rugged exterior design. Despite its small size, it handles surprisingly well on rough terrain. The name "Kuma" (meaning "bear" in Japanese) is a nod to the 2020s Arasaka Kuma Land Rover. Features the same Japanese voice assistant as other Makigai vehicles.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      'Off-road suspension',
      'All-terrain tires',
      'Reinforced chassis',
      'Japanese voice assistant',
      'Custom "Kuma" livery'
    ]
  },
  // Mizutani Vehicles
  {
    id: 'mizutani_hozukimh2',
    manufacturer: 'Mizutani',
    model: 'Hozuki',
    series: 'MH2',
    type: 'motorcycle',
    class: 'Sport',
    price: 52000,
    buyable: true,
    topSpeed: 190,
    handling: 8.5,
    acceleration: 8.0,
    description: 'The Hozuki MH2 is a high-performance sportbike that combines sleek design with raw power. Known for its exceptional handling and acceleration, it\'s a favorite among Night City\'s street racers and couriers. The MH2 features an advanced traction control system and aerodynamic bodywork for maximum performance.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      'Sport-tuned suspension',
      'Advanced traction control',
      'Aerodynamic bodywork',
      'High-performance engine',
      'Digital dashboard'
    ]
  },
  {
    id: 'mizutani_hozukihoseki',
    manufacturer: 'Mizutani',
    model: 'Hozuki',
    series: 'Hoseki',
    type: 'motorcycle',
    class: 'Sport',
    price: 58000,
    buyable: true,
    topSpeed: 200,
    handling: 9.0,
    acceleration: 8.5,
    description: 'The "Hoseki" is a premium variant of the Hozuki series, featuring enhanced performance components and exclusive styling. The name "Hoseki" (meaning "jewel" in Japanese) reflects its status as a premium offering with superior handling and power delivery compared to the standard MH2.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      'Premium sport suspension',
      'Upgraded braking system',
      'Exclusive Hoseki livery',
      'Carbon fiber components',
      'Enhanced engine tuning'
    ]
  },
  {
    id: 'mizutani_shionmz1',
    manufacturer: 'Mizutani',
    model: 'Shion',
    series: 'MZ1',
    type: 'car',
    class: 'Sport',
    price: 85000,
    buyable: true,
    topSpeed: 210,
    handling: 8.0,
    acceleration: 8.5,
    description: 'The Shion MZ1 is a high-performance sports car that combines Japanese engineering with cutting-edge technology. As the base model of the Shion series, it offers an excellent balance of speed, handling, and comfort. The MZ1 features a sleek, aerodynamic design and a powerful engine that delivers exhilarating performance on both city streets and open roads.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      'Aerodynamic body design',
      'High-performance engine',
      'Advanced traction control',
      'Luxury interior',
      'Digital cockpit display'
    ]
  },
  {
    id: 'mizutani_shionsamum',
    manufacturer: 'Mizutani',
    model: 'Shion',
    series: 'Samum',
    type: 'car',
    class: 'Hypercar',
    price: 0, // Not directly purchasable
    buyable: false,
    topSpeed: 250,
    handling: 9.5,
    acceleration: 9.5,
    description: 'The "Samum" is an ultra-high-performance variant of the Shion, designed for maximum speed and handling. Named after the desert wind, the Samum is as fast and unpredictable as its namesake. This exclusive model features extensive use of carbon fiber, advanced aerodynamics, and a highly tuned engine that pushes the boundaries of automotive performance.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Special event reward',
    year: '2077',
    limitedEdition: true,
    specialFeatures: [
      'Carbon fiber body',
      'Active aerodynamics',
      'Track-tuned suspension',
      'High-performance braking system',
      'Exclusive Samum livery',
      'Limited production model'
    ]
  },
  // Quadra Vehicles
  {
    id: 'quadra_turbor_740',
    manufacturer: 'Quadra',
    model: 'Turbo-R',
    series: '740',
    type: 'car',
    class: 'Sport',
    price: 69000,
    buyable: true,
    topSpeed: 210,
    handling: 7.5,
    acceleration: 8.0,
    description: 'The Quadra Turbo-R was introduced as America\'s response to Japanese sports car manufacturers. Designed and built in Detroit, it became a star in the tuner scene when released in the mid-2050s, despite its universally criticized suspension. The 740 model features a powerful turbo-charged V8 engine and a design reminiscent of 1980s exotic sports cars, with its wedge shape and bulging wheel arches.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      'Turbo-charged V8 engine',
      'Rear-wheel drive',
      'Aerodynamic design',
      'Gull-wing steering wheel',
      'Heads-up display',
      'Mid-mounted engine'
    ]
  },
  {
    id: 'quadra_turbor_vtech',
    manufacturer: 'Quadra',
    model: 'Turbo-R',
    series: 'V-Tech',
    type: 'car',
    class: 'Sport',
    price: 0, // Not directly purchasable
    buyable: false,
    topSpeed: 220,
    handling: 8.5,
    acceleration: 8.5,
    description: 'The Turbo-R V-Tech is the queen of the road, a car that turns heads even when you\'re not burning rubber. Introduced in 2058 as an improved version of the original Turbo-R, it features an enhanced exhaust system and suspension, quickly earning it the status of a cult muscle car. The V-Tech represents the pinnacle of Quadra\'s engineering, combining raw power with refined handling.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Reward for completing the \'Sex On Wheels\' quest after finishing Gig: Life\'s Work',
    year: '2058',
    specialFeatures: [
      'Enhanced V8 engine',
      'Improved exhaust system',
      'Upgraded suspension',
      'Rear-wheel drive',
      'Aerodynamic body kit',
      'Limited production model'
    ]
  },
  {
    id: 'quadra_type66_640ts',
    manufacturer: 'Quadra',
    model: 'Type-66',
    series: '640 TS',
    type: 'car',
    class: 'Muscle',
    price: 85000,
    buyable: true,
    topSpeed: 200,
    handling: 7.0,
    acceleration: 7.5,
    description: 'The Type-66 640 TS is a modern interpretation of classic American muscle cars, blending retro styling with futuristic technology. Known for its raw power and aggressive styling, it\'s a favorite among those who appreciate classic American automotive design with a cyberpunk twist. The 640 TS model offers a perfect balance of performance and drivability for everyday use.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      'Retro-futuristic design',
      'Powerful V8 engine',
      'Rear-wheel drive',
      'Modern suspension system',
      'Digital instrument cluster'
    ]
  },
  {
    id: 'quadra_type66_avenger',
    manufacturer: 'Quadra',
    model: 'Type-66',
    series: 'Avenger',
    type: 'car',
    class: 'Muscle',
    price: 0, // Not directly purchasable
    buyable: false,
    topSpeed: 230,
    handling: 8.0,
    acceleration: 8.0,
    description: 'The Type-66 Avenger is a high-performance variant of the classic Type-66, designed for those who demand the ultimate in power and handling. With its aggressive styling, enhanced aerodynamics, and tuned engine, the Avenger is a force to be reckoned with on both the streets and the track. This model pays homage to classic American muscle cars while incorporating cutting-edge technology.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Special event reward',
    year: '2077',
    limitedEdition: true,
    specialFeatures: [
      'High-performance V8 engine',
      'Enhanced aerodynamics',
      'Upgraded suspension',
      'Sport-tuned exhaust',
      'Limited production',
      'Exclusive Avenger badging'
    ]
  },
  {
    id: 'quadra_type66_bulitt',
    manufacturer: 'Quadra',
    model: 'Type-66',
    series: 'Bulitt',
    type: 'car',
    class: 'Muscle',
    price: 97000,
    buyable: true,
    topSpeed: 225,
    handling: 8.0,
    acceleration: 8.5,
    description: 'The Type-66 "Bulitt" is a high-performance variant of the classic Type-66, designed for those who appreciate raw power and classic styling. This limited-edition model features a unique blue livery with white racing stripes, paying homage to classic American muscle cars. The Bulitt is known for its aggressive exhaust note and exceptional straight-line performance.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      'High-output V8 engine',
      'Classic blue with white stripes livery',
      'Performance-tuned suspension',
      'Sport exhaust system',
      'Limited production model',
      'Retro-inspired interior'
    ]
  },
  {
    id: 'quadra_type66_cthulhu',
    manufacturer: 'Quadra',
    model: 'Type-66',
    series: 'Cthulhu',
    type: 'car',
    class: 'Race',
    price: 0, // Not directly purchasable
    buyable: false,
    topSpeed: 240,
    handling: 9.0,
    acceleration: 9.0,
    description: 'The Type-66 "Cthulhu" is a custom racing variant of the Type-66, originally built for the late street racer Peter Sampson. This one-of-a-kind machine features extensive aerodynamic modifications, a stripped-down interior, and a highly-tuned engine that pushes the boundaries of what\'s possible with Quadra\'s legendary V8. The Cthulhu is not just a car—it\'s a legend on the streets of Night City.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Complete all Claire\'s races in "The Beast in Me" questline',
    year: '2076',
    limitedEdition: true,
    specialFeatures: [
      'Race-tuned V8 engine',
      'Custom widebody kit',
      'Aerodynamic enhancements',
      'Roll cage and racing harness',
      'Lightweight construction',
      'Unique Cthulhu livery'
    ]
  },
  {
    id: 'quadra_type66_jenrowley',
    manufacturer: 'Quadra',
    model: 'Type-66',
    series: 'Jen Rowley',
    type: 'car',
    class: 'Muscle',
    price: 0, // Not directly purchasable
    buyable: false,
    topSpeed: 235,
    handling: 8.5,
    acceleration: 8.5,
    description: 'The Type-66 "Jen Rowley" is a special edition model named after the legendary rockerboy. Featuring a striking black and red color scheme with flame decals, this car is as much a work of art as it is a high-performance machine. The Jen Rowley edition comes with a custom sound system that can be heard from blocks away, making it a favorite among Night City\'s music and car enthusiasts alike.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Complete all of Rogue\'s gigs in the Afterlife',
    year: '2077',
    limitedEdition: true,
    specialFeatures: [
      'High-performance V8 engine',
      'Custom flame livery',
      'Premium sound system',
      'Leather interior with red stitching',
      'Limited production',
      'Signature Jen Rowley badging'
    ]
  },
  {
    id: 'quadra_type66_hoon',
    manufacturer: 'Quadra',
    model: 'Type-66',
    series: 'Hoon',
    type: 'car',
    class: 'Off-Road',
    price: 0, // Not directly purchasable
    buyable: false,
    topSpeed: 230,
    handling: 9.5,
    acceleration: 9.0,
    description: 'The Type-66 "Hoon" is a high-performance, all-terrain variant of the classic Type-66, designed as a tribute to legendary rally driver Ken Block. This beast features all-wheel drive, reinforced suspension, and aggressive off-road tires that allow it to dominate any terrain. The Hoon comes in a striking blue and white livery with the number 43, paying homage to Block\'s iconic rally cars. With its turbocharged engine and rally-inspired modifications, this is one of the most capable and exciting vehicles in Night City.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Complete all of the "Beast in Me" races with Claire',
    year: '2077',
    limitedEdition: true,
    specialFeatures: [
      'Turbocharged V8 engine',
      'All-wheel drive system',
      'Rally-spec suspension',
      'Off-road tires',
      'Roll cage',
      'Ken Block tribute livery'
    ]
  },
  {
    id: 'chevillon_emperor_620_raptor',
    manufacturer: 'Chevillon',
    model: 'Emperor',
    series: '620 Raptor',
    type: 'car',
    class: 'Off-Road',
    price: 73000,
    buyable: true,
    topSpeed: 190,
    handling: 7.5,
    acceleration: 7.0,
    description: 'The Chevillon Emperor 620 Raptor is a rugged off-road vehicle designed to handle the harsh conditions of the Badlands. With its raised suspension, all-terrain tires, and reinforced chassis, the Raptor can tackle any obstacle in its path. The powerful V8 engine provides plenty of torque for off-road adventures, while the spacious interior offers comfort for long journeys through the wasteland.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2076',
    specialFeatures: [
      '4.0L V8 engine',
      'Four-wheel drive',
      'Off-road suspension',
      'All-terrain tires',
      'Skid plates',
      'Roof rack',
      'Towing package'
    ]
  },
  {
    id: 'chevillon_emperor_swordfish',
    manufacturer: 'Chevillon',
    model: 'Emperor',
    series: 'Swordfish',
    type: 'car',
    class: 'Muscle',
    price: 85000,
    buyable: true,
    topSpeed: 210,
    handling: 7.0,
    acceleration: 8.0,
    description: 'The Chevillon Emperor Swordfish is a high-performance muscle car that combines classic American styling with modern technology. Featuring a supercharged V8 engine, the Swordfish delivers blistering acceleration and a thunderous exhaust note. The aggressive front grille and aerodynamic body kit give it a menacing presence on the streets of Night City, while the luxurious interior ensures a comfortable ride.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      'Supercharged 6.2L V8',
      'Rear-wheel drive',
      'Performance suspension',
      'Sport-tuned exhaust',
      'Leather interior',
      'Digital dashboard',
      'Limited-slip differential'
    ]
  },
  {
    id: 'chevillon_emperor_swordfish_avenger',
    manufacturer: 'Chevillon',
    model: 'Emperor',
    series: 'Swordfish Avenger',
    type: 'car',
    class: 'Muscle',
    price: 0, // Not directly purchasable
    buyable: false,
    topSpeed: 220,
    handling: 7.5,
    acceleration: 8.5,
    description: 'The Chevillon Emperor Swordfish Avenger is a limited-edition performance variant of the standard Swordfish. With its enhanced aerodynamics, upgraded suspension, and more powerful engine, the Avenger is the ultimate expression of Chevillon\'s muscle car heritage. The exclusive black and red color scheme and unique badging make it instantly recognizable as something special.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Complete all of the "Beat on the Brat" fights',
    year: '2077',
    limitedEdition: true,
    specialFeatures: [
      'Supercharged 6.4L V8',
      'Track-tuned suspension',
      'Aerodynamic body kit',
      'Carbon fiber accents',
      'Avenger badging',
      'Limited production',
      'Performance exhaust',
      'Upgraded brakes'
    ]
  },
  {
    id: 'herrera_outlaw_gts',
    manufacturer: 'Herrera',
    model: 'Outlaw',
    series: 'GTS',
    type: 'car',
    class: 'Super',
    price: 220000,
    buyable: true,
    topSpeed: 250,
    handling: 9.0,
    acceleration: 9.5,
    description: 'The Herrera Outlaw GTS is a masterpiece of automotive engineering, blending breathtaking performance with stunning Spanish design. Hand-built in Barcelona, this supercar features a mid-mounted V10 engine that delivers explosive acceleration and a spine-tingling exhaust note. The Outlaw GTS is equally at home on the track as it is cruising the streets of Night City, with a luxurious interior that pampers its driver in fine leather and carbon fiber.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      '5.2L naturally aspirated V10',
      '7-speed dual-clutch transmission',
      'Carbon-ceramic brakes',
      'Active aerodynamics',
      'Hand-stitched leather interior',
      'Carbon fiber body panels',
      'Launch control',
      'Magnetic ride suspension'
    ]
  },
  {
    id: 'herrera_outlaw_weiler',
    manufacturer: 'Herrera',
    model: 'Outlaw',
    series: 'Weiler',
    type: 'car',
    class: 'Hypercar',
    price: 0, // Not directly purchasable
    buyable: false,
    topSpeed: 260,
    handling: 9.5,
    acceleration: 9.8,
    description: 'The Herrera Outlaw Weiler is the ultimate expression of Spanish automotive excellence. This limited-production hypercar is the result of a collaboration between Herrera and legendary racing driver Klaus Weiler. Every component has been optimized for maximum performance, from the twin-turbo V12 engine to the active aerodynamics that generate incredible downforce. The Weiler is not just a car—it\'s a statement of intent, a machine that redefines what\'s possible on four wheels.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Complete all of the street racing events in Night City',
    year: '2077',
    limitedEdition: true,
    specialFeatures: [
      '6.5L twin-turbo V12',
      'Weiler-tuned aerodynamics',
      'Carbon fiber monocoque',
      'Active suspension',
      'Ceramic brakes with gold calipers',
      'Limited to 25 units worldwide',
      'Weiler signature badging',
      'Track-focused setup',
      'Exclusive Weiler livery'
    ]
  },
  {
    id: 'mahir_kuej_620_r',
    manufacturer: 'Mahir',
    model: 'Kuej',
    series: '620 R',
    type: 'motorcycle',
    class: 'Sport',
    price: 45000,
    buyable: true,
    topSpeed: 280,
    handling: 9.5,
    acceleration: 9.8,
    description: 'The Mahir Kuej 620 R is a high-performance sportbike that combines cutting-edge technology with aggressive styling. Designed for the track but street-legal, the 620 R features a powerful inline-four engine that delivers explosive acceleration and a spine-tingling exhaust note. The lightweight chassis and premium suspension components provide razor-sharp handling, making it one of the most capable sportbikes in Night City.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      '999cc inline-four engine',
      'Quick-shift transmission',
      'TFT digital display',
      'Brembo brakes',
      'Öhlins suspension',
      'Carbon fiber bodywork',
      'Track mode',
      'Launch control'
    ]
  },
  {
    id: 'mahir_kuej_620_r_phantom',
    manufacturer: 'Mahir',
    model: 'Kuej',
    series: '620 R Phantom',
    type: 'motorcycle',
    class: 'Sport',
    price: 0, // Not directly purchasable
    buyable: false,
    topSpeed: 290,
    handling: 9.8,
    acceleration: 9.9,
    description: 'The Mahir Kuej 620 R Phantom is a limited-edition track-focused variant of the already impressive 620 R. Built in collaboration with the Arasaka racing team, the Phantom features extensive use of carbon fiber and titanium to reduce weight, along with a more powerful engine and upgraded electronics. The stealthy matte black paint scheme and exclusive badging make it one of the most sought-after motorcycles in Night City.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Complete all of the "The Highwayman" time trials',
    year: '2077',
    limitedEdition: true,
    specialFeatures: [
      '1100cc turbocharged inline-four',
      'Arasaka racing electronics',
      'Full carbon fiber fairing',
      'Titanium exhaust system',
      'Öhlins TTX suspension',
      'Brembo GP4-RS brakes',
      'Limited to 50 units',
      'Phantom badging',
      'Race-spec tires',
      'Data acquisition system'
    ]
  },
  {
    id: 'porsche_911_turbo_930',
    manufacturer: 'Porsche',
    model: '911',
    series: 'Turbo (930)',
    type: 'car',
    class: 'Classic',
    price: 0, // Not directly purchasable
    buyable: false,
    topSpeed: 260,
    handling: 8.5,
    acceleration: 8.0,
    description: 'The Porsche 911 Turbo (930) is a legendary sports car that has been preserved in pristine condition since the late 20th century. This particular model features the iconic "whale tail" rear spoiler and the powerful 3.3L turbocharged flat-six engine that made it a performance icon. The 930 is a true piece of automotive history, representing the golden age of analog sports cars before the digital age took over.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Complete the "Chippin\' In" side job',
    year: '1977',
    limitedEdition: true,
    specialFeatures: [
      '3.3L turbocharged flat-six',
      '4-speed manual transmission',
      'Whale tail rear spoiler',
      'Fuchs alloy wheels',
      'Classic Porsche interior',
      'Fully restored condition',
      'Analog gauges',
      'Iconic design'
    ]
  },
  {
    id: 'porsche_911_turbo_992',
    manufacturer: 'Porsche',
    model: '911',
    series: 'Turbo S (992)',
    type: 'car',
    class: 'Super',
    price: 0, // Not directly purchasable
    buyable: false,
    topSpeed: 330,
    handling: 9.5,
    acceleration: 9.8,
    description: 'The Porsche 911 Turbo S (992) is the ultimate evolution of the 911 lineup, combining cutting-edge technology with the timeless 911 design. This modern supercar features a twin-turbocharged flat-six engine producing over 640 horsepower, all-wheel drive, and advanced aerodynamics. The 992 represents the pinnacle of Porsche\'s engineering excellence, delivering blistering performance while maintaining the everyday usability that the 911 is known for.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Complete the "Ghost Town" mission with Panam',
    year: '2077',
    limitedEdition: true,
    specialFeatures: [
      '3.8L twin-turbo flat-six',
      '8-speed PDK transmission',
      'All-wheel drive',
      'Active aerodynamics',
      'Carbon-ceramic brakes',
      'Adaptive suspension',
      'Digital cockpit',
      'Premium sound system',
      'Sport Chrono package',
      'Exclusive paint color'
    ]
  },
  {
    id: 'delamain_cab',
    manufacturer: 'Delamain',
    model: 'Nova',
    series: 'Autonomous Taxi',
    type: 'car',
    class: 'Luxury',
    price: 0, // Not for sale
    buyable: false,
    topSpeed: 180,
    handling: 7.5,
    acceleration: 7.0,
    description: 'The Delamain Nova is the standard autonomous taxi cab that can be found throughout Night City. These self-driving vehicles are part of Delamain\'s fleet, offering safe and reliable transportation to the citizens of Night City. While not designed for high performance, the Nova provides a smooth, comfortable ride with all the modern amenities expected from a premium taxi service. The vehicle features a spacious interior, advanced climate control, and an AI assistant to assist with navigation and passenger needs.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Available as a taxi service throughout Night City',
    year: '2077',
    specialFeatures: [
      'Fully autonomous driving',
      'AI passenger assistance',
      'Advanced safety systems',
      'Premium interior materials',
      'Climate control',
      'Infotainment system',
      'WiFi hotspot',
      'Self-cleaning interior'
    ]
  },
  {
    id: 'delamain_excelsior',
    manufacturer: 'Delamain',
    model: 'Excelsior',
    series: 'Luxury Autonomous',
    type: 'limousine',
    class: 'Luxury',
    price: 0, // Not for sale
    buyable: false,
    topSpeed: 200,
    handling: 8.0,
    acceleration: 7.5,
    description: 'The Delamain Excelsior is the pinnacle of autonomous luxury transportation in Night City. This extended-wheelbase limousine is reserved for VIP clients and corporate executives who demand the utmost in comfort and privacy. The Excelsior features a soundproofed cabin with premium leather seating, a minibar, and a state-of-the-art entertainment system. The vehicle\'s advanced AI ensures a smooth, stress-free journey through the chaotic streets of Night City, with security features that provide peace of mind for high-profile passengers.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'VIP service only, not available to the general public',
    year: '2077',
    specialFeatures: [
      'Extended wheelbase limousine',
      'Full privacy partition',
      'Premium leather interior',
      'Built-in minibar',
      'Entertainment system',
      'Soundproof cabin',
      'Advanced security systems',
      'Executive seating',
      'Ambient lighting',
      'Self-leveling suspension'
    ]
  },
  {
    id: 'rayfield_aerondight_guinevere',
    manufacturer: 'Rayfield',
    model: 'Aerondight',
    series: 'Guinevere',
    type: 'car',
    class: 'Hypercar',
    price: 0, // Not directly purchasable
    buyable: false,
    topSpeed: 270,
    handling: 9.5,
    acceleration: 9.7,
    description: 'The Rayfield Aerondight Guinevere is the epitome of luxury and performance, handcrafted for the elite of Night City. This limited-edition hypercar features a hybrid powertrain that combines a thunderous V12 engine with electric motors for instantaneous torque and blistering acceleration. The Guinevere\'s exterior is a work of art, with flowing lines and scissor doors that command attention. Inside, the cabin is trimmed in the finest leather and carbon fiber, with every surface exuding opulence and precision engineering.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Complete all "The Beast in Me" races with the highest rating',
    year: '2077',
    limitedEdition: true,
    specialFeatures: [
      '6.5L hybrid V12 powertrain',
      'Carbon fiber monocoque chassis',
      'Active aerodynamics',
      'Scissor doors',
      'Hand-stitched leather interior',
      'Gold-plated accents',
      'Limited to 10 units worldwide',
      'Personalized owner\'s package',
      'Track day experience'
    ]
  },
  {
    id: 'rayfield_caliburn',
    manufacturer: 'Rayfield',
    model: 'Caliburn',
    series: 'Super Sport',
    type: 'car',
    class: 'Hypercar',
    price: 0, // Not directly purchasable
    buyable: false,
    topSpeed: 330,
    handling: 9.8,
    acceleration: 9.9,
    description: 'The Rayfield Caliburn is the fastest production car in Night City, a technological marvel that pushes the boundaries of automotive engineering. With its sleek, aerodynamic design and hybrid powertrain producing over 1,000 horsepower, the Caliburn can accelerate from 0 to 100 km/h in under 2 seconds. The interior is a minimalist masterpiece, featuring a holographic display and premium materials throughout. The Caliburn is more than just a car—it\'s a statement of power and prestige.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Find in a hidden tunnel in the Badlands',
    year: '2077',
    specialFeatures: [
      'Hybrid V8 powertrain',
      'All-wheel drive',
      'Active aerodynamics',
      'Carbon ceramic brakes',
      'Holographic display',
      'Lightweight construction',
      'Performance exhaust',
      'Track mode',
      'Launch control',
      'Limited production'
    ]
  },
  {
    id: 'thorton_colby_cx410_butte',
    manufacturer: 'Thorton',
    model: 'Colby',
    series: 'CX410 Butte',
    type: 'truck',
    class: 'Off-Road',
    price: 55000,
    buyable: true,
    topSpeed: 160,
    handling: 6.5,
    acceleration: 5.5,
    description: 'The Thorton Colby CX410 Butte is a rugged off-road pickup truck designed to handle the toughest conditions the Badlands can throw at it. With its high ground clearance, heavy-duty suspension, and powerful V8 engine, the Butte is the vehicle of choice for nomads and mercenaries who need to traverse the wasteland in style. The spacious cabin offers comfort for long journeys, while the reinforced bed can carry all the gear you need for extended trips into the desert.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2076',
    specialFeatures: [
      '5.7L V8 engine',
      'Four-wheel drive',
      'Heavy-duty suspension',
      'Off-road tires',
      'Reinforced chassis',
      'Extended cab',
      'Towing package',
      'Skid plates'
    ]
  },
  {
    id: 'thorton_galena_rattler',
    manufacturer: 'Thorton',
    model: 'Galena',
    series: 'Rattler',
    type: 'car',
    class: 'Economy',
    price: 22000,
    buyable: true,
    topSpeed: 150,
    handling: 5.5,
    acceleration: 5.0,
    description: 'The Thorton Galena Rattler is a no-nonsense economy car designed for the working class of Night City. While it may not win any beauty contests, the Rattler is known for its reliability and low operating costs. The simple four-cylinder engine sips fuel, making it an economical choice for daily commuting. The interior is basic but functional, with durable materials designed to withstand years of use. The Rattler may not be flashy, but it gets the job done without breaking the bank.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      '1.8L inline-4 engine',
      'Front-wheel drive',
      '5-speed manual transmission',
      'Fuel efficient',
      'Basic infotainment',
      'Cloth seats',
      'Compact size',
      'Low maintenance costs'
    ]
  },
  {
    id: 'thorton_meringue',
    manufacturer: 'Thorton',
    model: 'Meringue',
    series: 'Luxury',
    type: 'car',
    class: 'Luxury',
    price: 95000,
    buyable: true,
    topSpeed: 200,
    handling: 7.5,
    acceleration: 7.0,
    description: 'The Thorton Meringue is the luxury flagship of the Thorton lineup, offering premium features and comfort at a more accessible price point than European competitors. The Meringue features a powerful V8 engine, plush leather interior, and advanced technology throughout. While it may not have the prestige of a Rayfield or Villefort, the Meringue delivers excellent value for those who want luxury without the flashy price tag. The smooth ride and quiet cabin make it perfect for executives who want to arrive at their destination in comfort and style.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      '4.6L V8 engine',
      'Rear-wheel drive',
      '8-speed automatic transmission',
      'Premium leather interior',
      'Wood trim accents',
      'Advanced infotainment',
      'Heated and ventilated seats',
      'Premium sound system',
      'Adaptive cruise control',
      'Lane keeping assist'
    ]
  },
  {
    id: 'villefort_cortes_v5000_valor',
    manufacturer: 'Villefort',
    model: 'Cortes',
    series: 'V5000 Valor',
    type: 'car',
    class: 'Luxury',
    price: 120000,
    buyable: true,
    topSpeed: 220,
    handling: 8.0,
    acceleration: 7.5,
    description: 'The Villefort Cortes V5000 Valor is the epitome of European luxury and performance. Handcrafted in France, the Valor combines timeless elegance with cutting-edge technology. The hand-stitched leather interior, real wood trim, and premium materials create an atmosphere of refined opulence. Under the hood, a powerful V8 engine provides effortless acceleration, while the adaptive air suspension ensures a smooth, comfortable ride. The Valor is the perfect choice for executives and dignitaries who demand the very best.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      '4.4L twin-turbo V8',
      'All-wheel drive',
      'Adaptive air suspension',
      'Hand-stitched leather',
      'Real wood trim',
      'Executive rear seating',
      'Premium sound system',
      'Night vision',
      'Massaging seats',
      'Advanced driver assistance'
    ]
  },
  {
    id: 'villefort_alvarado_v4f570f',
    manufacturer: 'Villefort',
    model: 'Alvarado',
    series: 'V4F570-F',
    type: 'SUV',
    class: 'Luxury',
    price: 98000,
    buyable: true,
    topSpeed: 210,
    handling: 7.0,
    acceleration: 6.5,
    description: 'The Villefort Alvarado V4F570-F is a full-size luxury SUV that combines opulence with capability. With seating for up to seven passengers, the Alvarado offers spacious comfort for the whole family without compromising on performance. The handcrafted interior features premium leather, real metal accents, and state-of-the-art technology throughout. The powerful V8 engine provides ample power for highway cruising, while the advanced all-wheel-drive system ensures confident handling in all conditions.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      '4.0L twin-turbo V8',
      'All-wheel drive',
      'Air suspension',
      'Three-zone climate control',
      'Panoramic sunroof',
      'Rear-seat entertainment',
      'Premium audio system',
      'Heated and cooled seats',
      'Handling package',
      'Towing package'
    ]
  },
  {
    id: 'yaiba_kusanagi_ct-3x',
    manufacturer: 'Yaiba',
    model: 'Kusanagi',
    series: 'CT-3X',
    type: 'motorcycle',
    class: 'Sport',
    price: 55000,
    buyable: true,
    topSpeed: 290,
    handling: 9.5,
    acceleration: 9.7,
    description: 'The Yaiba Kusanagi CT-3X is a high-performance sportbike that combines cutting-edge technology with sleek, aerodynamic design. Inspired by classic Japanese sportbikes but built with futuristic materials and engineering, the Kusanagi is a favorite among street racers and motorcycle enthusiasts in Night City. The powerful electric motor delivers instant torque, propelling the bike from 0 to 100 km/h in under 2 seconds. The lightweight carbon fiber frame and advanced suspension system provide exceptional handling, making it one of the most agile vehicles in the city.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    year: '2077',
    specialFeatures: [
      'High-performance electric motor',
      'Carbon fiber monocoque frame',
      'Regenerative braking',
      'Active aerodynamics',
      'TFT digital display',
      'Riding modes',
      'Quick-charge battery',
      'LED lighting',
      'Traction control',
      'Quick-shift transmission'
    ]
  },
  {
    id: 'yaiba_kusanagi_takemura',
    manufacturer: 'Yaiba',
    model: 'Kusanagi',
    series: 'Takemura Edition',
    type: 'motorcycle',
    class: 'Sport',
    price: 0, // Not directly purchasable
    buyable: false,
    topSpeed: 300,
    handling: 9.8,
    acceleration: 9.9,
    description: 'The Yaiba Kusanagi Takemura Edition is a rare and exclusive variant of the already impressive CT-3X, created in collaboration with the legendary Arasaka agent Goro Takemura. This special edition features a unique black and gold color scheme, enhanced performance components, and exclusive badging. The Takemura Edition is not just a motorcycle—it\'s a work of art, with hand-painted details and premium finishes throughout. The enhanced electric motor delivers even more power, while the upgraded suspension and brakes provide unmatched handling and stopping power.',
    images: [
      {
        "title": "Hella EC-D i360 Front",
        "src": "/vehicles/architecture.jpg",
        "alt": "Front view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Side",
        "src": "/vehicles/nature.jpg",
        "alt": "Side view of Archer Hella EC-D i360"
      },
      {
        "title": "Hella EC-D i360 Interior",
        "src": "/vehicles/technology.jpg",
        "alt": "Interior of Archer Hella EC-D i360"
      }
    ],
    obtainedFrom: 'Complete all of Goro Takemura\'s missions',
    year: '2077',
    limitedEdition: true,
    specialFeatures: [
      'Upgraded electric motor',
      'Exclusive black and gold livery',
      'Hand-painted details',
      'Öhlins suspension',
      'Brembo brakes',
      'Carbon fiber wheels',
      'Limited production',
      'Takemura signature',
      'Performance tires',
      'Exclusive badging'
    ]
  }
];

export default vehicles;
