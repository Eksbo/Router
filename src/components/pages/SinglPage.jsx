import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const SiglPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  async function fechPosts(id) {
    let content;
    let result = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    content = await result.json();
    // console.log(content);
    setPost(content);
  }
  useEffect(() => {
    fechPosts(id)
  }, [id]);
console.log(post);
  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.completed}</p>
        </>
      )}
    </div>
  );
};
