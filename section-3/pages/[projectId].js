import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const { pathname, query } = useRouter();

  return (
    <>
      <h1>The Portfolio Project Page</h1>
      <h4>
        {pathname} : {JSON.stringify(query)}
      </h4>
    </>
  );
}
