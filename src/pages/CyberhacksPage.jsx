import React, { useState, useEffect } from 'react';

const CyberhacksPage = () => {
  const [selectedHack, setSelectedHack] = useState('neural-override');
  
  const hacks = [
    {
      id: 'neural-hacks',
      label: 'Neural Hacks',
      icon: '🧠',
      children: [
        {
          id: 'direct-neural',
          label: 'Direct Neural',
          icon: '⚡',
          children: [
            {
              id: 'neural-override',
              label: 'Neural Override',
              icon: '🧬',
              description: 'Temporary control over organic neural networks',
              difficulty: 'Very Hard',
              ram: 16,
              duration: '30s',
              effect: 'Takes control of target\'s motor functions',
              requirements: ['Neural Interface v4.2+', 'Cyberdeck (12+ RAM)']
            },
            {
              id: 'synapse-burnout',
              label: 'Synapse Burnout',
              icon: '🔥',
              description: 'Overloads neural pathways causing severe pain',
              difficulty: 'Hard',
              ram: 12,
              duration: '15s',
              effect: 'Stuns target and deals damage over time',
              requirements: ['Neural Interface v4.0+', 'Cyberdeck (10+ RAM)']
            }
          ]
        },
        {
          id: 'sensory-hacks',
          label: 'Sensory',
          icon: '👁️',
          children: [
            {
              id: 'optic-camo',
              label: 'Optical Camo',
              icon: '👁️',
              description: 'Bends light around the target',
              difficulty: 'Medium',
              ram: 8,
              duration: '45s',
              effect: 'Makes target nearly invisible',
              requirements: ['Optic Interface v3.5+', 'Cyberdeck (8+ RAM)']
            }
          ]
        }
      ]
    },
    {
      id: 'ice-hacks',
      label: 'ICE Penetration',
      icon: '❄️',
      children: [
        {
          id: 'ice-breaker',
          label: 'ICE Breaker',
          icon: '⛏️',
          description: 'Penetrates Intrusion Countermeasure Electronics',
          difficulty: 'Extreme',
          ram: 20,
          duration: 'Permanent',
          effect: 'Disables security ICE for 60 seconds',
          requirements: ['ICE Breaker Daemon v3.0+', 'Cyberdeck (16+ RAM)']
        },
        {
          id: 'ice-pick',
          label: 'ICE Pick',
          icon: '⛏️',
          description: 'Creates backdoor in security systems',
          difficulty: 'Hard',
          ram: 14,
          duration: '5m',
          effect: 'Gains admin access to security systems',
          requirements: ['ICE Breaker Daemon v2.5+', 'Cyberdeck (12+ RAM)']
        }
      ]
    },
    {
      id: 'ai-hacks',
      label: 'AI Manipulation',
      icon: '🤖',
      children: [
        {
          id: 'synth-mind',
          label: 'Synth Mind',
          icon: '🧠',
          description: 'Influences synthetic intelligence systems',
          difficulty: 'Very Hard',
          ram: 18,
          duration: '2m',
          effect: 'Temporary control over AI systems',
          requirements: ['AI Core v5.0+', 'Cyberdeck (14+ RAM)']
        },
        {
          id: 'daemon-overlord',
          label: 'Daemon Overlord',
          icon: '👑',
          description: 'Takes control of security daemons',
          difficulty: 'Extreme',
          ram: 24,
          duration: '90s',
          effect: 'Turns security systems against hostiles',
          requirements: ['AI Core v6.0+', 'Cyberdeck (18+ RAM)']
        }
      ]
    },
    {
      id: 'utility-hacks',
      label: 'Utility',
      icon: '🛠️',
      children: [
        {
          id: 'quickhack-booster',
          label: 'Quickhack Booster',
          icon: '⚡',
          description: 'Enhances hacking capabilities',
          difficulty: 'Medium',
          ram: 10,
          duration: '3m',
          effect: '+25% Quickhack damage and -15% RAM cost',
          requirements: ['Neural Interface v3.0+', 'Cyberdeck (8+ RAM)']
        },
        {
          id: 'ram-recovery',
          label: 'RAM Recovery',
          icon: '🔄',
          description: 'Regenerates RAM over time',
          difficulty: 'Easy',
          ram: 6,
          duration: 'Passive',
          effect: 'Regenerates 5 RAM every 30s',
          requirements: ['Neural Interface v2.0+', 'Cyberdeck (6+ RAM)']
        }
      ]
    }
  ];

  const hackImages = [
    {
      title: 'Neural Interface',
      src: 'https://via.placeholder.com/800x400?text=Neural+Interface',
      alt: 'Neural Interface',
      description: 'Advanced neural interface for cybernetic enhancements'
    },
    {
      title: 'ICE Protocols',
      src: 'https://via.placeholder.com/800x400?text=ICE+Protocols',
      alt: 'ICE Protocols',
      description: 'Security protocols and countermeasures'
    },
    {
      title: 'Cyberdeck',
      src: 'https://via.placeholder.com/800x400?text=Cyberdeck',
      alt: 'Cyberdeck',
      description: 'Portable hacking device for on-the-go operations'
    }
  ];

  // Helper function to find a hack by ID in the nested structure
  const findHackById = (items, id) => {
    for (const item of items) {
      if (item.id === id) return item;
      if (item.children) {
        const found = findHackById(item.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  const handleHackSelect = (event) => {
    const selectedId = event.detail.selected;
    setSelectedHack(selectedId);
  };

  // Get the currently selected hack details
  const selectedHackData = findHackById(hacks, selectedHack) || {};

  return (
    <div className="cyberhacks-page" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      color: '#e0e0e0',
      backgroundColor: '#0a0a0a',
      minHeight: '100vh'
    }}>
      <h1 style={{
        color: '#00ff9d',
        textAlign: 'center',
        marginBottom: '30px',
        textShadow: '0 0 10px rgba(0, 255, 157, 0.5)'
      }}>
        Cyberhacks Database
      </h1>

    </div>
  );
};

export default CyberhacksPage;
