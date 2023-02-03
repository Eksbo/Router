import { useState, useEffect } from "react";
import { Link ,useSearchParams } from 'react-router-dom'

export const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const[SearchParams , setSearchParams]=useSearchParams()

  const todoQery =SearchParams.get('post') || '' ;
  const latest =SearchParams.has('latest')
  const startForm = latest;
  const handleSubmit = (event)=>{
    event.preventDefault()
    const form = event.target
    const qery =form.search.value
    const isLasted = form.latest.checked
    const params={}
    if(qery.length) { params.post=qery}
    if(isLasted) {params.latest=true}

    
    setSearchParams(params)
  }

  useEffect(() => {
    fechPosts();
  }, []);
  async function fechPosts() {
    let content;
    let result = await fetch("https://jsonplaceholder.typicode.com/todos");
    content = await result.json();
    // console.log(content);
    setTodos(content);
  }
  return (
    <>
      <h1
        style={{
          marginLeft :"40px"
        }}
      >Todos All</h1>
      <form
      onSubmit={handleSubmit}
      >
        < input type="search" name="search" 
        style={{
          marginLeft :"40px"
        }}
        
        />
        <label
        style={{
          margin:'0 20px'
        }}>
          Completed
          <input type="checkbox" name="latest"  />
        </label>
        <input type="submit" value="search" />

      </form>
      <ul>
        {todos.filter(
          todo=>todo.title.includes(todoQery) && todo.completed === startForm
        ).map((todo) => {
          return (
            <Link
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "40px",
                fontSize: "16px",
              }}
              key={todo.id}
              to={`/${todo.id}`}
            >
              <li>{todo.title}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};
