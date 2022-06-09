import fs from "fs/promises";
import path from "path";

export default function ProductDetailPage({ loadedProduct }) {
  //   const { title, description } = loadedProduct; - doesnt work with fallback: true;
  // other good solution - set fallback to 'blocking';

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  return JSON.parse(jsonData);
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map(({ id }) => id);

  const pathsWithParams = ids.map((id) => ({
    params: { pid: id },
  }));

  return {
    paths: pathsWithParams,
    // [
    //   { params: { pid: "p1" } },
    //   { params: { pid: "p2" } },
    //   { params: { pid: "p3" } },
    // ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) return { notFound: true };

  return {
    props: {
      loadedProduct: product,
    },
  };
}
