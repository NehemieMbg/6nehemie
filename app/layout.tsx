import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar, Footer } from './components';
import Modal from './components/modal/Modal';
import { Analytics } from '@vercel/analytics/react';

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
        <Analytics />
        <Footer />
        <Modal />
      </body>
    </html>
  );
}

// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-N8NDPRF7');</script>
// <!-- End Google Tag Manager -->

// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N8NDPRF7"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->
