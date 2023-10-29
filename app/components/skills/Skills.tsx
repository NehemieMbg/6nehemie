import { aboutMe, skills } from '@/app/constants';

const Skills = () => {
  return (
    <div>
      <h2 className="font-exo text-lg font-medium mb-3 uppercase">Skills</h2>

      <div className="grid grid-cols-3 gap-x-4">
        <div className="skill-list">
          <h3 className="">{skills.languages.label}</h3>
          <ul className="text-lg">
            {skills.languages.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-list">
          <h3 className="">{skills.languages.label}</h3>
          <ul className="text-lg">
            {skills.languages.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="skill-list">
          <h3 className="">{skills.languages.label}</h3>
          <ul className="text-lg">
            {skills.languages.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
