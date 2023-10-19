import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar, Footer } from './components';
import Modal from './components/modal/Modal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nehemie Mombanga',
  description:
    "Dedicated Fullstack Developer with 2 years of merging technical mastery with design flair. As a current student at Holberton School with a background in graphic design, I'm devoted to sculpting digital narratives that enthrall and resonate. Fueled by a continuous learning mindset and a zest for challenges, I'm venturing into the AI realm, ensuring I'm aligned with tech's ever-evolving pulse. With discipline imbibed from kickboxing and an unwavering commitment to user satisfaction, I design solutions that seamlessly bridge function with aesthetic brilliance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Modal />
      </body>
    </html>
  );
}
