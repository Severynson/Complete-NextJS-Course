import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

export default function EventDetailPage() {
  const { query } = useRouter();

  const eventId = query.eventId;
  const event = getEventById(eventId);

  if (!event)
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );

  const { title, date, description, location: address, image } = event;

  return (
    <>
      <EventSummary {...{ title }} />
      <EventLogistics {...{ date, address, image, imageAlt: title }} />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
}
