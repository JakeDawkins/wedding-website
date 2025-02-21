'use client';

import { Duration, formatDuration, intervalToDuration } from 'date-fns';
import { useEffect, useState } from 'react';

const eventDateTime = new Date('2026-06-20T19:00:00Z');

export function CountdownLarge() {
  const [duration, setDuration] = useState<Duration | null>(null);
  useEffect(() => {
    const getDuration = () => {
      const duration = intervalToDuration({
        start: new Date(),
        end: eventDateTime,
      });
      return duration;
    };
    setDuration(getDuration());
    const interval = setInterval(() => {
      const duration = getDuration();
      setDuration(duration);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const durationSegments = duration
    ? formatDuration(duration, {
        delimiter: ', ',
        zero: true,
      }).split(', ')
    : null;

  const splitSegments = durationSegments?.map((segment) => {
    return segment.split(' ');
  });

  if (!splitSegments) return null;

  return (
    <div className="flex flex-row gap-4 h-32 items-center justify-center w-full">
      {splitSegments.slice(0, 4).map((segment, i) => {
        return (
          <div key={i}>
            <span className="font-heading text-xl">{segment[0]}</span>{' '}
            <span className="font-body">{segment[1]}</span>
          </div>
        );
      })}
    </div>
  );
}
