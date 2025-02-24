import { Heading } from './primitives/heading';
import { ScreenWidthContainer } from './primitives/screen-width-container';

export function Hero() {
  return (
    <div className="flex relative items-center justify-between w-full md:aspect-[3/2] lg:aspect-[2] overflow-hidden p-6">
      <img
        src="/images/hero.jpeg"
        alt="Aerial view of the La Baronia venue in Spain"
        className="w-full h-full object-cover object-center absolute inset-0 md:aspect-[3/2] lg:aspect-[2] min-h-fit"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-pink-200/10" />
      {/* Text box */}
      <ScreenWidthContainer className="flex z-10 items-center justify-center text-center">
        <div className="p-6 bg-pink-50/75 flex items-center justify-center flex-col gap-4 rounded my-6">
          <p className="font-body font-light text-[size:var(--step-1-min-abs)]">
            Save the date!
          </p>
          <h1 className="font-heading text-[size:var(--step-5-min-abs)]">
            We're getting married!
          </h1>
          {/* <Heading level={1} size="4xl">
            We're getting married!
          </Heading> */}
          <p className="font-body font-light text-[size:var(--step-1-min-abs)]">
            June 20, 2026 — <span className="italic">Barcelona</span>
          </p>
        </div>
      </ScreenWidthContainer>
    </div>
  );
}
