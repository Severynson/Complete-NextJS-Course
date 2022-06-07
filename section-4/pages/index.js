import EventsList from "../components/events/events-list";
import { getFeaturedEvents } from "../dummy-data";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <EventsList items={featuredEvents} />
    </>
  );
}
