import { Link } from 'waku';
import { Heading } from './primitives/heading';

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4 p-6 py-4 w-full">
      <Link to="/">
        <Heading level={2} size="lg">
          Emily & Jake
        </Heading>
      </Link>

      <div className="flex gap-4 items-center">
        <Link to="/our-story" className="font-body font-light hover:underline">
          Our story
        </Link>
        <Link to="/travel" className="font-body font-light hover:underline">
          Travel
        </Link>
        <Link to="/itinerary" className="font-body font-light hover:underline">
          Itinerary
        </Link>
        <Link to="/rsvp" className="font-body font-light hover:underline">
          RSVP
        </Link>
      </div>
    </header>
  );
};
