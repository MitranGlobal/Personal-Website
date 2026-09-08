import Hero from '@/components/sections/Hero';
import PressMarquee from '@/components/sections/PressMarquee';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import PillarTiles from '@/components/sections/PillarTiles';
import System from '@/components/sections/System';
import PositivityScore from '@/components/sections/PositivityScore';
import FreeTraining from '@/components/sections/FreeTraining';
import Books from '@/components/sections/Books';
import Testimonials from '@/components/sections/Testimonials';
import Speaking from '@/components/sections/Speaking';
import Awards from '@/components/sections/Awards';
import Newsletter from '@/components/sections/Newsletter';
import SocialConnect from '@/components/sections/SocialConnect';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PressMarquee />
      <Stats />
      <About />
      <PillarTiles />
      <System />
      <PositivityScore />
      <FreeTraining />
      <Books />
      <Testimonials />
      <Speaking />
      <Awards />
      <Newsletter />
      <SocialConnect />
    </>
  );
}
