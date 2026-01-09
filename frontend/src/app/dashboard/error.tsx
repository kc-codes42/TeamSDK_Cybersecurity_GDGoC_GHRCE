"use client";

export default function DashboardError({
  error,
}: {
  error: Error;
}) {
  return (
    <div className="p-4 text-red-400">
      Dashboard error: {error.message}
    </div>
  );
}
