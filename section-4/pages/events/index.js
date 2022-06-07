import { useRouter } from "next/router";
import EventsList from "../../components/events/events-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

export default function AllEventsPage() {
  const events = getAllEvents();
  const { push } = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}/`;
    push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsList items={events} />
    </>
  );
}
