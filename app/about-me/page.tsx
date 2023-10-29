import { moreAboutMe, experiences } from '../constants';
import WhatIDo from '../components/about/WhatIDo';

const page = () => {
  return (
    <section className=" p-10 font-montserrat">
      <div className="min-h-[80vh] flex flex-col gap-10 justify-center max-w-[1324px] mx-auto">
        <h1 className="text-5xl font-medium uppercase">More About Me</h1>
        <div className="w-full max-w-screen-tight mx-auto">
          <p className="max-w-3xl text-xl text-neutral-900 font-light leading-8">
            {moreAboutMe.description}
          </p>
        </div>
      </div>

      <WhatIDo />

      {/* EXPERIENCES */}
      <div className="font-montserrat max-w-screen-tight mx-auto mt-64">
        <div className="flex flex-col w-full items-end">
          <div className="w-full max-w-[600px]">
            <h2 className="text-xl uppercase mb-6">EXPERIENCE</h2>
            <ul className="exp ">
              {experiences.map((experience, index) => (
                <li key={index}>
                  <h4 className="text-md font-light">{experience.label}</h4>
                  <div className="flex justify-between text-neutral-800">
                    <p className="">{experience.company}</p>
                    <p>{experience.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
