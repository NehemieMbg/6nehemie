import Link from 'next/link';
import { navigation } from '@/app/constants';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 font-montserrat">
      <h1>
        <span className="font-semibold">NEHEMIE</span>MOMBANGA
        <span className="text-red-400"> *</span>
      </h1>
      <div className="flex gap-6 text-sm">
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
