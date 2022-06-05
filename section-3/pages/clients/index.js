import Link from "next/link";

export default function ClientPage() {
  return (
    <>
      <h1>The Client Page</h1>
      <ul>
        {[
          { id: "e1", user: "Severyn" },
          { id: "e2", user: "Maximilian" },
        ].map(({ id, user }) => (
          <li key={id}>
            <Link
              // href={`clients/${user.toLowerCase()}`}
              href={{ pathname: "/clients/[id]", query: { id } }}
            >
              {user}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
