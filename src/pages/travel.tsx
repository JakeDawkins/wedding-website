import { Link } from 'waku';
import { Heading } from '../components/primitives/heading';
import { ScreenWidthContainer } from '../components/primitives/screen-width-container';
import {
  ArrowSquareOutIcon,
  BeachBallIcon,
  BuildingIcon,
  ConfettiIcon,
  ForkKnifeIcon,
  HeartIcon,
  HouseIcon,
  PaletteIcon,
} from '@phosphor-icons/react/dist/ssr';

export default async function AboutPage() {
  return (
    <div className="w-full">
      <title>Travel Info | Emily & Jake</title>

      {/* <ScreenWidthContainer className="flex flex-col gap-6 items-start"> */}
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
          Travel Info
        </Heading>
      </div>
      {/* </ScreenWidthContainer> */}
      {/* When to arrive */}
      <section className="bg-pink-50 w-full" id="timeline">
        <ScreenWidthContainer className="flex flex-col gap-10 lg:gap-10 items-center py-10 px-6">
          {/* When to arrive */}
          <div className="flex flex-col gap-6">
            <Heading level={2} size="2xl">
              When to arrive
            </Heading>

            <div className="flex flex-col gap-10 w-full">
              <p>
                If you have the ability, we recommend arriving a few days before
                the wedding to combat jet lag. The wedding and reception itself
                will last until late, so we recommend arriving a few days before
                the wedding to allow for some time to adjust to the local time.
                If you are planning on turning the trip into a vacation, we
                recommend spending the time{' '}
                <span className="font-medium">before</span> the wedding on
                vacation rather than after.
              </p>
              <p>
                We will have a welcome dinner the evening before, and a brunch
                the morning after, available to all guests and their families
                traveling with them.
              </p>
            </div>
          </div>
        </ScreenWidthContainer>
      </section>

      {/* Accommodations */}
      <section className="w-full bg-white" id="barcelona">
        <ScreenWidthContainer className="flex flex-col w-full gap-10 items-center py-10 px-6">
          <div className="flex flex-col gap-6">
            <Heading level={2} size="2xl">
              Accommodations
            </Heading>
            <p>
              We have a selection of recommended hotels in El Poblenou, a
              beautiful, walkable, beachside neighborhood in Barcelona.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10">
              {/* NH */}
              <div className="border rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8">
                <div className="flex flex-col gap-4 w-full">
                  <Heading level={4} size="xl">
                    NH Barcelona Diagonal Mar
                  </Heading>

                  <div className="flex gap-3">
                    <HeartIcon
                      color="#f76d40"
                      // weight="fill"
                      className="flex-shrink-0"
                      size={24}
                    />
                    <p>
                      This is where the bridal party, bride and groom will be
                      staying, and shuttle pickups will depart from here!
                    </p>
                  </div>

                  <ul className="list-disc pl-4 flex flex-col gap-1">
                    <li>
                      <a
                        href="https://www.nh-hotels.com/en/hotel/nh-barcelona-diagonal-center?utm_campaign=local-gmb&utm_medium=organic_search&utm_source=google_gmb"
                        className="underline"
                        target="_blank"
                      >
                        Website <ArrowSquareOutIcon className="inline ml-1" />
                      </a>
                    </li>
                    <li>
                      <span className="">Price est:</span> $220/night
                    </li>
                    <li>
                      <span className="">Address</span>:{' '}
                      <a
                        className="underline"
                        href="https://maps.app.goo.gl/zSNMmmYWJCvoVTnS7"
                        target="_blank"
                      >
                        Carrer d'Àlaba, 94, 96, Sant Martí, 08018 Barcelona{' '}
                        <ArrowSquareOutIcon className="inline ml-1" />
                      </a>{' '}
                    </li>
                  </ul>

                  <a
                    href="nh-hotels.com/en/booking/step1-rates?fini=19%2F06%2F2026&fout=21%2F06%2F2026&nadults1=2&nchilds1=0&nbabies1=0&hotelId=ESBA.DIAGO&gvoucher=false&bdhotel=NH%20Hotels"
                    className="w-full lg:w-fit ring rounded p-2 px-4 flex justify-center items-center cursor-pointer hover:bg-pink-200"
                  >
                    Book here
                    <ArrowSquareOutIcon className="inline ml-1" />
                  </a>
                </div>
              </div>
              {/* Catalonia */}
              <div className="border rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8">
                <div className="flex flex-col gap-4 w-full">
                  <Heading level={4} size="xl">
                    Catalonia Barcelona Beach Hotel
                  </Heading>

                  <ul className="list-disc pl-4 flex flex-col gap-1">
                    <li>
                      <a
                        href="https://www.cataloniahotels.com/en/hotel/catalonia-barcelona-beach"
                        className="underline"
                        target="_blank"
                      >
                        Website <ArrowSquareOutIcon className="inline ml-1" />
                      </a>
                    </li>
                    <li>
                      <span className="">Price est:</span> $230/night
                    </li>
                    <li>
                      <span className="">Address</span>:{' '}
                      <a
                        className="underline"
                        href="https://maps.app.goo.gl/JJJDFaERQXJ6trwU6"
                        target="_blank"
                      >
                        Carrer d'Espronceda, 6, Sant Martí, 08005 Barcelona{' '}
                        <ArrowSquareOutIcon className="inline ml-1" />
                      </a>{' '}
                    </li>
                  </ul>

                  <a
                    href="https://www.cataloniahotels.com/en/search?hbc=CBB&sd=2026-06-19&ed=2026-06-21&rooms=%5B%7B%227%22:0,%228%22:0,%2210%22:2,%22roomNum%22:1%7D%5D"
                    className="w-full lg:w-fit ring rounded p-2 px-4 flex justify-center items-center cursor-pointer hover:bg-pink-200"
                  >
                    Book here
                    <ArrowSquareOutIcon className="inline ml-1" />
                  </a>
                </div>
              </div>
              {/* The social hub */}
              <div className="border rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8">
                <div className="flex flex-col gap-4 w-full">
                  <Heading level={4} size="xl">
                    The Social Hub Barcelona Poblenou
                  </Heading>
                  <p className="mt-4">
                    We have a discount code here,{' '}
                    <span className="font-medium">EMILYJAKE</span>. If you use
                    the "Book here" button below, it should be automatically
                    applied, but make sure to double check
                  </p>

                  <ul className="list-disc pl-4 flex flex-col gap-1">
                    <li>
                      <a
                        href="https://www.thesocialhub.co/barcelona-poblenou/"
                        className="underline"
                        target="_blank"
                      >
                        Website <ArrowSquareOutIcon className="inline ml-1" />
                      </a>
                    </li>
                    <li>
                      <span className="">Price est:</span> $305/night
                    </li>
                    <li>
                      <span className="">Address</span>:{' '}
                      <a
                        className="underline"
                        href="https://maps.app.goo.gl/gKn8YRavg8nHqtEg9"
                        target="_blank"
                      >
                        Carrer de Cristóbal de Moura, 49, Sant Martí, 08019
                        Barcelona <ArrowSquareOutIcon className="inline ml-1" />
                      </a>{' '}
                    </li>
                  </ul>
                  <a
                    href="https://www.secure-hotel-booking.com/d-edge/the-social-hub/JS43/en-US?HOTEL=BCN03&arrivalDate=Fri+19+Jun+2026&departureDate=Sun+21+Jun+2026&selectedAdultCount=2&promoCode=EMILYJAKE&_gl=1*100u8zp*_gcl_au*Nzc5NjQ0Nzg1LjE3NjEyNjAyMDc.*_ga*MTc3NTE4Nzk0LjE3NjEyNjAyMDc.*_ga_ZL45F6Q0ZD*czE3NjEyNjAyMDYkbzEkZzAkdDE3NjEyNjEyMzYkajU3JGwwJGgw"
                    className="w-full lg:w-fit ring rounded p-2 px-4 flex justify-center items-center cursor-pointer hover:bg-pink-200"
                  >
                    Book here
                    <ArrowSquareOutIcon className="inline ml-1" />
                  </a>
                </div>
              </div>

              {/* "Hotel" */}
              {/* <div className="border rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
                <BuildingIcon className="h-8 w-8 lg:h-12 lg:w-12 flex-shrink-0 self-start lg:self-auto" />
                <div>
                  <Heading level={3} size="xl">
                    Hotel
                  </Heading>

                  <p>
                    We are still working on arranging a block of rooms at a
                    hotel in Barcelona.{' '}
                    <span className="font-medium">
                      We recommend waiting until we have more information before
                      booking your own accommodation separately
                    </span>
                    . We will update this page and send out an email with more
                    information as we get closer to the wedding.{' '}
                    <span className="font-medium">
                      All shuttle busses will pick up from and drop off to the
                      hotel
                    </span>
                    , so if you're not planning on staying at the hotel, you
                    will be responsible for getting to the hotel for shuttle
                    pick-up.
                  </p>
                </div>
              </div> */}
              {/* "AirBnb" */}
              <div className="border rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8">
                {/* <HouseIcon className="h-8 w-8 lg:h-12 lg:w-12 flex-shrink-0 self-start lg:self-auto" /> */}
                <div>
                  <Heading level={3} size="xl">
                    Airbnb
                  </Heading>

                  <p className="">
                    If you're traveling with a larger group of people and would
                    like more space or flexibility, you can also look into
                    available Airbnbs.
                  </p>
                  <p className="mt-4">
                    Please be aware that Spain is closing down over 60,000
                    Airbnb units over the next three years (
                    <a
                      className="underline"
                      href="https://www.reuters.com/world/europe/spains-consumer-rights-ministry-blocks-more-than-65000-airbnb-listings-holiday-2025-05-19/"
                    >
                      read more about these changes to Airbnb here
                    </a>
                    ). This means that prices are likely to increase. It may
                    also mean that if you book an Airbnb that did not register
                    correctly with the city, the listing may be removed. If you
                    book an Airbnb, we{' '}
                    <span className="font-medium">highly</span> encourage you to
                    reach out to the host to see what paperwork they have to
                    confirm their unit has been registered with the city.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScreenWidthContainer>
      </section>

      {/* Transportation */}
      <section className="w-full" id="timeline">
        <ScreenWidthContainer className="flex flex-col gap-10 lg:gap-10 items-center py-10 px-6">
          {/* Transportation */}
          <div className="flex flex-col gap-6">
            <Heading level={2} size="2xl" id="transportation">
              Transportation
            </Heading>

            <Heading level={3} size="lg" id="transportation">
              Getting around Barcelona
            </Heading>

            <div className="flex flex-col gap-10 w-full">
              <p>
                Barcelona is a very walkable city, and we recommend using the
                public transportation system to get around as much as
                you&apos;re comfortable. The metro, tram, and bus systems are
                very well connected. You can purchase a transit card (called the
                T-Casual) at any Metro or Tram stop. For a full guide on how to
                use the public transportation system, please see{' '}
                <a
                  href="https://housinganywhere.com/Barcelona--Spain/Barcelona-public-transport"
                  target="_blank"
                  className="underline"
                >
                  this guide
                </a>
                .
              </p>
            </div>

            <Heading level={3} size="lg" id="transportation">
              Getting to the venue
            </Heading>

            <div className="flex flex-col gap-10 w-full">
              <p>
                {' '}
                We will be providing a bus to get to the venue, departing from
                the hotel. The bus will leave the hotel promptly at 3:15pm, and
                will arrive at the venue at 4:00pm. If you do not make the bus,
                you will need to take a long and expensive Uber or Taxi to our
                venue, so please be <span className="font-medium">early</span>!
                The bus ride up to the venue includes winding roads.{' '}
                <span className="font-medium">
                  If you are susceptible to motion sickness, please be advised
                  of this and consider taking Dramamine or alternative
                  anti-nausea medications
                </span>
                .
              </p>
              <p>
                For guests who would prefer to drive themselves, you may rent a
                car via companies like{' '}
                <a
                  href="https://www.sixt.com/"
                  target="_blank"
                  className="underline"
                >
                  Sixt
                </a>
                . We have used them multiple times in Spain and Greece, and are
                reliable. All you need is your driver's license, passport, and a
                credit card.
              </p>
            </div>
          </div>
        </ScreenWidthContainer>
      </section>

      {/* things to do */}
      <section className="w-full bg-white" id="barcelona">
        <ScreenWidthContainer className="flex flex-col w-full gap-10 items-start py-10 px-6">
          {/* Things to do in Barcelona */}
          <div className="flex flex-col gap-6 w-full">
            <Heading level={2} size="2xl">
              Things to do in Barcelona
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
              <div className="border rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
                <ConfettiIcon className="h-12 w-12 flex-shrink-0" />
                <div>
                  <Heading level={3} size="xl">
                    Culture
                  </Heading>

                  <ul className="list-disc list-inside">
                    <li>
                      <a
                        href="https://www.guruwalk.com/barcelona"
                        target="_blank"
                        className="underline"
                      >
                        Walking Tour
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.barcelonabusturistic.cat/en"
                        target="_blank"
                        className="underline"
                      >
                        Hop-on hop-off bus
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://sagradafamilia.org/en/"
                        target="_blank"
                        className="underline"
                      >
                        La Sagrada Familia
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tablaoflamencobarcelona.com/"
                        target="_blank"
                        className="underline"
                      >
                        Flamenco Show
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
                <ForkKnifeIcon className="h-12 w-12 flex-shrink-0" />
                <div>
                  <Heading level={3} size="xl">
                    Food
                  </Heading>

                  <ul className="list-disc list-inside">
                    <li>
                      <a
                        href="https://www.airbnb.com/experiences/51496?c=.pi0.pk21690586450_168862475244&gad_source=1&gad_campaignid=21690586450&gbraid=0AAAAAoNIxoOXv3KR3oRGBzIyXtAn2x3SQ&gclid=CjwKCAjw6ZTCBhBOEiwAqfwJd_l8Ih-npODmtxRuCOjPKOV3K70UfOhkvMFnT1TyVGlHm_Iz1p2nHRoCdbsQAvD_BwE&s=67&unique_share_id=2c41fa19-5453-40f7-820b-bc382bf9b706"
                        target="_blank"
                        className="underline"
                      >
                        Tapas Crawl
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.bcnkitchen.com/en/cooking-classes/"
                        target="_blank"
                        className="underline"
                      >
                        Cooking Class
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.boqueria.barcelona/home"
                        target="_blank"
                        className="underline"
                      >
                        Mercat de la Boqueria
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://maps.app.goo.gl/qcwi4tk4Yj4hGdXA7"
                        target="_blank"
                        className="underline"
                      >
                        Mercat de Sant Antoni
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
                <PaletteIcon className="h-12 w-12 flex-shrink-0" />
                <div>
                  <Heading level={3} size="xl">
                    Art
                  </Heading>

                  <ul className="list-disc list-inside">
                    <li>
                      <a
                        href="https://museupicassobcn.cat/en"
                        target="_blank"
                        className="underline"
                      >
                        Picasso Museum
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://palauguell.cat/en"
                        target="_blank"
                        className="underline"
                      >
                        Palau Guell
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://mocomuseum.com/barcelona/"
                        target="_blank"
                        className="underline"
                      >
                        Moco Museum
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
                <BeachBallIcon className="h-12 w-12 flex-shrink-0" />
                <div>
                  <Heading level={3} size="xl">
                    Nature
                  </Heading>

                  <ul className="list-disc list-inside">
                    <li>
                      <a
                        href="https://parkguell.barcelona/en"
                        target="_blank"
                        className="underline"
                      >
                        Park Guell
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://maps.app.goo.gl/1iF4Z1ejCHXQfrxe6"
                        target="_blank"
                        className="underline"
                      >
                        Barceloneta Beach
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://maps.app.goo.gl/pKmcBTYsXEUy1cxt6"
                        target="_blank"
                        className="underline"
                      >
                        Bogatell Beach
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
                <HeartIcon className="h-12 w-12 flex-shrink-0" />
                <div>
                  <Heading level={3} size="xl">
                    Family
                  </Heading>

                  <ul className="list-disc list-inside">
                    <li>
                      <a
                        href="https://www.aquariumbcn.com/en/"
                        target="_blank"
                        className="underline"
                      >
                        L&apos;Aquárium de Barcelona
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.zoobarcelona.cat/en"
                        target="_blank"
                        className="underline"
                      >
                        Barcelona Zoo
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://bigfunmuseum.com/en/"
                        target="_blank"
                        className="underline"
                      >
                        Big Fun Museum
                      </a>
                    </li>
                  </ul>
                </div>
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
