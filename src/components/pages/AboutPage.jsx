import './page.css'
import { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
export const AboutPage = ()=>{
  const[posts , setPosts]=useState([])

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.tipicode.com/posts')
     
  // })
  useEffect(() => {
    fechPosts();
  }, []);
  async function fechPosts() {
    let content;
    let result = await fetch("https://jsonplaceholder.typicode.com/todos");
    content = await result.json();
    setPosts(content);
  }
  
    return(
        <><div className='block'>
          <h1>About news</h1>
       {
        posts.map((post)=>{
             return(
              <Link 
              style={{
                color: 'black',
                textDecoration: "none",
                marginLeft: "40px",
                fontSize: "16px",
            }}
              key={post.id}
              to={`/about/${post.id}`}
              >
              <li>{post.title}</li>
              </Link>
             )
        })
       }
        </div>
        </>
    )
}

