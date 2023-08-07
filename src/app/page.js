'use client';
import { useState, useEffect } from 'react';

export default function Home({ data }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    fetch('/api/time')
      .then((res) => res.json())
      .then((json) => setTime(new Date(json.time)))
      .catch((error) => console.error('Error fetching time:', error));
  }, []);
  console.log(time);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={''}>
        Welcome to{' '}
        <a href="https://nextjs.org">
          Next.js!{' '}
          {time &&
            `The time is ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}
        </a>
      </h1>
    </main>
  );
}
