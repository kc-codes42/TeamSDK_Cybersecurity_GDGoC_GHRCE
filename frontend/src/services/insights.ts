import { apiFetch } from "./api";
import { AIInsight } from "@/lib/types/security";

export function getInsights() {
  return apiFetch<AIInsight[]>("/insights");
}
