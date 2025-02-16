import { Link } from 'waku';

export default async function AboutPage() {
  return (
    <div>
      <title>Travel | Emily & Jake</title>
      <h1 className="text-4xl font-bold tracking-tight">Travel</h1>

      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
