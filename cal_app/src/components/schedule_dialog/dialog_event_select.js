import { useAppContext, useDialogContext } from "../../hooks/use_contexts";

const EventSelect = () => {
  const { events } = useAppContext();
  const { checkedEvent, setCheckedEvent } = useDialogContext();

  return (
    <select
      className="control schedule_selects"
      onChange={(e) => setCheckedEvent(e.target.value)}
      value={checkedEvent}
    >
      <option></option>
      {Object.entries(events).map(([category, events]) => (
        <optgroup key={category} label={category}>
          {events.map((event) => (
            <option key={event} value={event}>
              {event}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
};

export default EventSelect;
