import { SecurityEvent } from "@/lib/types/security";

export function aggregateBySeverity(events: SecurityEvent[]) {
  const map = {
    low: 0,
    medium: 0,
    high: 0,
    critical: 0,
  };

  for (const e of events) {
    map[e.severity]++;
  }

  return [
    { level: "Low", count: map.low },
    { level: "Medium", count: map.medium },
    { level: "High", count: map.high },
    { level: "Critical", count: map.critical },
  ];
}
