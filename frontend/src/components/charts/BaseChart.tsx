"use client";

import { ResponsiveContainer } from "recharts";

export default function BaseChart({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-64 border border-white/10 p-2">
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}
