import { useRouter } from "next/router";

export default function SelectedClientProjectPage() {
  const { pathname, query } = useRouter();

  return (
    <>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
      <p>
        Pathname: <strong>{pathname}</strong>
      </p>
      <p>
        Query: <strong>{JSON.stringify(query)}</strong>
      </p>
    </>
  );
}
