import Hero from '@/components/Hero';
import CredentialBand from '@/components/CredentialBand';
import Introduction from '@/components/Introduction';
import Numbers from '@/components/Numbers';
import Gateways from '@/components/Gateways';
import Programmes from '@/components/Programmes';
import BookBand from '@/components/BookBand';
import Voices from '@/components/Voices';
import StageGallery from '@/components/StageGallery';
import Letter from '@/components/Letter';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredentialBand />

      {/* The spine runs from here down — everything hangs off one vertical
          rule, the way a page hangs off a binding. */}
      <div className="spine">
        <Introduction />
        <Numbers />
        <Gateways />
        <Programmes />
        <BookBand />
        <Voices />
        <StageGallery />
        <Letter />
        <Contact />
      </div>
    </>
  );
}
