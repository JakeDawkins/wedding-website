import { Link } from 'waku';
import { Heading } from '../components/primitives/heading';
import { ScreenWidthContainer } from '../components/primitives/screen-width-container';

export default async function AboutPage() {
  return (
    <div className="">
      <title>Our Story | Emily & Jake</title>
      <ScreenWidthContainer className="flex flex-col gap-10 items-center">
        <Heading level={1} size="4xl">
          Our Story
        </Heading>
        <section className="flex flex-col lg:flex-row gap-10 items-center">
          <img
            className="aspect-square bg-pink-100 flex-1 object-cover overflow-hidden lg:rounded max-w-full"
            src="/images/story-1.jpeg"
          />
          <div className="flex-1 px-6 lg:px-0">
            <p className="text-pink-500">January 2022</p>
            <Heading level={3} size="xl">
              We meet
            </Heading>
            <p>
              Emily and Jake met in 2022 as many couples do, online. In an
              effort to weed out people who were not serious about dating, Emily
              added a comment on her dating profile that stated the best way to
              ask her out was by submitting a resume, cover letter, and three
              references. Jake, amused by the ask, spent two hours on a Sunday
              writing and editing the perfect dating resume, cover letter, and
              collecting quotes from friends to use as references. While
              Jake&apos;s resume was impressive, Emily also appreciated
              Jake&apos;s ability to commit to the bit, and invited him for a
              formal “in-person interview” at a local bar.
            </p>
          </div>
        </section>

        <div className="hidden lg:flex w-full items-center justify-center py-10">
          <div className="w-[100px] border-t-1 border-t-pink" />
        </div>

        <section className="flex flex-col-reverse lg:flex-row gap-10 items-center">
          <div className="flex-1 px-6 lg:px-0">
            <p className="text-pink-500">January 2022</p>
            <Heading level={3} size="xl">
              The First Date
            </Heading>
            <p>
              A few days later, Jake and Emily met for drinks in New York City
              at The Owl&apos;s Tail, a cocktail bar in the Upper West Side.
              Over cocktails, Emily and Jake began to get to know each other,
              appreciated their similar senses of humor, and found themselves
              laughing the entire evening. Their date went so well that while
              Jake used the restroom, a woman at the next table leaned over to
              Emily to say that of all the first dates they had seen at this
              bar, this one seemed to be going the best.
            </p>
          </div>
          <img
            className="aspect-square bg-pink-100 flex-1 object-cover overflow-hidden lg:rounded"
            src="/images/story-2.jpeg"
          />
        </section>

        <div className="hidden lg:flex w-full items-center justify-center py-10">
          <div className="w-[100px] border-t-1 border-t-pink" />
        </div>
        <section className="flex flex-col lg:flex-row gap-10 items-center">
          <img
            className="aspect-square bg-pink-100 flex-1 object-cover overflow-hidden lg:rounded"
            src="/images/story-3.jpeg"
          />
          <div className="flex-1 px-6 lg:px-0">
            <p className="text-pink-500">May 2024</p>
            <Heading level={3} size="xl">
              Seeing the world together
            </Heading>
            <p>
              Throughout their relationship, Emily and Jake began to travel more
              together, and realized how much they both loved it. Traveling
              brought them closer as a couple, and inspired them to plan a year
              long trip together where they could see the world together. After
              months of planning, they set off on their adventure, and have
              visited 10 countries!
            </p>
          </div>
        </section>

        <div className="hidden lg:flex w-full items-center justify-center py-10">
          <div className="w-[100px] border-t-1 border-t-pink" />
        </div>

        <section className="flex flex-col-reverse lg:flex-row gap-10 items-center">
          <div className="flex-1 px-6 lg:px-0">
            <p className="text-pink-500">January 22, 2025</p>
            <Heading level={3} size="xl">
              The proposal
            </Heading>
            <p>
              While in the Philippines, Jake and Emily had booked a luxury hotel
              for three nights to celebrate their three year anniversary. After
              Jake did not propose during a beautiful sunset dinner on the beach
              on their anniversary, Emily figured that a proposal would not be
              happening on this trip. The next night, however, as they got to
              their dinner under a pergola overlooking the beach, Emily heard a
              familiar song. Jake looked at Emily, and said there was something
              he had not told her about this dinner tonight. It quickly dawned
              on Emily that this was the night, as they walked up the stairs and
              saw a large Will You Marry Me sign made out of flowers. Jake
              proposed to Emily, who through her tears of joy, said yes!
            </p>
          </div>
          <img
            className="aspect-square bg-pink-100 flex-1 object-cover overflow-hidden lg:rounded"
            src="/images/story-4.jpeg"
          />
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
