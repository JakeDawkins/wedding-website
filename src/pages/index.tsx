import HomePage from '../components/home-page';
import { SaveTheDatePage } from '../components/save-the-date-page';

export default async function Home() {
  return <HomePage />;
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
