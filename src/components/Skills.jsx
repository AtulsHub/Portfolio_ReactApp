import React from 'react';
import { skillsData } from '../data/skills.js'; // Adjust the path if needed

// Map textual levels to numbers (1–5)
const levelMap = {
  Beginner: 2,
  Good: 3,
  Intermediate: 4,
  Strong: 5,
  Advanced: 6,
  Expert: 6
};

const Skills = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Skills</h2>
      {skillsData.map((category, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">{category.category}</h3>
          {category.items.map((skill, index) => (
            <div key={index} className="mb-4 p-4 bg-blue-50 rounded shadow">
              <div className="flex gap-8 items-center mb-2">
                <span className="font-medium text-lg ">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.level}</span>
                <input
                type="range"
                min="1"
                max="6"
                value={levelMap[skill.level] || 1}
                
                className=" accent-blue-600 webkit-appearance-none bg-blue-300  w-32 h-2   "
              />
              </div>
              
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
