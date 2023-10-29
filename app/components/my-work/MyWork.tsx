'use client';

import { recentProjects } from '../../constants';
import { ProjectCard } from '..';
import {
  ArrowLongRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';

const MyWork = () => {
  const [showMore, setShowMore] = useState(false);
  const [projectCount, setProjectCount] = useState(2); // 0 based index

  const handleShowMore = () => {
    setShowMore(true);
    setProjectCount(recentProjects.length - 1);
  };

  const handleShowLess = () => {
    setShowMore(false);
    setProjectCount(2);
  };
  return (
    <section id="projects" className="p-10 px-0 font-exo">
      <div>
        <h2 className="text-xl text-center max-lg:text-xl uppercase mb-2 font-normal">
          Recent Projects
        </h2>

        <p className="mb-10 text-center max-[550px]:mb-4">
          Showcasing some of my latest work.
        </p>
      </div>

      {/* PROJECT CARD */}
      <div className="grid grid-cols-3 gap-6 mb-8 max-[1206px]:grid-cols-2 max-[900px]:grid-cols-1">
        {recentProjects.map((project, index) => {
          if (index > projectCount) return null;

          return (
            <ProjectCard
              key={project.label}
              label={project.label}
              description={project.description}
              images={project.images}
              link={project.link}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link
          href={'/projects'}
          className="text-center max-[550px]:mb-6 font-medium flex items-center gap-2 hover:gap-4 transition-all duration-200"
        >
          <span>View More</span> <ArrowLongRightIcon className="h-4" />
        </Link>
      </div>
    </section>
  );
};
export default MyWork;
