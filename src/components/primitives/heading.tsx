import clsx from 'clsx';
import { createElement } from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
}
export const Heading = ({
  children,
  className,
  level,
  size,
  ...props
}: HeadingProps) => {
  const classes = clsx(className, `font-heading`);

  return createElement(
    `h${level}`,
    {
      className: classes,
      style: {
        fontSize: `var(--text-${size})`,
      },
      ...props,
    },
    children,
  );
};
