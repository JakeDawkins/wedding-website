'use client';
import { Link } from 'waku';
import { Heading } from './primitives/heading';
import { ScreenWidthContainer } from './primitives/screen-width-container';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

const questions = [
  {
    question: 'What is the dress code?',
    answer: `Festive. A cocktail dress code, but feel free to have a little more fun!
            Wear your floral patterns, bright colors and fun accessories. No shorts,
            no jeans, no t-shirts, and no open-toed shoes for men.`,
  },
  {
    question: 'Are children welcome?',
    answer: [
      `We know many people will be making this trip a family vacation, but
            the wedding and reception are adults-only events. The welcome dinner
            and brunch are open to families, but we ask that you make
            arrangements for your children for the wedding and reception.`,
      `We know this is challenging to arrange. You may consider bringing
            other family members on the trip or coordinating with other guests
            and their older children to watch your children for a few hours
            during the events on Saturday. If you need help figuring this out,
            please let us know!`,
    ],
  },
  {
    question: 'Will there be any other events or activities?',
    answer: `Yes! We will have a welcome dinner on Friday night (open to
            everyone, including families) and a brunch on Sunday morning. We are
            also planning a couple optional activities and excursions around the
            city for Thursday or Friday, but that will depend on availability
            and when everyone will be arriving. We will share more details as we
            get closer to the wedding.`,
  },
  {
    question: 'When should I plan to arrive?',
    answer: `We recommend arriving on Thursday (or earlier!). Jet lag is real, and
            we want you to be well rested for the wedding, since it will probably 
            be a pretty late night (the sun will set close to 10PM!) If you're planning on
            also turning this trip into a vacation, we recommend taking your 
            vacation time prior to the wedding, so you're well adjusted to the 
            time change!`,
    link: {
      title: '8 Tips to get over jet lag',
      url: 'https://www.healthline.com/health/healthy-sleep/how-to-get-over-jet-lag#tips',
    },
  },
  {
    question: 'When should I plan to depart?',
    answer: `The wedding will last until later Saturday night. Most flights back 
            to the US from Europe will be in the morning, so we recommend giving
            yourself an extra day to relax and recharge after the wedding and
            flying back on Monday. For those staying, we will also have a brunch
            planned for Sunday morning.`,
    link: {
      title: '8 Tips to get over jet lag',
      url: 'https://www.healthline.com/health/healthy-sleep/how-to-get-over-jet-lag#tips',
    },
  },
  {
    question: 'What will the weather be like?',
    answer: `The weather in Barcelona in June is typically warm and sunny, with
            temperatures ranging from the mid-60s to the mid-70s Fahrenheit
            (18-25 degrees Celsius). It's a great time to visit the city! Make
            sure to pack for warm weather in case it's a little extra hot. For
            more weather data, you can reference the following website:`,
    link: {
      title: 'Weather in Barcelona',
      url: 'https://weatherspark.com/y/47213/Average-Weather-in-Barcelona-Spain-Year-Round',
    },
  },
  {
    question: 'Will the ceremony and reception be indoors or outdoors?',
    answer: `The ceremony and reception will be outdoors at the venue. In case of
            rain or extremely warm weather, we will move events indoors.`,
  },
  {
    question: 'How will we get around?',
    answer: `Transportation to the hotel from the airport and to/from the venue
            will be provided. Otherwise, for other activities in the city, we
            recommend using the metro (which is very safe and easy to use) or
            Uber. Taxis are also available and accept credit cards.`,
  },
  {
    question: 'Do you have a registry?',
    answer: `No! We are not asking for gifts. We already have everything we need,
            and we are very lucky to have you attend our wedding and we are
            excited to celebrate with you! Your presence is our present.`,
  },
];

export function HomeFAQ() {
  return (
    <section className="w-full bg-pink" id="barcelona">
      <ScreenWidthContainer className="flex flex-col w-full gap-6 items-center py-10 px-6">
        <Heading level={2} size="2xl" className="text-center col-span-1 w-full">
          Frequently asked questions
        </Heading>
        {questions.map((question, index) => (
          <Disclosure
            as="div"
            className="rounded border bg-pink-100 w-full"
            key={`faq-${index}`}
          >
            <DisclosureButton className="group text-start p-4 w-full h-full flex gap-6 items-center justify-between text-base cursor-pointer">
              {question.question}
              <svg
                className="w-6 h-6 group-data-[open]:rotate-180 transition-transform duration-200 ease-out flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </DisclosureButton>
            <DisclosurePanel className="p-6 flex flex-col gap-4 ">
              {Array.isArray(question.answer) ? (
                question.answer.map((answer, index) => (
                  <p key={`answer-${index}`}>{answer}</p>
                ))
              ) : (
                <p>{question.answer}</p>
              )}
              {question.link && (
                <a
                  href={question.link.url}
                  className="underline"
                  target="_blank"
                >
                  {question.link.title}
                </a>
              )}
            </DisclosurePanel>
          </Disclosure>
        ))}

        <Heading level={4} size="lg">
          Still have questions?
        </Heading>
        {/* <p className="text-base">
          We know there will be plenty more questions as the day approaches! For
          travel and accommodation questions, see the{' '}
          <Link to="/travel">Travel</Link> page. For any other questions, please
          contact us at{' '}
          <a className="underline" href="mailto:dawkinswedding26@gmail.com">
            dawkinswedding26@gmail.com
          </a>
          .
        </p> */}
        <p className="text-base">
          We're still very early in the planning process, so we will have a lot
          more information as time goes on, but if you have any pressing
          concerns in the meantime, please let us know by contacting us at{' '}
          <a className="underline" href="mailto:dawkinswedding26@gmail.com">
            dawkinswedding26@gmail.com
          </a>
          .
        </p>
      </ScreenWidthContainer>
    </section>
  );
}
