import Image from 'next/image';
import { recentProjects } from '../../constants';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { ProjectCard } from '..';

const project = recentProjects[0];

const MyWork = () => {
  return (
    <section className="p-10 font-montserrat">
      <div>
        <h2 className="text-2xl uppercase mb-2 font-semibold">
          Recent Projects
        </h2>
        <p className="mb-10">Showcasing some of my latest work.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* PROJECT CARD */}
        {recentProjects.map((project) => (
          <ProjectCard
            key={project.label}
            label={project.label}
            description={project.description}
            images={project.images}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
export default MyWork;
