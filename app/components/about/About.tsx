import { aboutMe, skills } from '@/app/constants';
import {
  BookOpenIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Skills } from '..';

const About = () => {
  return (
    <section className="" id="about-me">
      {/* <div className=" bg-zinc-900 rounded-2xl p-28 px-24 max-lg:p-10 max-md:p-8 max-sm:p-6 text-white"> */}
      <div className="flex flex-col gap-48 max-w-[1240px] mx-auto text-black">
        {/* ABOUT TEXT */}
        <div>
          <h2 className="font-exo text-lg font-medium mb-6 max-md:mb-6 uppercase">
            About Me
          </h2>
          <p className="text-[28px] max-lg:text-2xl max-md:text-xl font-exo max-w-[1100px] font-light mb-10">
            {aboutMe.description}
          </p>

          <Link
            href={'about-me'}
            className="action-btn relative w-[214px] flex gap-4 items-center bg-neutral-800  p-4 px-6 rounded-full overflow-hidden duration-500"
          >
            <div className="bg-red-400 bg-opacity-90"></div>

            <p className="ml-8  z-10 uppercase text-sm text-white">
              More About Me
            </p>
          </Link>
        </div>

        {/* <Skills /> */}

        {/* SKILLS */}
        <div>
          {/* PROGRAMMING LANGUAGES */}
          <div className="flex gap-20 flex-wrap">
            <div>
              <h3 className="mb-6 text-right">
                <span className="mr-3 text-red-400">{'</>'}</span>
                Programming languages
              </h3>

              <ul>
                <li className="flex gap-8">
                  <ul className="flex flex-col gap-2 flex-wrap text-neutral-900 ">
                    {skills.languages.skills.map((skill, index) => (
                      <li key={index} className="">
                        <span className="mr-2">-</span> {skill}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-2 flex-wrap text-neutral-900 ">
                    {skills.languages.others.map((skill, index) => (
                      <li key={index} className="">
                        <span className="mr-2">-</span> {skill}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>

            {/* LIBRARIES & FRAMEWORK */}
            <div className=" flex flex-col">
              <h4 className="mb-6 flex text-end">
                <span className="mr-3 text-red-400">
                  <BookOpenIcon className="h-6" />{' '}
                </span>
                <span>{skills.libraries.label}</span>
              </h4>

              <ul>
                <li className="flex gap-10">
                  <ul className="flex flex-col gap-2 flex-wrap text-neutral-900 ">
                    {skills.libraries.skills1.map((skill, index) => (
                      <li key={index} className="">
                        <span className="mr-2">-</span> {skill}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-2 flex-wrap text-neutral-900 ">
                    {skills.libraries.skills2.map((skill, index) => (
                      <li key={index} className="">
                        <span className="mr-2">-</span> {skill}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <div className=" flex flex-col">
              <h3 className="mb-6 flex text-end">
                <span className="mr-3 text-red-400">
                  <WrenchScrewdriverIcon strokeWidth={1.6} className="h-5" />{' '}
                </span>
                <span>{skills.tools.label}</span>
              </h3>

              {/* TOOLS & PLATFORMS */}
              <ul>
                <li className="flex gap-10">
                  <ul className="flex flex-col gap-2 flex-wrap text-neutral-900 ">
                    {skills.tools.skills1.map((skill, index) => (
                      <li key={index} className="">
                        <span className="mr-2">-</span> {skill}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-2 flex-wrap text-neutral-900 ">
                    {skills.tools.skills2.map((skill, index) => (
                      <li key={index} className="">
                        <span className="mr-2">-</span> {skill}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};
export default About;
