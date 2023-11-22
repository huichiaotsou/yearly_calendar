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
          <div className="venue_list_city_title tag is-light is-primary is-medium">
            {location}
          </div>
          <div>
            {venues[location].map((venue) => (
              <Venue
                key={`${location}-${venue}`}
                location={location}
                venue={venue}
              />
            ))}
          </div>
        </div>
      ));
    } else if (venues[loc]) {
      return (
        <div>
          <div className="venue_list_city_title tag is-light is-primary is-medium">
            {loc}
          </div>
          {venues[loc].map((venue) => (
            <Venue key={`${loc}-${venue}`} location={loc} venue={venue} />
          ))}
        </div>
      );
    } else {
      return <p>No venues found for {loc}</p>;
    }
  };

  return <div>{renderVenues()}</div>;
}
