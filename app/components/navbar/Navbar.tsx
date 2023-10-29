'use client';

import Link from 'next/link';
import { navigation } from '@/app/constants';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav
      className={`fixed z-[99] w-full items-center py-6 p-side font-montserrat text-black`}
    >
      <div className="flex items-center justify-between">
        <Link href={'.'} className="text-xl font-medium">
          <span className=" font-exo">N</span>M
          <span className="text-red-400">*</span>
        </Link>

        <div className="flex gap-4 items-center">
          <p className="text-sm text-dark-gray">Lille, France</p>
        </div>
      </div>

      <div className="navigation text-white flex gap-2 text-sm font-normal font-exo bg-zinc-950 bg-opacity-90 backdrop-blur-sm  p-2 rounded-full">
        {/* <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-opacity-80 transition-colors duration-200 cursor-pointer">
          <p className="font-light">
            <span className="">N</span>M<span className="text-red-400">*</span>
          </p>

          <Bars3Icon className="h-4" />
        </div> */}
        {navigation.links.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className={`px-6 py-3 rounded-full hover:bg-zinc-700 transition-colors duration-300
              ${link.href === pathname ? 'bg-zinc-700' : ''}
            `}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
