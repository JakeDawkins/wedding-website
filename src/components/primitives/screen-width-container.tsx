import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export function ScreenWidthContainer({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={clsx(
        'mx-auto w-full lg:w-[95%] max-w-[1120px] sm:px-4 md:px-6 lg:px-0',
        className,
      )}
    >
      {children}
    </div>
  );
}
