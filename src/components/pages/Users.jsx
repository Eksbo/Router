import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { SiglUsersPage } from "./SinglUsersPage";

export const Users = () => {
  const [users, setUsers] = useState([]);
  //   const [info, setInfo] = useState({});
  useEffect(() => {
    fechPosts();
  }, []);
  async function fechPosts() {
    let content;
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    content = await result.json();
    // console.log(content);
    setUsers(content);
  }

  return (
    <>
      <div
        style={{
          display: "flex"
        }}
      >
        <div>
          <h2>Users</h2>
          <ul>
            {users.map((user) => {
              return (
                <li>
                  <Link
                    to={user.username}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      marginLeft: "40px",
                      fontSize: "16px"
                    }}
                  >
                    {" "}
                    {user.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <Routes>
            {users.map((user) => {
              return (
                <>
                  <Route
                    path={user.username}
                    element={<SiglUsersPage obj={user} id={user.id} />}
                  />
                  ;
                </>
              );
            })}
          </Routes>
        </div>
      </div>
    </>
  );
};
