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
    <section className="">
      <div className="flex items-center justify-center rounded-xl font-montserrat bg-[#F2E5DE] bg-white bg-bottom bg-cover p-side">
        <div className="w-full flex flex-col items-center py-24 max-lg:py-16 max-md:py-10">
          <h1 className="text-5xl uppercase font-medium mb-4 tracking-tighter max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
            Nehemie Mombanga
          </h1>
          {/* <p className=" font-medium">Full-Stack Developer</p> */}
          <p className="mb-10 max-w-2xl text-sm font-medium text-center mt-2 uppercase">
            <span className="text-red-400">Hey there!</span> I&apos;m not your
            typical <span className="text-red-400 ">full-stack developer</span>.
            My eye for design and my knack for coding converge to create digital
            masterpieces that are as captivating as they are functional.
          </p>

          <div className="w-full flex max-md:flex-col items-center gap-4 justify-center text-creme ">
            <a
              href="/resume/nehemie_resume.pdf"
              download={'nehemie_resume.pdf'}
              className="flex justify-between items-center w-full max-w-[230px] bg-neutral-800  p-4 px-6 rounded-xl"
            >
              <div className="flex gap-4 items-center">
                <p className="uppercase text-sm">Download Cv</p>
              </div>
              <ArrowDownOnSquareIcon className="h-6" strokeWidth={1.5} />
            </a>

            <a
              href="#contact-me"
              className="flex justify-between items-center w-full max-w-[230px] bg-neutral-800 p-4 px-6 rounded-xl"
            >
              <div className="flex gap-4 items-center">
                <p className="uppercase text-sm">Contact Me</p>
              </div>
              <ArrowRightIcon className="h-5" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
