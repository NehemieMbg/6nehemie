import { About, Hero } from './components';

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <Hero />
      <About />
    </main>
  );
}
