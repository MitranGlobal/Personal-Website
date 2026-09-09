import Hero from '@/components/sections/Hero';
import Voices from '@/components/sections/Voices';
import About from '@/components/sections/About';
import System from '@/components/sections/System';
import PositivityScore from '@/components/sections/PositivityScore';
import Training from '@/components/sections/Training';
import Books from '@/components/sections/Books';
import Letters from '@/components/sections/Letters';
import Speaking from '@/components/sections/Speaking';
import Awards from '@/components/sections/Awards';
import Newsletter from '@/components/sections/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Voices />
      <About />
      <System />
      <PositivityScore />
      <Training />
      <Books />
      <Letters />
      <Speaking />
      <Awards />
      <Newsletter />
    </>
  );
}
