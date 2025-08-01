/**
 * Design based on
 * https://kellyryann.com/portfolio
 * https://dribbble.com/shots/22138719-Wedding-Photography-Portfolio-Website
 */

export default async function RootElement({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body data-version="1.0">{children}</body>
    </html>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
