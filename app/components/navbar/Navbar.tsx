'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navigation } from '@/app/constants';

const Navbar = () => {
  const pathname = usePathname();

  const handleBgColor = (href: string) => {
    if (pathname === '/about-me' || pathname === '/projects')
      return 'bg-dark-gray text-creme';
    return 'bg-creme';
  };
  return (
    <nav
      className={`flex justify-between items-center py-6 px-10 font-montserrat bg-creme
    ${handleBgColor(pathname)}
    `}
    >
      <Link href={'.'}>
        <span className="font-semibold">NEHEMIE</span>MOMBANGA
        {/* <span className="text-red-400"> *</span> */}
      </Link>
      <div className="flex gap-6 text-sm font-normal">
        {navigation.links.map((link) => (
          <Link href={link.href} key={link.label}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
