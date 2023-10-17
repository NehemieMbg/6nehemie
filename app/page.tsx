import { About, Hero, MyWork } from './components';

export default function Home() {
  return (
    <main className="flex flex-col gap-8 bg-creme">
      <Hero />
      <About />
      <MyWork />
    </main>
  );
}
