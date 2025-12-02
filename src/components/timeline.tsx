import { Heading } from './primitives/heading';
import { ScreenWidthContainer } from './primitives/screen-width-container';

export function Timeline() {
  return (
    <section className="bg-white w-full" id="timeline">
      <ScreenWidthContainer className="flex flex-col gap-10 lg:gap-10 items-center py-10 px-6">
        <Heading level={2} size="2xl" className="text-center col-span-1 w-full">
          Next steps
        </Heading>

        {/* Timeline item */}
        <div className="flex flex-col gap-4 col-span-2">
          {/* item heading */}
          <div className="flex flex-row">
            <div className="flex flex-row gap-4">
              {/* icon on left */}
              <svg
                width={48}
                height={48}
                className="text-pink fill-pink"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <circle cx="180" cy="116" r="12" />
                <line
                  x1="112"
                  y1="72"
                  x2="152"
                  y2="72"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  x1="216"
                  y1="40"
                  x2="144"
                  y2="40"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <path
                  d="M8,144a24,24,0,0,1,24-24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <path
                  d="M220.34,96H224a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16h-8l-18.1,50.69a8,8,0,0,1-7.54,5.31H177.64a8,8,0,0,1-7.54-5.31L166.29,200H97.71L93.9,210.69A8,8,0,0,1,86.36,216H73.64a8,8,0,0,1-7.54-5.31L53,174a79.7,79.7,0,0,1-21-54h0a80,80,0,0,1,80-80h32a80,80,0,0,1,73.44,48.22,82.22,82.22,0,0,1,2.9,7.78"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
              </svg>
              {/* Title and subtitle on the right */}
              <div className="flex w-full flex-col">
                <Heading level={3} size="lg">
                  Keep saving up for travel expenses
                </Heading>
                <p className="text-base">As soon as possible</p>
              </div>
            </div>
          </div>
          <div className="w-[75px] border-t border-t-pink" />
          <p className="font-body font-light text-base">
            We'll be working to make sure the trip is as smooth and affordable
            as possible, but we also know international travel will still be
            expensive.
          </p>
        </div>

        {/* Timeline item */}
        <div className="flex flex-col gap-4 col-span-2">
          {/* item heading */}
          <div className="flex flex-row">
            <div className="flex flex-row gap-4">
              {/* icon on left */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width={48}
                height={48}
                className="text-pink"
              >
                <rect width="256" height="256" fill="none" />
                <path
                  d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <polyline
                  points="48 216 48 224 192 224"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
              </svg>
              {/* Title and subtitle on the right */}
              <div className="flex w-full flex-col">
                <Heading level={3} size="lg">
                  Check or apply for Passports
                </Heading>
                <p className="text-base">
                  As soon as posisble - Don&apos;t wait for this!
                </p>
              </div>
            </div>
          </div>
          <div className="w-[75px] border-t border-t-pink" />
          <p className="font-body font-light text-base">
            <span className="font-medium">
              Everyone coming needs a passport!
            </span>{' '}
            Your passport must be valid for 6 months after leaving Europe. So,
            for example, if you&apos;re planning on staying until the end of
            June 2026, your passport must be valid until the end of December
            2026. If you have a passport, and it expires before then, you must
            renew it.
          </p>
          <a
            href="https://travel.state.gov/content/travel/en/passports.html"
            target="_blank"
            className="text-base underline"
          >
            More information about passports
          </a>
        </div>

        {/* Timeline item */}
        <div className="flex flex-col gap-4 col-span-2 bg-pink-50 p-4 rounded-[8px] border border-pink">
          {/* item heading */}
          <div className="flex flex-row">
            <div className="flex flex-row gap-4">
              {/* icon on left */}
              <svg
                width={48}
                height={48}
                className="text-pink fill-pink"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <rect
                  x="40"
                  y="40"
                  width="176"
                  height="176"
                  rx="8"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  x1="176"
                  y1="24"
                  x2="176"
                  y2="56"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  x1="80"
                  y1="24"
                  x2="80"
                  y2="56"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <path
                  d="M128,120a24,24,0,0,1,48,0c0,32-48,56-48,56s-48-24-48-56a24,24,0,0,1,48,0Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
              </svg>
              {/* Title and subtitle on the right */}
              <div className="flex w-full flex-col">
                <Heading level={3} size="lg">
                  Respond to RSVPs
                </Heading>
                <p className="text-base">Please respond by Feb 20, 2026</p>
              </div>
            </div>
          </div>
          <div className="w-[75px] border-t border-t-pink" />
          <p className="font-body font-light text-base">
            You should have an RSVP from Paperless Post in your inbox! If you
            received a save the date but can't find your RSVP, please let us
            know. We know planning for the trip and time off requests may take
            some time, but please let us know as soon as you can if you can make
            it!{' '}
            <span className="font-normal">All RSVPs due by February 20th</span>.
          </p>
        </div>

        {/* Timeline item */}
        <div className="flex flex-col gap-4 col-span-2">
          {/* item heading */}
          <div className="flex flex-row">
            <div className="flex flex-row gap-4">
              {/* icon on left */}
              <svg
                width={48}
                height={48}
                className="text-pink fill-pink"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <path
                  d="M88,224l24-24V176l24-24,48,72,24-24-32-88,33-31A24,24,0,0,0,175,47L144,80,56,48,32,72l72,48L80,144H56L32,168l40,16Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
              </svg>
              {/* Title and subtitle on the right */}
              <div className="flex w-full flex-col">
                <Heading level={3} size="lg">
                  Buy plane tickets
                </Heading>
                <p className="text-base">Before February, 2026</p>
              </div>
            </div>
          </div>
          <div className="w-[75px] border-t border-t-pink" />
          <p className="font-body font-light text-base">
            Plane tickets are the most expensive part of the trip, and the best
            time to purchase may be different depending on what airport you're
            flying from or other travel plans you may have before or after the
            wedding. The best piece of advice we can give is to buy tickets as
            soon as you reasonably can. Don't wait for the "perfect" deal!
          </p>
        </div>

        {/* Timeline item */}
        <div className="flex flex-col w-full gap-4 col-span-2">
          {/* item heading */}
          <div className="flex flex-row">
            <div className="flex flex-row gap-4">
              {/* icon on left */}
              <svg
                width={48}
                height={48}
                className="text-pink fill-pink"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <path
                  d="M112,168V80H216a32,32,0,0,1,32,32v56"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  x1="24"
                  y1="208"
                  x2="24"
                  y2="48"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <polyline
                  points="24 168 248 168 248 208"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  x1="112"
                  y1="80"
                  x2="24"
                  y2="80"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
              </svg>
              {/* Title and subtitle on the right */}
              <div className="flex w-full flex-col">
                <Heading level={3} size="lg">
                  Book accommodations
                </Heading>
                <p className="text-base">As soon as possible</p>
              </div>
            </div>
          </div>
          <div className="w-[75px] border-t border-t-pink" />
          <p className="font-body font-light text-base">
            We have searched the area and contacted hotels and have
            recommendations listed on the{' '}
            <a href="/travel" className="underline">
              Travel
            </a>{' '}
            page. The hotels in the area generally aren't very large, so we
            can't guarantee a room will be available for everyone at one hotel.
            If you'd like to stay at the hotel where the shuttle will pick up
            from, we suggest booking soon (even before flights).
          </p>
        </div>

        <div className="flex flex-col gap-4 col-span-2">
          {/* item heading */}
          <div className="flex flex-row">
            <div className="flex flex-row gap-4">
              {/* icon on left */}
              <svg
                width={48}
                height={48}
                className="text-pink fill-pink"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <path
                  d="M128,56l32-8s26.48,41.35,38.9,87.71a32,32,0,1,1-61.82,16.56C124.66,105.91,128,56,128,56Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  x1="176.27"
                  y1="174.9"
                  x2="190.63"
                  y2="228.47"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  x1="216"
                  y1="221.67"
                  x2="168"
                  y2="234.53"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <path
                  d="M128,32,96,24S69.52,65.35,57.1,111.71a32,32,0,1,0,61.82,16.56C130.29,81.8,128,32,128,32Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  x1="79.73"
                  y1="150.9"
                  x2="65.37"
                  y2="204.47"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  x1="40"
                  y1="197.67"
                  x2="88"
                  y2="210.53"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <path
                  d="M128.49,97.88,179.94,85"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <path
                  d="M126.92,75.73,75.23,62.81"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  x1="192"
                  y1="40"
                  x2="208"
                  y2="32"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  x1="208"
                  y1="72"
                  x2="224"
                  y2="72"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  x1="56"
                  y1="32"
                  x2="40"
                  y2="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <line
                  x1="40"
                  y1="64"
                  x2="24"
                  y2="64"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
              </svg>
              {/* Title and subtitle on the right */}
              <div className="flex w-full flex-col">
                <Heading level={3} size="lg">
                  Celebrate
                </Heading>
                <p className="text-base">June 20, 2026</p>
              </div>
            </div>
          </div>
          <div className="w-[75px] border-t border-t-pink" />
          <p className="font-body font-light text-base">
            We're still finalizing some plans and getting some more information
            on events and venues surrounding the wedding, but{' '}
            <a href="/schedule" className="underline">
              you can look at the schedule here
            </a>
            .
          </p>
        </div>
      </ScreenWidthContainer>
    </section>
  );
}
