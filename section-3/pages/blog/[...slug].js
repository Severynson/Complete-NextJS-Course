import { useRouter } from "next/router";

export default function BlogPostsPage() {
  const { query } = useRouter();

  return (
    <>
      <h1>The Blog Posts</h1>
      <h4>{JSON.stringify(query)}</h4>
    </>
  );
}
