import { useLoaderData } from "react-router-dom";

export const Post = () => {
  const { post } = useLoaderData();


  return (
    <section className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </section>
  );
};

//hago la llamada a los detalles del post, usando el params
export const loaderPost = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return {
    post,
  };
};
