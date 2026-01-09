export default function ConfidenceBar({
  value,
}: {
  value: number;
}) {
  const width = Math.min(100, Math.max(0, value * 100));

  return (
    <div className="w-full h-2 bg-white/10">
      <div
        className="h-2 bg-accent"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
