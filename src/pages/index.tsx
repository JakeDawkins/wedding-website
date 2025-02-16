import { Hero } from '../components/hero';
import { Heading } from '../components/primitives/heading';
import { ScreenWidthContainer } from '../components/primitives/screen-width-container';

export default async function HomePage() {
  return (
    <>
      <Hero />
      {/* Barcelons callout */}
      <section className="" id="barcelona">
        <ScreenWidthContainer className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center my-10">
          <Heading level={2} size="2xl" className="text-end col-span-1 w-full">
            Barcelona
          </Heading>
          <div className="flex flex-col gap-4 col-span-2">
            <p className="font-body font-light text-base">
              Emily and Jake&apos;s first stop on their year long travel
              adventure was in Spain. They both quickly fell in love with
              Barcelona, and felt a strong pull to return there after their trip
              was done. Barcelona offers 295 days of sunshine each year,
              comfortably warm summers, beautiful beaches, fantastic food,
              excellent public transportation, and easily walkable neighborhoods
              throughout the city.
            </p>
            <p className="font-body font-light text-base">
              Jake and Emily decided that Spain felt the most like the place
              they&apos;d like to call home one day, and the place they wanted
              to start their lives as a married couple together. Emily and Jake
              are thrilled to share their favorite place with their favorite
              people on what will become their favorite day.
            </p>
          </div>
        </ScreenWidthContainer>
      </section>
    </>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
