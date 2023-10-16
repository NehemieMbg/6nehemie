import { aboutMe, skills } from '@/app/constants';
import { BookOpenIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <section className="px-10 w-full">
      <div className=" w-full  bg-[#171717] rounded-xl py-14 p-14 text-white">
        <div className="flex flex-col gap-32 max-w-[1440px] mx-auto">
          {/* ABOUT TEXT */}
          <div>
            <h2 className="font-montserrat text-xl text-neutral-500 mb-8 uppercase">
              About Me
            </h2>
            <p className="text-[28px] font-montserrat max-w-[1100px] font-light mb-10">
              {aboutMe.description}
            </p>

            <button className="action-btn relative w-[214px] flex gap-4 items-center bg-neutral-800  p-4 px-6 rounded-full overflow-hidden duration-500">
              <div className="bg-red-400 bg-opacity-90"></div>

              <p className="ml-8  z-10 uppercase text-sm">More About Me</p>
            </button>
          </div>

          {/* SKILLS */}
          <div className="flex flex-col items-end font-montserrat">
            <h2 className="font-montserrat text-xl uppercase text-neutral-500  mb-10">
              Skills
            </h2>

            <div className="flex flex-col items-end gap-14 max-w-[600px]">
              <div>
                <h3 className="mb-2 text-right">
                  <span className="mr-3 text-red-400">{'</>'}</span>Programming
                  languages
                </h3>

                <p className="text-neutral-400 ">
                  {skills.languages.skills.split(',').join(' - ')}
                </p>
              </div>
              <div className=" flex flex-col items-end">
                <h3 className="mb-2 flex">
                  <span className="mr-3 text-red-400">
                    <BookOpenIcon className="h-6" />{' '}
                  </span>
                  <span>{skills.libraries.label}</span>
                </h3>

                <p className="text-neutral-400 text-right">
                  {skills.libraries.skills.split(',').join(' - ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
