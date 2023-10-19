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
    <section id="projects" className="p-10 px-0 font-montserrat">
      <div>
        <h2 className="text-2xl uppercase mb-2 font-semibold">
          Recent Projects
        </h2>
        <div className="flex items-start justify-between">
          <p className="mb-10">Showcasing some of my latest work.</p>

          <Link
            href={'/projects'}
            className="text-center font-medium flex items-center gap-2 hover:gap-4 transition-all duration-200"
          >
            <span>View More</span> <ArrowLongRightIcon className="h-4" />
          </Link>
          {/* {!showMore ? (
            <button
              onClick={handleShowMore}
              className="text-center flex items-center gap-2"
            >
              <span>See more</span> <ChevronDownIcon className="h-4" />
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="text-center flex items-center gap-2"
            >
              <span>See less</span> <ChevronUpIcon className="h-4" />
            </button>
          )} */}
        </div>
      </div>

      {/* PROJECT CARD */}
      <div className="grid grid-cols-3 gap-4 mb-8 max-[1206px]:grid-cols-2 max-[900px]:grid-cols-1">
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
    </section>
  );
};
export default MyWork;
