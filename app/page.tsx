import { About, Hero, MyWork } from './components';
import Work from './components/work/Work';

export default function Home() {
  return (
    <main className="p-side ">
      <Hero />

      <div className="flex flex-col gap-[284px]">
        <About />
        {/* <Work /> */}
        <MyWork />
      </div>
    </main>
  );
}
