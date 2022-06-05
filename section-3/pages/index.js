import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </>
  );
}
