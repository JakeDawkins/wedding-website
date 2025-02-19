import { BridalParty } from '../components/bridal-party';
import { Hero } from '../components/hero';
import { HomeFAQ } from '../components/home-faq';
import { Heading } from '../components/primitives/heading';
import { ScreenWidthContainer } from '../components/primitives/screen-width-container';

export default async function HomePage() {
  return (
    <>
      <Hero />

      {/* Barcelona callout */}
      <section className="bg-white w-full" id="barcelona">
        <ScreenWidthContainer className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center py-10 px-6">
          <Heading
            level={2}
            size="2xl"
            className="text-center col-span-1 w-full"
          >
            Barcelona
          </Heading>
          <div className="flex flex-col gap-4 col-span-2">
            <p className="font-body font-light text-base">
              The first stop on our year long travel adventure was in Spain. We
              both quickly fell in love with Barcelona, and felt a strong pull
              to return there after our trip was done. Barcelona offers 295 days
              of sunshine each year, comfortably warm summers, beautiful
              beaches, fantastic food, excellent public transportation, and
              easily walkable neighborhoods throughout the city.
            </p>
            <p className="font-body font-light text-base">
              We decided that Spain felt the most like the place we&apos;d like
              to call home one day, and the place we wanted to start our lives
              as a married couple together. We are thrilled to share our
              favorite place with our favorite people on what will become our
              favorite day.
            </p>
          </div>
        </ScreenWidthContainer>
      </section>

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
