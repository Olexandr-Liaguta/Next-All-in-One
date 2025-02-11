"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>{error.message}</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
