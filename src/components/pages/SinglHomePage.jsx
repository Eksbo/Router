import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const SiglHomePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  async function fechPosts(id) {
    let content;
    let result = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}  `
    )
    content = await result.json();
    // console.log(content);
    setPost(content);
  }
  useEffect(() => {
    fechPosts(id);
  }, [id]);
  console.log(post);
  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <label>
            <h4>completed</h4>
            <input
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "40px",
                fontSize: "24px",
              }}
              type="checkbox"
              checked={post.completed}
            />
          </label>
        </>
      )}
    </div>
  );
};
