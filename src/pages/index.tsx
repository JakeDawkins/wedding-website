import { SaveTheDatePage } from '../components/save-the-date-page';

export default async function Home() {
  return <SaveTheDatePage />;
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
