import EventItem from "./event-item";
import classes from "./events-list.module.css";

export default function EventsList({ items }) {
  const { list } = classes;

  return (
    <ul className={list}>
      {items.map((itemProps) => (
        <EventItem key={itemProps.id} {...itemProps} />
      ))}
    </ul>
  );
}
