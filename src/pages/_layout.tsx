import '../styles.css';

import type { ReactNode } from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  // const data = await getData();

  return (
    <div className="bg-pink-50 font-body font-light">
      <meta
        name="description"
        content={'Celebrate with Emily & Jake in Barcelona! June 20, 2026'}
      />
      <title>Emily & Jake</title>
      <link rel="icon" type="image/png" href={'/images/favicon.png'} />
      <Header />
      <main className="flex w-full flex-col items-center">{children}</main>
      <Footer />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
