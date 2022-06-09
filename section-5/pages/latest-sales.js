import { useEffect, useState } from "react";
// import useSWR from "swr";

export default function LatestSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // const { data, error } = useSWR("(link)");
  // if (error) return <p>Failed to load</p>;
  // if (!data) return <p>Loading...</p>;

  ////////////////////// STANDARD WAY //////////////////////////////////

  useEffect(() => {
    setIsLoading(true);
    // imitation of the request sending...
    // fetch().then((response) => response.json()).then(...)...;
    const pseudoFetchedData = {
      s1: {
        username: "Severyn",
        volume: 100,
      },
      s2: {
        username: "Max",
        volume: 50,
      },
    };

    const transformedSales = [];

    for (const key in pseudoFetchedData) {
      transformedSales.push({
        id: key,
        username: pseudoFetchedData[key].username,
        volume: pseudoFetchedData[key].volume,
      });
    }

    setSales(transformedSales);
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (!sales) return <p>No data yet</p>;

  return (
    <ul>
      {sales.map(({ id, username, volume }) => (
        <li key={id}>
          {username} - ${volume}
        </li>
      ))}
    </ul>
  );
}
