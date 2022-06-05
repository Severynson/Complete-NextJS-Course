import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const { push } = useRouter();

  function loadProjectHandler() {
    push(
      // "/clients/max/projecta"
      {
        pathname: "/clients/[id]/[clientprojectid]",
        query: { id: "severyn", clientprojectid: "projecta" },
      }
    );
  }

  return (
    <>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </>
  );
}
