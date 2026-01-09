"use client";

export default function EventsError({
  error,
}: {
  error: Error;
}) {
  return (
    <div className="p-4 text-red-400">
      Events error: {error.message}
    </div>
  );
}
