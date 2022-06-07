import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";
import classes from "./event-item.module.css";

export default function EventItem({ title, image, date, location, id }) {
  const { item, content, summary, dateStyle, address, actions, icon } = classes;

  date = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  image = `/${image}`;
  location = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={item}>
      <img src={image} alt={title} />
      <div className={content}>
        <div className={summary}>
          <h2>{title}</h2>
          <div className={dateStyle}>
            <DateIcon />
            <time>{date}</time>
          </div>
          <div className={address}>
            <AddressIcon />
            <address>{location}</address>
          </div>
        </div>
        <div className={actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
