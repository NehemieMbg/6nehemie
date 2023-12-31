'use client';

import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="contact-me" className=" h-full  font-montserrat p-10">
      <div className="h-full min-h-screen flex flex-col items-center justify-between">
        <div></div>

        <div className="flex flex-col items-center gap-8">
          <h1 className="text-6xl font-medium max-md:text-5xl max-sm:text-4xl text-center">
            INTERESTED IN HIRING ME ?
          </h1>
          <a
            href="mailto:nehemie.mbg@gmail.com"
            target="_blank"
            className="action-btn relative w-[226px] flex gap-4 items-center bg-neutral-800  p-4 px-6 rounded-full overflow-hidden duration-500"
          >
            <div className="bg-red-400 bg-opacity-90"></div>

            <p className="ml-8  z-10 uppercase text-sm text-white">
              Send Me An Email
            </p>
          </a>
        </div>

        <div className="w-full flex max-md:flex-col md:items-end md:justify-between">
          <div className="flex max-sm:flex-wrap gap-6">
            <a
              href="https://www.linkedin.com/in/nehemie-mombanga"
              target="_blank"
              className="flex items-center gap-2"
            >
              <span>LinkedIn</span>
              <ArrowUpRightIcon className="h-4" />
            </a>
            <a
              href="https://github.com/NehemieMbg"
              target="_blank"
              className="flex items-center gap-2"
            >
              <span>Github</span>
              <ArrowUpRightIcon className="h-4" />
            </a>
            {/* <a
              href="https://www.behance.net/nehemiemombanga1"
              target="_blank"
              className="flex items-center gap-2"
            >
              <span>Behance</span>
              <ArrowUpRightIcon className="h-4" />
            </a>
            <a
              href="https://dribbble.com/6nehemie"
              target="_blank"
              className="flex items-center gap-2"
            >
              <span>Dribble</span>
              <ArrowUpRightIcon className="h-4" />
            </a> */}
          </div>

          <p className="text-xs text-start md:text-end max-md:mt-6 text-light-gray">
            Designed and developed by me
            <br />©{year} – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
