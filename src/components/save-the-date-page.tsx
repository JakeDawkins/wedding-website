import { Hero } from '../components/hero';
import { HomeFAQ } from '../components/home-faq';
import { BarcelonaSection } from './barcelona-section';
import { CountdownLarge } from './countdown-large';
import { Timeline } from './timeline';

export async function SaveTheDatePage() {
  return (
    <>
      <title>Save the date | Emily & Jake</title>
      <meta
        name="description"
        content="Save the date for Emily and Jake's wedding in Barcelona. June 20, 2026"
      />

      <div className="w-full max-w-full overflow-hidden">
        <Hero />

        <CountdownLarge />

        {/* Barcelona callout */}
        <BarcelonaSection />

        {/* Timeline */}
        <Timeline />

        {/* FAQ */}
        <HomeFAQ />
      </div>
    </>
  );
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  } as const;
};
