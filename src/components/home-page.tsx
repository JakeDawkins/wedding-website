import { BridalParty } from '../components/bridal-party';
import { Hero } from '../components/hero';
import { HomeFAQ } from '../components/home-faq';
import { BarcelonaSection } from './barcelona-section';
import { CountdownLarge } from './countdown-large';
import { Timeline } from './timeline';

export default async function HomePage() {
  return (
    <>
      <Hero />

      <CountdownLarge />

      {/* Barcelona callout */}
      <BarcelonaSection />

      {/* Bridal Party Callout */}
      <BridalParty />

      <Timeline />

      {/* FAQ */}
      <HomeFAQ />
    </>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
