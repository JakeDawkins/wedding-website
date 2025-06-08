import { Link } from 'waku';
import { Heading } from '../components/primitives/heading';
import { ScreenWidthContainer } from '../components/primitives/screen-width-container';
import {
  BeachBallIcon,
  ConfettiIcon,
  ForkKnifeIcon,
  HeartIcon,
  PaletteIcon,
} from '@phosphor-icons/react/dist/ssr';

export default async function AboutPage() {
  return (
    <div className="w-full">
      <title>Travel Info | Emily & Jake</title>

      <ScreenWidthContainer className="flex flex-col gap-6 items-start px-6">
        <Heading level={1} size="4xl" className="text-center w-full">
          Travel Info
        </Heading>

        <Heading level={2} size="2xl">
          When to arrive
        </Heading>

        <div className="flex flex-col gap-10 w-full">
          <p>
            If you have the ability, we recommend arriving a few days before the
            wedding to combat jet lag. The wedding and reception itself will
            last until late, so we recommend arriving a few days before the
            wedding to allow for some time to adjust to the local time.
          </p>
          <p>
            We will have a welcome dinner the evening before, and a brunch the
            morning after, available to all guests and their families traveling
            with them.
          </p>
        </div>

        <Heading level={2} size="2xl">
          Accommodations
        </Heading>

        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-12 w-12 flex-shrink-0"
            >
              <rect width="256" height="256" fill="none" />
              <line
                x1="24"
                y1="232"
                x2="232"
                y2="232"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="56"
                y1="24"
                x2="56"
                y2="232"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="200"
                y1="232"
                x2="200"
                y2="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="96"
                y1="64"
                x2="112"
                y2="64"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="144"
                y1="64"
                x2="160"
                y2="64"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="96"
                y1="104"
                x2="112"
                y2="104"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="144"
                y1="104"
                x2="160"
                y2="104"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="96"
                y1="144"
                x2="112"
                y2="144"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="144"
                y1="144"
                x2="160"
                y2="144"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <polyline
                points="104 232 104 184 152 184 152 232"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="40"
                y1="24"
                x2="216"
                y2="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>

            <div>
              <Heading level={3} size="xl">
                Hotel
              </Heading>

              <p>
                We are still working on arranging a block of rooms at a hotel in
                Barcelona.{' '}
                <span className="font-medium">
                  We recommend waiting until we have more information before
                  booking your own accommodation separately
                </span>
                . We will update this page and send out an email with more
                information as we get closer to the wedding.{' '}
                <span className="font-medium">
                  All shuttle busses will pick up from and drop off to the hotel
                </span>
                , so if you're not planning on staying at the hotel, you will be
                responsible for getting to the hotel for shuttle pick-up.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-12 w-12 flex-shrink-0"
            >
              <rect width="256" height="256" fill="none" />
              <path
                d="M104,216V152h48v64h64V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120v96Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
            <div>
              <Heading level={3} size="xl">
                Airbnb
              </Heading>

              <p>
                Please be aware that Spain is closing down over 60,000 Airbnb
                units over the next three years (
                <a
                  className="underline"
                  href="https://www.reuters.com/world/europe/spains-consumer-rights-ministry-blocks-more-than-65000-airbnb-listings-holiday-2025-05-19/"
                >
                  read more about these changes to Airbnb here
                </a>
                ). The largest impact of this will be felt in large cities,
                including Barcelona. This means that prices are likely to
                increase. It may also mean that if you book an Airbnb that did
                not register correctly with the city, the listing may be
                removed. If you book an Airbnb, we{' '}
                <span className="font-medium">highly</span> encourage you to
                reach out to the host to see what paperwork they have to confirm
                their unit has been registered with the city.
              </p>
              <p className="mt-4">
                We recommend guests book a room through our room block at our
                hotel for the weekend. Transportation to and from our wedding
                day events will be provided via a bus service from this hotel.
              </p>
            </div>
          </div>
        </div>

        <Heading level={2} size="2xl" id="transportation">
          Transportation
        </Heading>

        <div className="flex flex-col gap-10 w-full">
          <p>
            Our bus service will leave the hotel promptly at 3:15pm, and will
            arrive at the venue at 4:00pm. If you do not make the bus, you will
            need to take a long and expensive Uber or Taxi to our venue, so
            please be punctual! The bus ride up to the venue includes winding
            roads. If you are susceptible to motion sickness, please be advised
            of this and consider taking Dramamine or alternative anti-nausea
            medications.
          </p>
          <p>
            For guests who would prefer to drive themselves, you may rent a car
            via companies like Sixt. We have used them multiple times in Spain
            and Greece, and are reliable. All you need is your driver's license
            and a credit card.
          </p>
        </div>

        <Heading level={2} size="2xl">
          Things to do in Barcelona
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          <div className="rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
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

          <div className="rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
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

          <div className="rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
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

          <div className="rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
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

          <div className="rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
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
      </ScreenWidthContainer>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
