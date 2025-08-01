import { Link } from 'waku';
import { Heading } from './primitives/heading';
import { Menu } from './Menu';
import { ScreenWidthContainer } from './primitives/screen-width-container';

export const Header = () => {
  return (
    <header className="">
      <ScreenWidthContainer>
        <div className="flex flex-1 justify-between items-center gap-4 p-6 py-4 w-full">
          <Link to="/">
            <Heading level={2} size="lg">
              Emily & Jake
            </Heading>
          </Link>

          <div className="gap-4 items-center lg:flex hidden">
            <Link
              to="/our-story"
              className="font-body font-light hover:underline"
            >
              Our story
            </Link>
            <Link to="/travel" className="font-body font-light hover:underline">
              Travel
            </Link>
            <Link
              to="/schedule"
              className="font-body font-light hover:underline"
            >
              Schedule
            </Link>
            <Link
              to="/packing"
              className="font-body font-light hover:underline"
            >
              What to Bring
            </Link>
            {/* <Link to="/rsvp" className="font-body font-light hover:underline">
          RSVP
        </Link> */}
          </div>
          {/* mobile menu */}
          <Menu />
        </div>
      </ScreenWidthContainer>
    </header>
  );
};
