import { ProjectCard } from '../components';
import { recentProjects } from '../constants';

const page = () => {
  return (
    <section className="bg-dark-gray text-creme p-10 font-montserrat">
      <div className="max-w-screen-wide w-full mx-auto min-h-screen mt-24">
        <h1 className="text-center text-5xl max-lg:text-4xl font-medium uppercase mb-6">
          Recent Projects
        </h1>
        <p className="text-center uppercase text-neutral-300 text-sm">
          Check out some of the most recent projects
        </p>
        <div className="grid grid-cols-3 gap-8 mb-8 text-dark-gray mt-28 max-[1206px]:grid-cols-2 max-[900px]:grid-cols-1">
          {recentProjects.map((project, index) => (
            <ProjectCard
              className="bg-creme"
              key={project.label}
              label={project.label}
              description={project.description}
              images={project.images}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default page;
