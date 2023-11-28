import { useAppContext } from "../../hooks/use_contexts";

function Event({ eventType, event }) {
  return (
    <div className="event_container">
      <div key={event} className="event">
        {event}
      </div>
      {/* <div className="event_type">{eventType}</div> */}
      <div className="event_edit button is-light is-small">Edit</div>
      <div className="event_delete delete">Delete</div>
    </div>
  );
}

export default function EventList({ eventType }) {
  const { events } = useAppContext();

  const renderEvents = () => {
    if (eventType === "All") {
      return Object.keys(events).map((eventType) => (
        <div key={eventType}>
          <div className="tag is-light is-primary is-medium">{eventType}</div>
          <div>
            {events[eventType].map((event) => (
              <Event
                key={`${eventType}-${event}`}
                eventType={eventType}
                event={event}
              />
            ))}
          </div>
        </div>
      ));
    }
    return (
      <div>
        {events[eventType].map((event) => (
          <Event
            key={`${eventType}-${event}`}
            eventType={eventType}
            event={event}
          />
        ))}
      </div>
    );
  };

  return <div>{renderEvents()}</div>;
}
