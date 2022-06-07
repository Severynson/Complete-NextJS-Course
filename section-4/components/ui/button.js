import Link from "next/link";
import classes from "./button.module.css";

export default function Button({ children, link, onClick }) {
  const { btn } = classes;

  if (link) {
    return (
      <Link href={link}>
        <a className={btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={btn} {...{ onClick }}>
      {children}
    </button>
  );
}
