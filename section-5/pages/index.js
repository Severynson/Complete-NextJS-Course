import fs from "fs/promises";
import Link from "next/link";
import path from "path";

function HomePage({ products }) {
  return (
    <ul>
      {products.map((product) => {
        const { id, title } = product;
        return (
          <li key={id}>
            <Link href={"/products/" + id}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export async function getStaticProps(context) {
  console.log("--- (Re)generation");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) return { redirect: { destination: "/no-data" } };

  if (!data.products.length) return { notFound: false };

  return {
    props: { products: data.products },
    // {
    //   products: [{ id: "p1", title: "Product 1" }],
    // },
    revalidate: 10,
    // notFound: true,
  };
}

export default HomePage;
