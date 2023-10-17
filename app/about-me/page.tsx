import {
  BookOpenIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { moreAboutMe, skills } from '../constants';

const page = () => {
  return (
    <section className="bg-dark-gray text-creme p-10 font-montserrat">
      <div className="min-h-[80vh] flex flex-col gap-10 justify-center max-w-[1324px] mx-auto">
        <h1 className="text-5xl font-medium uppercase">More About Me</h1>
        <div className="w-full max-w-screen-tight mx-auto">
          <p className="max-w-3xl text-xl text-neutral-400 font-light leading-8">
            {moreAboutMe.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 font-montserrat max-w-screen-tight mx-auto">
        <div className="mb-10">
          <h2 className="text-xl uppercase mb-6 text-neutral-400">WHAT I DO</h2>
          <p className="mb-6 text-3xl max-w-5xl font-light leading-10">
            {moreAboutMe.whatIDo}
          </p>
        </div>
        <div>
          <h2 className="font-montserrat text-left text-xl text-neutral-400">
            I&apos;m a versatile developer with a strong foundation in back-end
            technologies. My toolkit includes:
          </h2>
        </div>
        <div>
          {/* PROGRAMMING LANGUAGES */}
          <div className="flex  gap-20 ">
            <div>
              <h3 className="mb-6 text-right">
                <span className="mr-3 text-red-400">{'</>'}</span>
                Programming languages
              </h3>

              <ul>
                <li className="flex gap-8">
                  <ul className="flex flex-col gap-2 flex-wrap text-neutral-400 ">
                    {skills.languages.skills.map((skill, index) => (
                      <li key={index} className="">
                        <span className="mr-2">-</span> {skill}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-2 flex-wrap text-neutral-400 ">
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
              <h3 className="mb-6 flex text-end">
                <span className="mr-3 text-red-400">
                  <BookOpenIcon className="h-6" />{' '}
                </span>
                <span>{skills.libraries.label}</span>
              </h3>

              <ul>
                <li className="flex gap-10">
                  <ul className="flex flex-col gap-2 flex-wrap text-neutral-400 ">
                    {skills.libraries.skills1.map((skill, index) => (
                      <li key={index} className="">
                        <span className="mr-2">-</span> {skill}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-2 flex-wrap text-neutral-400 ">
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
                  <ul className="flex flex-col gap-2 flex-wrap text-neutral-400 ">
                    {skills.tools.skills1.map((skill, index) => (
                      <li key={index} className="">
                        <span className="mr-2">-</span> {skill}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-2 flex-wrap text-neutral-400 ">
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
    </section>
  );
};
export default page;
