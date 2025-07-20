const cyberhacks = {
  combat: [
    {
      name: 'Overheat',
      icon: '/src/assets/hacks/OverheatProgram.webp',
      ramCost: '4 → 5 → 7 → 9',
      uploadTime: '2',
      cooldown: '2',
      description: 'Sets the enemy on fire, dealing damage over time.',
      effects: [
        'Uploading Overheat to an enemy already affected by it will extend its duration.',
        'Tier 3: Successful attacks on enemies affected by Overheat slightly extend its duration.',
        'Tier 4: Melts enemy armor over time (max −40%).',
        'Tier 5: Attacks on the affected enemy also deal Thermal damage equal to 10% of the normal physical damage.'
      ]
    },
    {
      name: 'Short Circuit',
      icon: '/src/assets/hacks/EMPOverloadProgram.webp',
      ramCost: '4 → 5 → 7 → 10',
      uploadTime: '3',
      cooldown: '1.5 → 1.25 → 1.0 → 0.5',
      description: 'Deals electrical damage to the target.',
      effects: [
        'Increases the duration of all Control quickhacks affecting the target by 3 seconds when hit by Short Circuit.',
        'Tier 3: +10% damage for each stack of Cyberware Malfunction affecting the enemy.',
        'Tier 4: Applies an EMP effect that deals additional damage over time.',
        'Tier 5: +20% damage against enemies below a High threat level.'
      ]
    },
    {
      name: 'Contagion',
      icon: '/src/assets/hacks/ContagionProgram.webp',
      ramCost: '5 → 7 → 9 → 12',
      uploadTime: '6 → 7 → 8',
      cooldown: '3 → 2',
      description: 'Infects the enemy with a virus that spreads to nearby enemies.',
      effects: [
        'Deals poison damage over time and can spread to 2 enemies within 8m.',
        'Tier 3: Can spread to 4 enemies. Duration increased by 1 sec.',
        'Tier 4: Applying a Burn or Overheat effect causes the toxic substance to detonate.',
        'Tier 5: +15% damage with this quickhack against each subsequent enemy it spreads to.'
      ]
    },
    {
      name: 'Synapse Burnout',
      icon: '/src/assets/hacks/BrainMeltProgram.webp',
      ramCost: '10 → 14 → 16',
      uploadTime: '3.0',
      cooldown: '-',
      description: 'Deals heavy damage based on spent RAM.',
      effects: [
        'Damage increases by 10% for each RAM unit currently spent (max. +300%).',
        'Tier 4: −2 RAM cost for 15 sec. after neutralizing an enemy with this quickhack. Stacks 3 times.',
        'Tier 5: When Overclock is active, the damage bonus increases by 100%.',
        'Neutralizing an enemy with this quickhack extends Overclock\'s duration by 3 sec.'
      ]
    }
  ],
  control: [
    {
      name: 'Reboot Optics',
      icon: '/src/assets/hacks/BlindProgram.webp',
      ramCost: '2 → 5 → 7',
      uploadTime: '8.0 → 15.0',
      cooldown: '0.3',
      description: 'Resets detection progress and reduces enemy accuracy.',
      effects: [
        'Tier 2: Extends the base effect\'s duration.',
        'Tier 3: +15% headshot and weakspot damage against the affected enemy.',
        'Tier 4: Blinds the enemy for the duration of the quickhack.',
        'Tier 5: Neutralizing the affected enemy via headshots or weakspot replenishes +3 RAM units.'
      ]
    },
    {
      name: 'Cyberware Malfunction',
      icon: '/src/assets/hacks/DisableCyberwareProgram.webp',
      ramCost: '4',
      uploadTime: '10.0',
      cooldown: '0.3',
      description: 'Disables enemy cyberware and increases damage against them.',
      effects: [
        'Stacks up to 3 → 5 → 8 times.',
        'Increases all damage against the affected enemy by 5% per stack.',
        'At 2 stacks, permanently disables enemy cyberware.',
        'Tier 4: At 3 stacks, deals Electrical damage over time.',
        'Tier 5: At maximum stacks, enemy cyberware overloads, dealing massive damage.'
      ]
    },
    {
      name: 'Cripple Movement',
      icon: '/src/assets/hacks/LocomotionMalfunctionProgram.webp',
      ramCost: '4 → 6',
      uploadTime: '13.8',
      cooldown: '0.3',
      description: 'Disables enemy movement and movement-related cyberware.',
      effects: [
        '+15% melee damage against affected enemies.',
        'Tier 4: Affected enemies are more susceptible to melee Finishers.',
        'Tier 5: +5% Health and +2 RAM after performing Finishers on affected enemies.'
      ]
    },
    {
      name: 'Weapon Glitch',
      icon: '/src/assets/hacks/WeaponMalfunctionProgram.webp',
      ramCost: '4',
      uploadTime: '14.0',
      cooldown: '0.3',
      description: 'Jams a target\'s weapon, making it temporarily unusable.',
      effects: [
        'Reduces enemy accuracy and disables Smart-targeting and cover-penetration.',
        'Locking onto the affected enemy with a Smart weapon extends the duration.',
        'Tier 4: Detonates the enemy\'s primary weapon, forcing them to switch to their secondary.',
        'Tier 5: +6% Crit Chance with Smart Weapons for 10 sec. when uploaded. Stacks 5 times.'
      ]
    }
  ],
  covert: [
    {
      name: 'Ping',
      icon: '/src/assets/hacks/PingProgram.webp',
      ramCost: '4 → 5 → 7 → 4',
      uploadTime: '9.2 → 13.8 → 18.4 → 34.5',
      cooldown: '1',
      description: 'Reveals enemies and devices connected to the local network.',
      effects: [
        'Untraceable.',
        'Tier 3: +25% lock-on speed with Smart weapons against Pinged enemies.',
        'Tier 5: Highlights devices and allows you to quickhack them through walls.'
      ]
    },
    {
      name: 'Bait',
      icon: '/src/assets/hacks/WhistleProgram.webp',
      ramCost: '3 → 4 → 3',
      uploadTime: '17.2',
      cooldown: '0.3',
      description: 'Lures an enemy to your position without alerting them.',
      effects: [
        'Untraceable.',
        'Tier 3: Can be used during combat, forcing the affected enemy out of cover.',
        'Tier 4: When uploaded through a camera, lures the enemy to the camera instead.',
        'Tier 5: When uploaded a second time, the enemy will stop and turn back.'
      ]
    },
    {
      name: 'Memory Wipe',
      icon: '/src/assets/hacks/MemoryWipeProgram.webp',
      ramCost: '8 → 10 → 32',
      uploadTime: '9.2',
      cooldown: '1.5 → 10 → 3',
      description: 'Prevents the target from noticing you for a short time.',
      effects: [
        'Untraceable. Reduces trace progress by 25% when outside combat.',
        'Tier 4: Quickhacks queued after Memory Wipe are not traceable.',
        'Tier 5: Forces all enemies to exit combat state.'
      ]
    },
    {
      name: 'Sonic Shock',
      icon: '/src/assets/hacks/CommsNoiseProgram.webp',
      ramCost: '4 → 5 → 6 → 2',
      uploadTime: '34.5',
      cooldown: '1.0 → 2.0',
      description: 'Deafens the enemy and scrambles their communications.',
      effects: [
        'Untraceable.',
        'Prevents the affected enemy from communicating with allies.',
        'Tier 4: Cloaks the enemy from their allies\' sensory systems.',
        'Tier 5: Uploading to an enemy affected by Memory Wipe and Reboot Optics causes unconsciousness.'
      ]
    }
  ],
  ultimate: [
    {
      name: 'Cyberpsychosis',
      icon: '/src/assets/hacks/MadnessProgram.webp',
      ramCost: '22',
      uploadTime: '20.0 → 60.0',
      cooldown: '1.5',
      description: 'Forces the enemy to attack their allies or commit suicide.',
      effects: [
        'If no one is nearby, the target will commit suicide.',
        'Tier 5: +25% duration and +25% damage dealt for each other quickhack affecting them.'
      ]
    },
    {
      name: 'Suicide',
      icon: '/src/assets/hacks/SuicideProgram.webp',
      ramCost: '24',
      uploadTime: '1.0',
      cooldown: '12.5',
      description: 'Forces the enemy to kill themselves.',
      effects: [
        'The enemy will put a gun to their head and pull the trigger.',
        'Tier 5: +10% Health from neutralizing an enemy with Suicide.'
      ]
    },
    {
      name: 'System Collapse',
      icon: '/src/assets/hacks/SystemCollapseProgram.webp',
      ramCost: '28',
      uploadTime: '1.0',
      cooldown: '-',
      description: 'Knocks out the enemy silently by crippling their nervous system.',
      effects: [
        'Untraceable.',
        'Tier 5: Neutralizing an enemy reduces trace progress by 20%.',
        'Neutralizing a netrunner this way removes all trace progress.'
      ]
    },
    {
      name: 'Detonate Grenade',
      icon: '/src/assets/hacks/GrenadeExplodeProgram.webp',
      ramCost: '24',
      uploadTime: '15.0 → 1.0',
      cooldown: '1.0',
      description: 'Forces the enemy to detonate a grenade in their hands.',
      effects: [
        'Effect depends on the grenade type they have equipped.',
        'Can also detonate weakspots on robots and mechs.',
        'Tier 5: Detonation occurs instantly after upload.'
      ]
    },
    {
      name: 'Blackwall Gateway',
      icon: '/src/assets/hacks/GenericProgram.webp',
      ramCost: '14',
      uploadTime: '9',
      cooldown: '-',
      description: 'Spreads to multiple enemies, dealing lethal damage to cyberware.',
      effects: [
        'Spreads to 3 enemies within 20m.',
        'Deactivates mechs, robots, drones, and turrets.',
        'Automatically consumes RAM each time it spreads.'
      ]
    }
  ],
  device: [
    {
      name: 'Initiate Overload',
      icon: '/src/assets/hacks/Icon_Quickhack_Overload.webp',
      ramCost: '8',
      uploadTime: '3.0',
      cooldown: '15.0',
      description: 'Overloads a device\'s circuitry, causing it to explode after a short delay.',
      effects: [
        'Range: 15/20/25/30m',
        'Deals high damage in an area around the target device.',
        'Tier 3: Increases explosion radius by 25%.',
        'Tier 4: Reduces RAM cost by 2.',
        'Tier 5: Can chain to 1 additional device within range.'
      ]
    },
    {
      name: 'Friendly Mode',
      icon: '/src/assets/hacks/Icon_Quickhack_SetDeviceSupportMode.webp',
      ramCost: '6',
      uploadTime: '2.0',
      cooldown: '20.0',
      description: 'Overrides a device to temporarily make it friendly to you.',
      effects: [
        'Range: 10/15/20/25m',
        'Makes turrets and cameras target enemies instead of you.',
        'Tier 3: Duration increased by 50%.',
        'Tier 4: Can affect one additional device simultaneously.',
        'Tier 5: Affected devices deal 25% more damage.'
      ]
    },
    {
      name: 'Distract Enemies',
      icon: '/src/assets/hacks/Icon_Quickhack_Malfunction.webp',
      ramCost: '2',
      uploadTime: '0.5',
      cooldown: '10.0',
      description: 'Causes a device to malfunction, drawing the attention of nearby enemies.',
      effects: [
        'Range: 10/15/20/30m',
        'Causes a device to malfunction, creating a distraction that draws enemies to investigate.',
        'Tier 3: Distracts enemies for 50% longer.',
        'Tier 4: Distraction radius is increased by 30%.',
        'Tier 5: Can be used on multiple devices simultaneously within range.'
      ]
    },
    {
      name: 'Request Backup',
      icon: '/src/assets/hacks/Icon_Quickhack_CommsCallIn.webp',
      ramCost: '3',
      uploadTime: '1.0',
      cooldown: '1.0',
      description: 'Calls over one additional enemy to the target location.',
      effects: [
        'Range: 10/15/20/30m',
        'Simulates a request for aid by calling 1 enemy within range to the target enemy\'s location.',
        'Tier 3: When uploaded to an enemy affected by Sonic Shock, the enemy will instead leave to provide backup at an ally\'s location.',
        'Tier 4: Can be used during combat to force the enemy out from cover.',
        'Tier 5: When uploaded to an enemy affected by Bait, up to 4 enemies will be called over.'
      ]
    },
    {
      name: 'Surveillance Camera Control',
      icon: '/src/assets/hacks/Icon_Quickhack_TakeControl.webp',
      ramCost: '3',
      uploadTime: '1.0',
      cooldown: '5.0',
      description: 'Allows you to take control of surveillance cameras in the area.',
      effects: [
        'Range: 15/20/25/30m',
        'Take control of a surveillance camera to scout areas and mark enemies.',
        'Tier 3: Can rotate cameras 360 degrees.',
        'Tier 4: Can see through smoke and some obstacles.',
        'Tier 5: Can access cameras through walls if they are on the same network.'
      ]
    },
    {
      name: 'Take Control',
      icon: '/src/assets/hacks/Icon_Quickhack_TakeControl.webp',
      ramCost: '0',
      uploadTime: '0',
      cooldown: '0',
      description: 'Allows you to take control over cameras, turrets, and vehicles (with Carhacker perk).',
      effects: [
        'Comes pre-installed on your cyberdeck.',
        'Can be used to access security systems and control turrets to target enemies.',
        'With the Carhacker perk, can also be used to take control of vehicles.'
      ]
    },
    {
      name: 'Turret Control',
      icon: '/src/assets/hacks/Icon_Quickhack_TakeControl.webp',
      ramCost: '6',
      uploadTime: '2.0',
      cooldown: '15.0',
      description: 'Allows you to take control of automated turrets.',
      effects: [
        'Range: 10/15/20/25m',
        'Take control of an automated turret to attack enemies.',
        'Tier 3: Increases turret damage by 25%.',
        'Tier 4: Reduces RAM cost by 2.',
        'Tier 5: Can control turrets through walls if they are on the same network.'
      ]
    }
  ],
  vehicle: [
    {
      name: 'Take Control',
      icon: '/src/assets/hacks/Icon_Quickhack_TakeControl.webp',
      ramCost: '10',
      uploadTime: '5.0',
      cooldown: '60.0',
      description: 'Allows you to take remote control of a vehicle.',
      effects: [
        'Range: 30/40/50/60m',
        'Take control of a vehicle and drive it remotely.',
        'Tier 3: Increases control range by 50%.',
        'Tier 4: Reduces RAM cost by 3.',
        'Tier 5: Can control vehicles through walls if they are on the same network.'
      ]
    },
    {
      name: 'Floor It',
      icon: '/src/assets/hacks/Icon_Quickhack_VehicleAccelerate.webp',
      ramCost: '6',
      uploadTime: '1.0',
      cooldown: '5.0',
      description: 'Makes the vehicle accelerate to maximum speed.',
      effects: [
        'Forces the vehicle to accelerate to its top speed for a short duration.',
        'Can cause the driver to lose control of the vehicle.',
        'Particularly effective when used on vehicles in pursuit.'
      ]
    },
    {
      name: 'Emergency Brake',
      icon: '/src/assets/hacks/Icon_Quickhack_VehicleHitBrakes.webp',
      ramCost: '4',
      uploadTime: '0.5',
      cooldown: '3.0',
      description: 'Causes the vehicle to perform an emergency stop.',
      effects: [
        'Forces the vehicle to brake suddenly, potentially causing it to spin out.',
        'Can be used to stop pursuing vehicles or cause accidents.',
        'More effective at higher speeds.'
      ]
    },
    {
      name: 'Self-destruct',
      icon: '/src/assets/hacks/Icon_Quickhack_VehicleExplode.webp',
      ramCost: '12',
      uploadTime: '3.0',
      cooldown: '30.0',
      description: 'Triggers the vehicle\'s self-destruct sequence.',
      effects: [
        'Causes the vehicle to explode after a short delay.',
        'Deals massive damage to nearby enemies and the vehicle itself.',
        'Can be used as a last resort or to set up explosive traps.'
      ]
    }
  ]
};

export default cyberhacks;