import { Link } from 'waku';
import { HomeFAQ } from '../components/home-faq';
import { Heading } from '../components/primitives/heading';
import { ScreenWidthContainer } from '../components/primitives/screen-width-container';

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
                <span className="font-semibold">
                  We recommend waiting until we have more information before
                  booking your own accommodation separately
                </span>
                . We will update this page and send out an email with more
                information as we get closer to the wedding.{' '}
                <span className="font-semibold">
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
                <span className="font-semibold">highly</span> encourage you to
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

        <Heading level={2} size="2xl">
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
          <p></p>
        </div>

        <Heading level={2} size="2xl">
          Things to do in Barcelona
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          <div className="rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
            <svg
              className="h-12 w-12 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <path
                d="M40.49,205.52,93,61.14a7.79,7.79,0,0,1,12.84-2.85l91.88,91.88A7.79,7.79,0,0,1,194.86,163L50.48,215.51A7.79,7.79,0,0,1,40.49,205.52Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M168,72s0-24,24-24,24-24,24-24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="144"
                y1="16"
                x2="144"
                y2="40"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="216"
                y1="112"
                x2="232"
                y2="128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="216"
                y1="80"
                x2="240"
                y2="72"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="78.09"
                y1="102.09"
                x2="153.91"
                y2="177.91"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="101.11"
                y1="197.11"
                x2="58.89"
                y2="154.89"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
            <div>
              <Heading level={3} size="xl">
                Culture
              </Heading>

              <ul className="list-disc list-inside">
                <li>Walking Tour</li>
                <li>Hop on Hop off bus</li>
                <li>La Sagrada Famila</li>
                <li>Flamenco Show</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
            <svg
              className="h-12 w-12 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <circle cx="156" cy="76" r="12" />
              <path
                d="M8,175.87l56.07,16.06,16,56.07,24-56.07C258.51,188.26,220,38.68,219,37c-1.73-1-151.25-39.46-155,114.9Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M185.82,167.62A44,44,0,0,1,136.2,119.8,44,44,0,0,1,88.38,70.21"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
            <div>
              <Heading level={3} size="xl">
                Food
              </Heading>

              <ul className="list-disc list-inside">
                <li>Tapas Crawl</li>
                <li>Cooking Class</li>
                <li>Mercat de la Boqueria</li>
                <li>Mercat de Sant Antoni</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
            <svg
              className="h-12 w-12 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <path
                d="M128,192a24,24,0,0,1,24-24h46.21a24,24,0,0,0,23.4-18.65A96.48,96.48,0,0,0,224,127.17c-.45-52.82-44.16-95.7-97-95.17a96,96,0,0,0-95,96c0,41.81,26.73,73.44,64,86.61A24,24,0,0,0,128,192Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <circle cx="128" cy="76" r="12" />
              <circle cx="84" cy="100" r="12" />
              <circle cx="84" cy="156" r="12" />
              <circle cx="172" cy="100" r="12" />
            </svg>
            <div>
              <Heading level={3} size="xl">
                Art
              </Heading>

              <ul className="list-disc list-inside">
                <li>Picasso Museum</li>
                <li>Palau Guell</li>
                <li>Moco Museum</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
            <svg
              className="h-12 w-12 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <circle
                cx="128"
                cy="128"
                r="96"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M147.93,34.08a192.17,192.17,0,0,1-27.12,189.65"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M32.27,135.19a192.17,192.17,0,0,1,189.65-27.12"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M79.25,45.27a191.14,191.14,0,0,1,82.69,48.79,191.14,191.14,0,0,1,48.79,82.69"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
            <div>
              <Heading level={3} size="xl">
                Nature
              </Heading>

              <ul className="list-disc list-inside">
                <li>Park Guell</li>
                <li>Barceloneta Beach</li>
                <li>Bogatell Beach</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-pink-100 p-4 flex-1 flex flex-row gap-8 items-center">
            <svg
              className="h-12 w-12 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <path
                d="M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
            <div>
              <Heading level={3} size="xl">
                Family
              </Heading>

              <ul className="list-disc list-inside">
                <li>L&apos;Aquárium de Barcelona</li>
                <li>Barcelona Zoo</li>
                <li>Big Fun Museum</li>
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
