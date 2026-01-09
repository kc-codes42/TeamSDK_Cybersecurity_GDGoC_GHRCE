import { getEvents } from "@/services/events";
import { aggregateBySeverity } from "@/lib/utils/aggregate";
import SeverityChart from "@/components/charts/SeverityChart";

export default async function DashboardPage() {
  const events = await getEvents();
  const severityData = aggregateBySeverity(events);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <SeverityChart data={severityData} />
    </div>
  );
}
