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
    <section className="px-10 mt-10">
      <div className="flex items-center justify-center rounded-xl font-montserrat bg-bg-hero bg-bottom bg-cover">
        <div className="w-full flex flex-col items-center p-10 py-12">
          <h1 className="text-4xl font-medium mb-4 tracking-tighter">
            Nehemie Mombanga
          </h1>
          <p className="mb-12 font-medium">Full-Stack Developer</p>

          <div className="w-full flex gap-6 justify-center text-creme ">
            <button className="flex justify-between items-center w-full max-w-[310px] bg-black p-3 rounded-lg">
              <div className="flex gap-2 items-center">
                <DocumentIcon
                  className="h-10  p-2 bg-neutral-800 rounded-md"
                  strokeWidth={2}
                />
                <p className="font-medium">Download CV</p>
              </div>
              <ArrowDownOnSquareIcon className="h-7" strokeWidth={1.8} />
            </button>
            <button className="flex justify-between w-full max-w-[325px] bg-black px-5 py-4 rounded-lg">
              <div className="flex gap-2">
                <DocumentIcon className="h-6" />
                <p>LinkedIn</p>
              </div>
              <ArrowUpRightIcon className="h-6" />
            </button>
            <button className="flex justify-between w-full max-w-[325px] bg-black px-5 py-4 rounded-lg">
              <div className="flex gap-2">
                <ChatBubbleLeftRightIcon className="h-6" />
                <p>Contact Me</p>
              </div>
              <ArrowRightIcon className="h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
