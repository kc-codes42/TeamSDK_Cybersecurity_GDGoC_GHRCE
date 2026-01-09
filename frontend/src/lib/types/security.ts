export interface SecurityEvent {
  id: string;
  type: string;
  severity: "low" | "medium" | "high" | "critical";
  source: string;
  timestamp: string;
}

export interface AIInsight {
  id: string;
  summary: string;
  confidence: number;
  createdAt: string;
}
