import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

type ProjectCardProps = {
  images: string[];
  label: string;
  description: string;
  link: string;
  className?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  images,
  label,
  description,
  link,
  className,
}) => {
  return (
    <div
      className={`bg-white shadow-md p-2 rounded-2xl flex flex-col gap-2 ${
        className ? className : 'bg-white'
      }`}
    >
      <div className="overflow-hidden rounded-xl">
        <Image
          src={images[0]}
          alt={label}
          width={500}
          height={500}
          className="w-full"
        />
      </div>

      <h3 className="font-medium text-lg">
        {label}{' '}
        {label === 'Open Sense*' ? (
          <span className="text-xs">(Currently in development)</span>
        ) : null}{' '}
      </h3>
      <p className="text-sm mb-2">{description}</p>
      <a
        href={link}
        target="_blank"
        className="mt-auto flex gap-2 justify-center items-center font-medium text-center border-[1px] border-dark-gray border-opacity-20 rounded-lg py-2 px-4 hover:bg-dark-gray hover:text-white transition-all"
      >
        <span>Visit live site</span>
        <ArrowUpRightIcon className="h-4" strokeWidth={2} />
      </a>
    </div>
  );
};
export default ProjectCard;
