import {
  ArrowDownOnSquareIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  ChatBubbleLeftIcon,
  ChatBubbleLeftRightIcon,
  DocumentIcon,
} from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="flex h-screen text-black items-center justify-center rounded-xl font-exo bg-bottom bg-cover p-side">
      <div className="w-full flex flex-col items-center py-24 max-lg:py-16 max-md:py-10">
        <div>
          <h1 className="text-8xl uppercase font-khand font-normal b-0 tracking-tighter leading-[80%] max-lg:text-7xl max-md:text-6xl max-sm:text-5xl text-black ">
            Nehemie Mombanga
          </h1>
          <p className="text-right text-xl max-md:text-lg font-light">
            A Full-Stack Developer
          </p>
        </div>
        {/* <p className="mb-4 max-w-xl text-light-gray text-sm font-light  text-center mt-2 uppercase">
          <span className="text-black">Hey there!</span> I&apos;m not your
          typical <span className="text-black">full-stack developer</span>. My
          eye for design and my knack for coding converge to create digital
          masterpieces that are as captivating as they are functional.
        </p> */}

        <a
          href="/resume/nehemie_resume.pdf"
          download={'nehemie_resume.pdf'}
          className="relative action-btn w-[220px] flex gap-4 items-center bg-zinc-950 bg-opacity-90  p-4 px-6 rounded-full overflow-hidden duration-500 font-exo mt-8"
        >
          <div className="bg-red-400 bg-opacity-90"></div>
          <p className="ml-8 text-sm z-10 text-white font-light uppercase">
            Download Resume
          </p>
        </a>
      </div>
    </section>
  );
};
export default Hero;
