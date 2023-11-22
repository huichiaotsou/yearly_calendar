import { useAppContext } from "../../hooks/use_contexts";

function Venue({ location, venue }) {
  return (
    <div className="venue_container">
      <div key={venue} className="venue">
        {venue}
      </div>
      <div className="location">{location}</div>
      <div className="venue_edit button is-light is-small">Edit</div>
      <div className="venue_delete delete">Delete</div>
    </div>
  );
}

export default function VenueList({ loc }) {
  const { venues } = useAppContext();
  const renderVenues = () => {
    if (loc === "All") {
      return Object.keys(venues).map((location) => (
        <div key={location}>
          {venues[location].map((venue) => (
            <Venue location={location} venue={venue} />
          ))}
        </div>
      ));
    } else if (venues[loc]) {
      return (
        <div>
          {venues[loc].map((venue) => (
            <Venue location={loc} venue={venue} />
          ))}
        </div>
      );
    } else {
      return <p>No venues found for {loc}</p>;
    }
  };

  return <div>{renderVenues()}</div>;
}
