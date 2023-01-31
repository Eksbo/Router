import { useState  ,useEffect} from "react" 
import { Link } from "react-router-dom";

export const HomePage = ()=>{
    const[todos,setTodos]=useState([])
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
    return(
        <>
        {todos.map((todo)=>{
            return (
                <Link 
                style={{
                  color: 'black',
                  textDecoration: "none",
                  marginLeft: "40px",
                  fontSize: "16px",
              }}
                key={todo.id}
                to={`home/${todo.id}`}
                >
                <li>{todo.title}</li>
                </Link>

            )
        })}
        </>
        


     
    
           )

    }