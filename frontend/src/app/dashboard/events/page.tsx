import { getEvents } from "@/services/events";

export default async function EventsPage({
  searchParams,
}: {
  searchParams: {
    severity?: string;
    page?: string;
  };
}) {
  const severity = searchParams.severity;
  const page = Number(searchParams.page || 1);

  const events = await getEvents({
    severity,
    page,
    limit: 10,
  });

  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold">Events</h1>

      <div className="flex gap-2 text-sm">
        <a href="/dashboard/events">All</a>
        <a href="/dashboard/events?severity=low">Low</a>
        <a href="/dashboard/events?severity=medium">Medium</a>
        <a href="/dashboard/events?severity=high">High</a>
        <a href="/dashboard/events?severity=critical">Critical</a>
      </div>

      <ul className="space-y-1">
        {events.map((e) => (
          <li
            key={e.id}
            className="border border-white/10 p-2 rounded"
          >
            <div>{e.type}</div>
            <div className="text-sm opacity-70">
              {e.severity} · {e.source}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 text-sm">
        <a
          href={`/dashboard/events?page=${page - 1}`}
          aria-disabled={page <= 1}
        >
          Prev
        </a>
        <span>Page {page}</span>
        <a
          href={`/dashboard/events?page=${page + 1}`}
        >
          Next
        </a>
      </div>
    </div>
  );
}
