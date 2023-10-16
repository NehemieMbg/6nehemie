import {
  ArrowDownOnSquareIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  ChatBubbleLeftIcon,
  ChatBubbleLeftRightIcon,
  DocumentIcon,
} from '@heroicons/react/24/outline';
import { LinkedIn } from '..';

const Hero = () => {
  return (
    <section className="px-10 ">
      <div className="flex items-center justify-center rounded-xl font-montserrat bg-[#F2E5DE] bg-bottom bg-cover">
        <div className="w-full flex flex-col items-center py-14">
          <h1 className="text-4xl font-medium mb-3 tracking-tighter">
            Nehemie Mombanga
          </h1>
          {/* <p className=" font-medium">Full-Stack Developer</p> */}
          <p className="mb-10 max-w-3xl text-center mt-2">
            <span className="text-red-400">Hey there!</span> I&apos;m not your
            typical <span className="text-red-400 ">full-stack developer</span>.
            My eye for design and my knack for coding converge to create digital
            masterpieces that are as captivating as they are functional.
          </p>

          <div className="w-full flex gap-6 justify-center text-creme ">
            <button className="flex justify-between items-center w-full max-w-[230px] bg-dark-gray  p-4 px-6 rounded-full">
              <div className="flex gap-4 items-center">
                {/* <DocumentIcon
                  className="h-8  p-1.5 bg-neutral-800 rounded-md"
                  strokeWidth={2}
                /> */}
                <p className="text-sm">Download Cv</p>
              </div>
              <ArrowDownOnSquareIcon className="h-6" strokeWidth={1.5} />
            </button>

            <button className="flex justify-between items-center w-full max-w-[230px] bg-black p-4 px-6 rounded-full">
              <div className="flex gap-4 items-center">
                {/* <ChatBubbleLeftRightIcon
                  strokeWidth={2}
                  className="h-8 w-8 p-1.5 bg-neutral-800 rounded-md"
                /> */}
                <p className="text-sm">Contact Me</p>
              </div>
              <ArrowRightIcon className="h-5" strokeWidth={2} />
            </button>
            {/*
            <button className="flex justify-between items-center w-full max-w-[310px] bg-black p-3 rounded-lg">
              <div className="flex gap-4 items-center">
                <ChatBubbleLeftRightIcon
                  className="h-10  p-2 bg-neutral-800 rounded-md"
                  strokeWidth={2}
                />
                <p>Contact Me</p>
              </div>
              <ArrowRightIcon className="h-7" strokeWidth={1.8} />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
