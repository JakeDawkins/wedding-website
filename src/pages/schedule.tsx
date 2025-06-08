import { Link } from 'waku';
import { Heading } from '../components/primitives/heading';
import { ScreenWidthContainer } from '../components/primitives/screen-width-container';

export default async function AboutPage() {
  return (
    <div className="w-full">
      <title>Schedule | Emily & Jake</title>

      <div className="flex items-center justify-center relative w-full aspect-square lg:aspect-[2] lg:rounded overflow-hidden">
        <img
          className="absolute inset-0 aspect-square lg:aspect-auto object-bottom lg:w-full bg-pink-100 flex-1 object-cover overflow-hidden lg:rounded"
          src="/images/beach.jpeg"
        />
        <Heading
          level={1}
          size="3xl"
          className="inline z-10 rounded self-center p-6 bg-pink-50/75"
        >
          Schedule
        </Heading>
      </div>

      {/* Friday */}
      <section className="w-full bg-white" id="barcelona">
        <ScreenWidthContainer className="flex flex-col w-full gap-10 items-center py-10 px-6">
          <Heading className="text-start" level={2} size="2xl">
            Friday, June 19th
          </Heading>

          <div className="flex flex-col">
            <div className="w-full border-l-2 border-l-black pl-2">
              <p className="font-medium">Welcome Dinner</p>
              <p>6 - 9 PM, Location TBD</p>
              <p>Attire: Beach casual</p>
              <p className="mt-4">
                Please join us for a welcome dinner the night before our
                wedding, where we will enjoy some Spanish food and wine! This
                invitation is open to our guests, as well as family members that
                have traveled with you for the weekend.
              </p>
            </div>
          </div>
        </ScreenWidthContainer>
      </section>

      <section className="w-full bg-pink-50" id="barcelona">
        <ScreenWidthContainer className="flex flex-col w-full gap-10 items-center py-10 px-6">
          <Heading className="text-start" level={2} size="2xl">
            Saturday, June 20th
          </Heading>

          <div className="flex flex-col">
            <div className="w-full border-l-2 border-l-black pl-2">
              <p className="font-medium">Wedding Ceremony & Reception</p>
              <p>4:30 PM - 12:30 AM, La Baronia</p>
              <p>Attire: Festive</p>
              <p className="mt-4">
                Celebrate our love with us on the beautiful grounds of La
                Baronia! Bus pick up from the hotel will be at{' '}
                <span className="underline">3:15pm</span>. Enjoy a welcome drink
                while you take in the views before finding your seat for our
                ceremony at 5:00pm. Our short ceremony will be followed by a
                cocktail hour, dinner, and dancing!{' '}
                <span className="underline">
                  Please note that the wedding day events are by invitation only
                </span>
                . We would love to have family traveling with you at the
                wedding, but the venue and busses provided will only fit people
                invited. Information about provided transportation and
                alternative options can be found{' '}
                <Link to="/travel#transportation" className="underline">
                  here
                </Link>
                .
              </p>
            </div>
            <div className="rounded-lg bg-pink-100 p-4 flex-1 gap-8 items-center mt-6">
              <p className="">
                Please be advised that there is gravel as well as uneven
                pavement on some of the grounds. Shoes with a low and wide heel
                are recommended for anyone planning to wear a heeled shoe.
              </p>
            </div>
          </div>
        </ScreenWidthContainer>
      </section>

      {/* Sunday */}
      <section className="w-full bg-white" id="barcelona">
        <ScreenWidthContainer className="flex flex-col w-full gap-10 items-center py-10 px-6">
          <Heading className="text-start" level={2} size="2xl">
            Sunday, June 21st
          </Heading>

          <div className="flex flex-col">
            <div className="w-full border-l-2 border-l-black pl-2">
              <p className="font-medium">Brunch</p>
              <p>10 AM - 12:30 PM, Location TBD</p>
              <p>Attire: Comfortable</p>
              <p className="mt-4">
                Recover from a night of dancing and fun with us at brunch!
                Brunch is open to our wedding guests, as well as family members
                that have traveled with you for the weekend.
              </p>
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
