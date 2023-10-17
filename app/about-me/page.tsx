import { moreAboutMe, experiences } from '../constants';
import WhatIDo from '../components/about/WhatIDo';

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

      <WhatIDo />

      {/* EXPERIENCES */}
    </section>
  );
};
export default page;
