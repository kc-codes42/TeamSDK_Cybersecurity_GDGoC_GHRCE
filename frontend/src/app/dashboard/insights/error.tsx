"use client";

export default function InsightsError({
  error,
}: {
  error: Error;
}) {
  return (
    <div className="p-4 text-red-400">
      Insights error: {error.message}
    </div>
  );
}
