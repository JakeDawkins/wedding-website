import { Heading } from '../components/primitives/heading';
import { ScreenWidthContainer } from '../components/primitives/screen-width-container';

export default async function AboutPage() {
  return (
    <div className="w-full">
      <title>Travel Info | Emily & Jake</title>

      <div className="flex items-center justify-center relative w-full aspect-square lg:aspect-[2] lg:rounded overflow-hidden">
        <img
          className="absolute inset-0 aspect-square lg:aspect-auto object-center lg:w-full bg-pink-100 flex-1 object-cover overflow-hidden lg:rounded"
          src="/images/city-overhead-wide.jpeg"
        />
        <Heading
          level={1}
          size="3xl"
          className="inline z-10 rounded self-center p-6 bg-pink-50/75"
        >
          What to Bring
        </Heading>
      </div>

      {/* When to arrive */}
      <section className="bg-pink-50 w-full" id="timeline">
        <ScreenWidthContainer className="flex flex-col gap-10 lg:gap-10 items-center py-10 px-6">
          {/* When to arrive */}
          <div className="flex flex-col gap-6">
            <Heading level={2} size="2xl">
              Dress Code
            </Heading>

            <div className="flex flex-col gap-10 w-full">
              <p>
                For the welcome dinner, dress code is{' '}
                <span className="font-medium">casual</span>. For brunch after
                the wedding, dress code is{' '}
                <span className="font-medium">comfortable</span>.
              </p>
              <p>
                For the wedding and reception, the dress code is festive! A
                cocktail dress code, but feel free to have a little more fun!
                Wear your floral patterns, bright colors and fun accessories. No
                shorts, no jeans, and no t-shirts.
              </p>
              <p className="rounded-lg bg-pink-100 p-4">
                If you're considering wearing shoes with a heel, we recommend
                wearing a thick, block heel, since there is gravel and uneven
                pavement in the ceremony and dinner areas of the venue.
              </p>

              <Heading level={3} size="lg">
                Examples
              </Heading>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <img
                  src="/images/dress-1.png"
                  alt="Dress code examples"
                  className="w-full h-auto"
                />
                <img
                  src="/images/dress-2.png"
                  alt="Dress code examples"
                  className="w-full h-auto"
                />
                <img
                  src="/images/dress-3.png"
                  alt="Dress code examples"
                  className="w-full h-auto"
                />
                <img
                  src="/images/dress-4.png"
                  alt="Dress code examples"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </ScreenWidthContainer>
      </section>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
