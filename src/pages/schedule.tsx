import { Link } from 'waku';
import { Heading } from '../components/primitives/heading';
import { ScreenWidthContainer } from '../components/primitives/screen-width-container';

// const itinerary = [
//   // {
//   //   date: 'Thursday, June 18th',
//   //   events: [
//   //     {
//   //       time: 'TBD',
//   //       title: 'Beach Day',
//   //       description:
//   //         'Beach day for any early arrivals who want to relax and enjoy the beach!',
//   //       attire: 'Beach attire',
//   //       location: 'TBD',
//   //     },
//   //   ],
//   // },
//   {
//     date: 'Friday, June 19th',
//     events: [
//       {
//         time: '6 - 9PM',
//         title: 'Welcome Dinner',
//         attire: 'Beach casual',
//         description:
//           'Please join us for a welcome dinner the night before our wedding, where we will enjoy some Spanish food and wine! This invitation is open to our guests, as well as family members that have traveled with you for the weekend.',
//         location: 'TBD',
//       },
//     ],
//   },
//   {
//     date: 'Saturday, June 20th',
//     events: [
//       {
//         time: '4:30-11PM',
//         title: 'Wedding Ceremony & Reception',
//         description:
//           'Please be advised that there is gravel as well as uneven pavement on some of the grounds. Shoes with a low and wide heel are recommended for anyone planning to wear a heeled shoe. Celebrate our love with us on the beautiful grounds of La Baronia! Bus pick up from the hotel will be at 3:15pm. Enjoy a welcome drink while you take in the views before finding your seat for our ceremony at 5:00pm. Our short ceremony will be followed by a cocktail hour, dinner, and dancing! Please note that the wedding day events are by invitation only. Information about provided transportation and alternative options can be found here.',
//         attire: 'Festive',
//         location: 'La Baronia',
//       },
//       // {
//       //   time: '4PM',
//       //   title: 'Welcome Drinks',
//       //   description: 'Welcome drinks at the wedding venue',
//       // },
//       // {
//       //   time: '5PM',
//       //   title: 'Ceremony',
//       //   description: 'Ceremony begins',
//       // },
//       // {
//       //   time: '5:30PM',
//       //   title: 'Cocktail Hour',
//       //   description: 'Cocktail hour begins',
//       // },
//       // {
//       //   time: '7PM',
//       //   title: 'Dinner',
//       //   description: 'Dinner begins',
//       // },
//       // {
//       //   time: '9:30PM',
//       //   title: 'Dinner',
//       //   description: 'Dinner begins',
//       // },
//     ],
//   },
//   {
//     date: 'Sunday, June 21st',
//     events: [
//       {
//         time: '10AM',
//         title: 'Brunch',
//         description: 'Brunch at the hotel',
//         location: 'TBD',
//       },
//     ],
//   },
// ];

export default async function AboutPage() {
  return (
    <div className="w-full">
      <title>Schedule | Emily & Jake</title>

      <ScreenWidthContainer className="flex flex-col gap-10 items-start px-6">
        <Heading level={1} size="4xl" className="text-center w-full">
          Schedule
        </Heading>

        {/* <div className="flex flex-col gap-4">
          <p></p>
        </div> */}

        {/* {itinerary.map(({ date, events }) => {
          return (
            <section className="flex flex-col items-start w-full gap-4">
              <Heading className="text-start" level={2} size="2xl">
                {date}
              </Heading>
              {events.map((event) => (
                <div className="flex flex-col">
                  <div
                    key={event.time}
                    className="w-full border-l-2 border-l-black pl-2"
                  >
                    <p>{event.time}</p>
                    <p>
                      {event.title}
                      {event?.location && `(${event.location})`}
                    </p>
                    <p>Attire: {event.attire}</p>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </section>
          );
        })} */}

        {/* <section className="flex flex-col items-start w-full border border-red-700">
          <Heading className="text-start" level={2} size="2xl">
            {itinerary?.[1]?.date}
          </Heading>
          {itinerary?.[1]?.events.map((event) => (
            <div
              key={event.time}
              className="w-full border-b border-b-black my-4 pb-4"
            >
              <p>{event.time}</p>
              <p>{event.title}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </section> */}

        <section className="flex flex-col items-start w-full gap-4">
          <Heading className="text-start" level={2} size="2xl">
            Friday, June 19th
          </Heading>

          <div className="flex flex-col">
            <div className="w-full border-l-2 border-l-black pl-2">
              <p className="font-medium">Welcome Dinner</p>
              <p>6 - 9 PM, Location TBD</p>
              <p>Attire: Beach casual</p>
              <p className="mt-4">
                Please join us for a welcome dinner the night before our
                wedding, where we will enjoy some Spanish food and wine! This
                invitation is open to our guests, as well as family members that
                have traveled with you for the weekend.
              </p>
            </div>
          </div>
        </section>

        {/* Saturday */}
        <section className="flex flex-col items-start w-full gap-4">
          <Heading className="text-start" level={2} size="2xl">
            Saturday, June 20th
          </Heading>

          <div className="flex flex-col">
            <div className="w-full border-l-2 border-l-black pl-2">
              <p className="font-medium">Wedding Ceremony & Reception</p>
              <p>4:30 PM - 12:30 AM, La Baronia</p>
              <p>Attire: Festive</p>
              <p className="mt-4">
                Celebrate our love with us on the beautiful grounds of La
                Baronia! Bus pick up from the hotel will be at{' '}
                <span className="underline">3:15pm</span>. Enjoy a welcome drink
                while you take in the views before finding your seat for our
                ceremony at 5:00pm. Our short ceremony will be followed by a
                cocktail hour, dinner, and dancing!{' '}
                <span className="underline">
                  Please note that the wedding day events are by invitation only
                </span>
                . Information about provided transportation and alternative
                options can be found{' '}
                <Link to="/travel#transportation" className="underline">
                  here
                </Link>
                .
              </p>
            </div>
            <div className="rounded-lg bg-pink-100 p-4 flex-1 gap-8 items-center mt-6">
              <p className="">
                Please be advised that there is gravel as well as uneven
                pavement on some of the grounds. Shoes with a low and wide heel
                are recommended for anyone planning to wear a heeled shoe.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-start w-full gap-4">
          <Heading className="text-start" level={2} size="2xl">
            Sunday, June 21st
          </Heading>

          <div className="flex flex-col">
            <div className="w-full border-l-2 border-l-black pl-2">
              <p className="font-medium">Brunch</p>
              <p>10 AM - 12:30 PM, Location TBD</p>
              <p>Attire: Comfortable</p>
              <p className="mt-4">
                Recover from a night of dancing and fun with us at brunch!
                Brunch is open to our wedding guests, as well as family members
                that have traveled with you for the weekend.
              </p>
            </div>
          </div>
        </section>
      </ScreenWidthContainer>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
