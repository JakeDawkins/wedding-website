import { Hero } from '../components/hero';
import { HomeFAQ } from '../components/home-faq';
import { BarcelonaSection } from './barcelona-section';
import { Timeline } from './timeline';

export async function SaveTheDatePage() {
  return (
    <>
      <Hero />

      {/* Barcelona callout */}
      <BarcelonaSection />

      {/* Timeline */}
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
