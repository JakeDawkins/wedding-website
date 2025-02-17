import { Heading } from './primitives/heading';
import { ScreenWidthContainer } from './primitives/screen-width-container';

export function Hero() {
  return (
    <div className="flex relative items-center justify-between w-full aspect-square md:aspect-[3/2] lg:aspect-[2] overflow-hidden p-6">
      <img
        src="/images/hero.jpeg"
        alt="Aerial view of the La Baronia venue in Spain"
        className="w-full object-cover absolute inset-0 aspect-square md:aspect-[3/2] lg:aspect-[2]"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-pink-200/20" />
      {/* Text box */}
      <ScreenWidthContainer className="flex z-10 items-center justify-center text-center">
        <div className="p-6 bg-pink-50/70 flex items-center justify-center flex-col gap-4 rounded">
          <p className="font-body font-light text-lg">
            Come celebrate with us!
          </p>
          <Heading level={1} size="4xl">
            We're getting married!
          </Heading>
          <p className="font-body font-light text-lg">
            June 20, 2026 — <span className="italic">Barcelona</span>
          </p>
        </div>
      </ScreenWidthContainer>
    </div>
  );
}
