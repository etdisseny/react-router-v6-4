import { Link, useLoaderData } from "react-router-dom"; //importamos este hook de react-router-dom

export const Blog = () => {
  const { posts } = useLoaderData(); //con este hook, recuperamos los posts
  console.log(posts.lenght);
  return (
    <section className="container">
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))
        ) : (
          <p>Posts not found</p>
        )}
      </ul>
    </section>
  );
};

//esto lo podríamos hacer en un archivo externo
//con esto evitamos el useEfect, suamos el hook personalizado de react-router-dom
export const loaderBlogs = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return {
    posts,
  };
};
