import React, { useState, useEffect } from 'react';
import './LayoutDecorationFoxtrot.css';

export interface LayoutDecorationFoxtrotProps {
  className?: string;
}

// Character groups for each div
const characterGroups = [
  ['▖', '▗', '▘', '▝'],  // First group
  ['▚', '▞'],            // Second group
  ['▙', '▛', '▜', '▟']   // Third group
];

const getRandomCharacter = (groupIndex: number) => {
  const group = characterGroups[groupIndex];
  return group[Math.floor(Math.random() * group.length)];
};

const LayoutDecorationFoxtrot: React.FC<LayoutDecorationFoxtrotProps> = ({
  className = ''
}) => {
  const [characters, setCharacters] = useState<string[][]>([
    [...characterGroups[0]],
    [...characterGroups[1]],
    [...characterGroups[2]]
  ]);

  useEffect(() => {
    const updateGroup = (groupIndex: number) => {
      setCharacters(prevChars => {
        const newChars = [...prevChars];
        const groupSize = newChars[groupIndex].length;
        
        // Determine how many characters to update (1 or 2)
        const updateCount = Math.random() > 0.5 ? 2 : 1;
        
        // Create a set to track which indices we've already updated
        const updatedIndices = new Set<number>();
        
        for (let i = 0; i < updateCount && updatedIndices.size < groupSize; i++) {
          let charIndex;
          // Find an index we haven't updated yet
          do {
            charIndex = Math.floor(Math.random() * groupSize);
          } while (updatedIndices.has(charIndex));
          
          updatedIndices.add(charIndex);
          
          // Get a new random character from the same group
          let newChar;
          do {
            newChar = getRandomCharacter(groupIndex);
          } while (newChar === newChars[groupIndex][charIndex] && characterGroups[groupIndex].length > 1);
          
          // Update the character
          newChars[groupIndex] = [...newChars[groupIndex]];
          newChars[groupIndex][charIndex] = newChar;
        }
        
        return newChars;
      });
    };

    const interval = setInterval(() => {
      // Update each group on every interval
      characterGroups.forEach((_, index) => {
        updateGroup(index);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`layoutDecorationFoxtrot ${className}`}>
      <div>
        {characters[0].map((char, index) => (
          <div key={`group1-${index}`} className="random-string">{char}</div>
        ))}
      </div>
      <div>
        {characters[1].map((char, index) => (
          <div key={`group2-${index}`} className="random-string">{char}</div>
        ))}
      </div>
      <div>
        {characters[2].map((char, index) => (
          <div key={`group3-${index}`} className="random-string">{char}</div>
        ))}
      </div>
    </div>
  );
};

export default LayoutDecorationFoxtrot;
