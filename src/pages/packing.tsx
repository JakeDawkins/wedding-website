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
          <div className="flex flex-col gap-6">
            <Heading level={2} size="2xl">
              What to pack
            </Heading>

            <p className="rounded-lg bg-pink-100 p-4">
              Barcelona is a very large, modern city with plenty of places to
              pick up essentials. So please don't feel like you need to
              over-pack for every possibility. You can find basic medicine,
              food, toiletries and other essentials close to the hotel for very
              cheap. Many times, pharmacies and other stores are also staffed by
              english speakers, so you can ask for help.
            </p>

            <div className="flex flex-col gap-10 w-full">
              <ul className="list-disc pl-4 flex flex-col gap-4">
                <li>Passport</li>
                <li>
                  Driver's License (especially if you may be renting a car)
                </li>
                <li>
                  Your cell phone with international data set up. You can get a
                  sim card (or eSim) in Barcelona, but it's a hassle and your
                  phone number would be different. Most major US carriers,
                  however, have some international data plans that will work
                  anywhere for a daily fee of $10 or $12. You won't need to do
                  anything once you land, just turn on your data, and it will
                  connect to a local network. Here's a list of a few carriers
                  and their plans:
                  <ul className="list-disc pl-4 flex flex-col gap-2 mt-4">
                    <li>
                      <a
                        href="https://www.t-mobile.com/support/plans-features/data-passes"
                        className="underline"
                      >
                        T-Mobile
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.verizon.com/plans/international/international-travel/travel-pass/"
                        className="underline"
                      >
                        Verizon: $12 per day
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.att.com/international/day-pass/"
                        className="underline"
                      >
                        AT&T: $12 per day
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  Travel adapter. Spain has a different outlet than the US, so
                  you'll need to bring one. Look for plugs that say "Type F" or
                  "Type C". Some plugs may just say "Europe", and that's fine.
                  If you're not sure,{' '}
                  <a
                    href="https://www.amazon.com/dp/B0CM3DRXQH?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_4&th=1"
                    className="underline"
                  >
                    here's one we've used and liked.
                  </a>
                </li>
                <li>
                  Battery powered fan. Barcelona can get hot, and the wedding
                  and reception will be outside. We'll be at a higher elevation
                  and will be watching the weather to make adjustments if needed
                  (we don't want to be hot either!), but even when out and about
                  in the city, it's nice to have.
                  <a
                    href="https://www.amazon.com/dp/B0CS36LSFB?ref=ppx_yo2ov_dt_b_fed_asin_title"
                    className="underline"
                  >
                    This is our recommendation
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Heading level={2} size="2xl">
              What to leave at home
            </Heading>

            <ul className="list-disc pl-4 flex flex-col gap-4">
              <li>
                Any non-dual voltage electronics like hair dryers, curling
                irons, etc. If you're unsure how to check,{' '}
                <a
                  href="https://www.ceptics.com/pages/dual-voltage-vs-single-voltage?srsltid=AfmBOooOkMOVxaFmUCjgSIhB1_PM7aHqwYpZh0DRLa06kxc94zmncqBs"
                  className="underline"
                >
                  you can follow this guide
                </a>
                . Most hotel rooms will have a hair dryer.
              </li>
              <p className="rounded-lg bg-pink-100 p-4">
                <strong>Important</strong>: an adapter (like we linked to above)
                is <strong>NOT</strong> the same as a converter. If your device
                can't support dual voltage, leave it at home. This is most
                commonly an issue on things that produce heat. All phones and
                laptops can support dual voltage and shouldn't need a converter,
                only an adapter.{' '}
                <strong>Please ask us if you're unsure.</strong>
              </p>
              <li>
                You <strong>DO NOT</strong> need to worry about withdrawing or
                converting large amounts of cash. It's a hassle, makes it easier
                to lose, and you can use your card (or Apple/Google pay)
                everywhere in Barcelona. I would try to stick to major credit
                cards and avoid using debit cards, as they may be less accepted.
                A Visa or Mastercard will work anywhere though. Amex will be
                accepted in probably 90% of cases, but have a backup just in
                case. But in our 3 months here, we never needed to use cash.
                When in doubt, just ask first.
              </li>
            </ul>
          </div>
          {/* Dress code */}
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
