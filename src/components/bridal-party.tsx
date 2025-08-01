import { Heading } from './primitives/heading';
import { ScreenWidthContainer } from './primitives/screen-width-container';

const partyData = {
  bride: [
    {
      name: 'Kayla Gaudet',
      photo: '/images/party/kayla.jpeg',
      role: 'Co-Maid of Honor',
    },
    {
      name: 'Tara Gaudet',
      photo: '/images/party/tara.jpeg',
      role: 'Co-Maid of Honor',
    },
    {
      name: 'Lauren Jachimczyk',
      photo: '/images/party/lauren.jpeg',
      role: 'Bridesmaid',
    },
    {
      name: 'Christine Gaudet',
      photo: '/images/party/christine.jpeg',
      role: 'Bridesmaid',
    },
    {
      name: 'Melissa Gaudet',
      photo: '/images/party/melissa.jpeg',
      role: 'Bridesmaid',
    },
  ],
  groom: [
    {
      name: 'James Baxley',
      photo: '/images/party/james.jpeg',
      role: 'Best Man',
    },
    {
      name: 'Davis Fortier',
      photo: '/images/party/davis.jpeg',
      role: 'Groomsman',
    },
    {
      name: 'Ethan Lander',
      photo: '/images/party/ethan.jpeg',
      role: 'Groomsman',
    },
    {
      name: 'Brian Gaudet',
      photo: '/images/party/brian.jpeg',
      role: 'Groomsman',
    },
    {
      name: 'Jonathan Gaudet',
      photo: '/images/party/jonathan.jpeg',
      role: 'Groomsman',
    },
  ],
  officiant: [
    {
      name: 'Josh Garcia',
      photo: '/images/party/josh.jpeg',
      role: null,
      // role: 'Officiant',
    },
  ],
  others: [
    {
      name: 'Joan Gaudet',
      photo: '/images/party/joan.jpeg',
      role: 'Flower Girl',
    },
    {
      name: 'Michael Gaudet',
      photo: '/images/party/michael.jpeg',
      role: 'Ring Bearer',
    },
    {
      name: 'Dylan Gaudet',
      photo: '/images/party/dylan.jpeg',
      role: 'Ring Bearer',
    },
  ],
};

export function BridalParty() {
  return (
    <section className="w-full" id="barcelona">
      <ScreenWidthContainer className="flex flex-col w-full gap-10 items-center py-10 px-6">
        <Heading level={2} size="2xl" className="text-center col-span-1 w-full">
          Bridal party
        </Heading>
        {/* Bride's row */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <Heading level={3} size="xl" className="text-center">
            Bride
          </Heading>
          {/* person grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 col-span-2">
            {partyData.bride.map((person) => {
              return <PersonTile key={person.name} person={person} />;
            })}
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <Heading level={3} size="xl" className="text-center">
            Groom
          </Heading>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 col-span-2">
            {partyData.groom.map((person) => {
              return <PersonTile key={person.name} person={person} />;
            })}
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <Heading level={3} size="xl" className="text-center">
            Officiant
          </Heading>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 col-span-2">
            {partyData.officiant.map((person) => {
              return <PersonTile key={person.name} person={person} />;
            })}
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <Heading level={3} size="xl" className="text-center">
            Essential Crew
          </Heading>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 col-span-2">
            {partyData.others.map((person) => {
              return <PersonTile key={person.name} person={person} />;
            })}
          </div>
        </div>
      </ScreenWidthContainer>
    </section>
  );
}

type Person = {
  name: string;
  photo: string;
  role: string | null;
};

const PersonTile = ({ person }: { person: Person }) => {
  return (
    <div key={person.name} className="flex flex-col w-full">
      <img
        className="aspect-square w-full bg-pink opacity:100 lg:opacity-90 hover:opacity-100 focus:opacity-100 rounded"
        src={person.photo}
      />
      <p className="font-light text-base mt-2">{person.name}</p>
      {person.role ?? <p className="font-light text-sm">{person.role}</p>}
    </div>
  );
};
