import { apiFetch } from "./api";
import { SecurityEvent } from "@/lib/types/security";

export function getEvents(params?: {
  severity?: string;
  page?: number;
  limit?: number;
}) {
  const query = new URLSearchParams();

  if (params?.severity) query.set("severity", params.severity);
  if (params?.page) query.set("page", String(params.page));
  if (params?.limit) query.set("limit", String(params.limit));

  const qs = query.toString();
  return apiFetch<SecurityEvent[]>(`/events${qs ? `?${qs}` : ""}`);
}
