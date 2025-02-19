import { Heading } from './primitives/heading';
import { ScreenWidthContainer } from './primitives/screen-width-container';

export function Timeline() {
  return (
    <section className="bg-pink-50 w-full" id="timeline">
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
                  Start saving up for travel expenses
                </Heading>
                <p className="text-base">As soon as possible</p>
              </div>
            </div>
          </div>
          <div className="w-[75px] border-t border-t-pink" />
          <p className="font-body font-light text-base">
            We'll be working to make sure the trip is as smooth and affordable
            as possible, but we also know international travel will still be
            expensive. Please start saving up early if you can!
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
                  Passports - Check or apply
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
            Your passport must be valid for 6 months after leaving Europe. So if
            you&apos;re planning on staying until the end of June 2026, your
            passport must be valid until the end of December 2026. If you have
            one, and it expires before then, you must renew it.
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
                  RSVPs go out
                </Heading>
                <p className="text-base">March, 2025</p>
              </div>
            </div>
          </div>
          <div className="w-[75px] border-t border-t-pink" />
          <p className="font-body font-light text-base">
            We're still finalizing some plans and getting some more information
            on how best to plan for accommodation and travel, but once we have
            more information, we'll be sending out RSVPs. When you receive
            yours, please try to answer as soon as possible!
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
            Plane tickets are the most expensive part of the trip, so we'll be
            working to find the best deals. Please plan to book your tickets
            well in advance though, as tickets will only get more expensive as
            the trip approaches. We will be sending out more information on this
            later.
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
                  Book accommodation
                </Heading>
                <p className="text-base">TBD</p>
              </div>
            </div>
          </div>
          <div className="w-[75px] border-t border-t-pink" />
          <p className="font-body font-light text-base">
            We will be searching for the best deals on accommodation, and are
            planning on booking a block of hotel rooms. We will send out more
            information about this as we learn more.
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
            We will be planning some events around the day of the wedding,
            including a welcome dinner and other activities. More information
            will be sent out as we put together the schedule.
          </p>
        </div>
      </ScreenWidthContainer>
    </section>
  );
}
