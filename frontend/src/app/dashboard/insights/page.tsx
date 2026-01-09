import { getInsights } from "@/services/insights";
import ConfidenceBar from "@/components/charts/ConfidenceBar";

export default async function InsightsPage() {
  const insights = await getInsights();

  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold">AI Insights</h1>

      <ul className="space-y-2">
        {insights.map((i) => (
          <li
            key={i.id}
            className="border border-white/10 p-3 rounded space-y-2"
          >
            <div>{i.summary}</div>

            <div className="text-sm opacity-70">
              Confidence: {(i.confidence * 100).toFixed(1)}%
            </div>

            <ConfidenceBar value={i.confidence} />
          </li>
        ))}
      </ul>
    </div>
  );
}
