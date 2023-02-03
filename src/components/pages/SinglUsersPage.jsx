// import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export const SiglUsersPage = (props) => {

  const  id = props.id

  const [post, setPost] = useState([]);
  async function fechPosts(id) {
    let content;
    let result = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}/todos`
    )
    content = await result.json();

    setPost(content);
    console.log(content);
    console.log(post);


  }
  useEffect(() => {
    fechPosts(id);
  } );

  return (
    <div>
      <h2>{props.obj.name}</h2>
      <ul>
        {post.map((element)=>{
          return(
            <li>{element.title}</li>
          )
        })}
      </ul>
   
   
    </div>
  );
};
