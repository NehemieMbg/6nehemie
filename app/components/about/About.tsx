import { aboutMe } from '@/app/constants';

const About = () => {
  return (
    <section className="px-10 w-full">
      <div className=" w-full  bg-[#171717] rounded-xl py-14 p-14 text-white">
        <h1 className="font-montserrat text-2xl text-neutral-400  mb-14">
          About Me
        </h1>

        <div>
          <div>
            <p className="text-[28px] font-montserrat max-w-[1100px] font-light">
              {aboutMe.description}
            </p>

            <button className="flex justify-between items-center w-full max-w-[230px] bg-dark-gray  p-4 px-6 rounded-full">
              <div className="flex gap-4 items-center">
                <p className="text-sm">Download Cv</p>
              </div>
              <div></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
