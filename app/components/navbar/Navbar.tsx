import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 font-montserrat">
      <h1>
        <span className="font-semibold">NEHEMIE</span>MOMBANGA
        <span className="text-red-400"> *</span>
      </h1>
      <div className="flex gap-6 text-sm">
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contact</Link>
      </div>
    </nav>
  );
};
export default Navbar;
