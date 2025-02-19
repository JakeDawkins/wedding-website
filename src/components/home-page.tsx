import { BridalParty } from '../components/bridal-party';
import { Hero } from '../components/hero';
import { HomeFAQ } from '../components/home-faq';
import { BarcelonaSection } from './barcelona-section';

export default async function HomePage() {
  return (
    <>
      <Hero />

      {/* Barcelona callout */}
      <BarcelonaSection />

      {/* Bridal Party Callout */}
      <BridalParty />

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
