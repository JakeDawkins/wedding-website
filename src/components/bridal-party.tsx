import { Heading } from './primitives/heading';
import { ScreenWidthContainer } from './primitives/screen-width-container';

const xpartyData = {
  bride: [
    {
      name: 'Kayla Gaudet',
      photo: '',
      role: 'Co-Maid of Honor',
    },
    {
      name: 'Tara Gaudet',
      photo: '',
      role: 'Co-Maid of Honor',
    },
    {
      name: 'Lauren Jachimczyk',
      photo: '',
    },
    {
      name: 'Christine Gaudet',
      photo: '',
    },
    {
      name: 'Melissa Gaudet',
      photo: '',
    },
  ],
  groom: [
    {
      name: 'Jeff Dawkins',
      photo: '',
      role: 'Co-Best Man',
    },
    {
      name: 'James Baxley',
      photo: 'Co-Best Man',
    },
    {
      name: 'Davis Fortier',
      photo: '',
    },
    {
      name: 'Ethan Lander',
      photo: '',
    },
    {
      name: 'Brian Gaudet',
      photo: '',
    },
    {
      name: 'Jonathan Gaudet',
      photo: '',
    },
  ],
  other: [
    {
      name: 'Josh Garcia',
      photo: '',
    },
  ],
};

const partyData = {
  bride: [
    {
      name: 'Person 1',
      photo: '',
      role: 'Maid of Honor',
    },
    {
      name: 'Person 2',
      photo: '',
      // role: 'Co-Maid of Honor',
    },
    {
      name: 'Person 3',
      photo: '',
    },
    {
      name: 'Person 4',
      photo: '',
    },
    {
      name: 'Person 5',
      photo: '',
    },
  ],
  groom: [
    {
      name: 'Person 6',
      photo: '',
      role: 'Best Man',
    },
    {
      name: 'Person 7',
      // photo: 'Co-Best Man',
    },
    {
      name: 'Person 8',
      photo: '',
    },
    {
      name: 'Person 9',
      photo: '',
    },
    {
      name: 'Person 10',
      photo: '',
    },
    {
      name: 'Person 11',
      photo: '',
    },
  ],
  other: [
    {
      name: 'Person 12',
      photo: '',
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
              return (
                <div key={person.name} className="flex flex-col gap-2 w-full">
                  <img className="aspect-square w-full bg-pink opacity:100 lg:opacity-75 hover:opacity-100 focus:opacity-100 rounded" />
                  <p className="font-light">{person.name}</p>
                  <p>{person.role}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <Heading level={3} size="xl" className="text-center">
            Groom
          </Heading>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 col-span-2">
            {partyData.groom.map((person) => {
              return (
                <div key={person.name} className="flex flex-col gap-2 w-full">
                  <img className="aspect-square w-full bg-pink opacity:100 lg:opacity-75 hover:opacity-100 focus:opacity-100 rounded" />
                  <p>{person.name}</p>
                  <p>{person.role}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <Heading level={3} size="xl" className="text-center">
            Officiant
          </Heading>
          <div className="w-1/2 md:w-1/3 col-span-2">
            {partyData.other.map((person) => {
              return (
                <div key={person.name} className="flex flex-col gap-2 w-full">
                  <img className="aspect-square w-full bg-pink opacity:100 lg:opacity-75 hover:opacity-100 focus:opacity-100 rounded" />
                  <p>{person.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ScreenWidthContainer>
    </section>
  );
}
