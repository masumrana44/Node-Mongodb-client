import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (user) => {
    const agree = window.confirm(
      `Are you Sure want to delete user: ${user?.name}`
    );
    if (agree) {
      fetch(`http://localhost:5000/users/${user?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // if(data?.acknowledged){
          //     alert("User Delete Successfull")

          // }
          const remainingUser = users.filter((usr) => usr._id !== user._id);
          setUsers(remainingUser);
        });
    }
  };

  return (
    <div>
      <h2>Total User Data:{users.length}</h2>
      {users.map((user) => (
        <div
          style={{
            border: "1px solid black",
            width: "30%",
            margin: "20px auto",
          }}
          key={user._id}
        >
          <h3>User Name-{user?.name}</h3>
          <p>Email-{user?.email}</p>
          <p>Country-{user?.country}</p>
           
            <button onClick={() => handleDelete(user)}>Delete User</button>
           
          <Link to={`/update/${user?._id}`}>
          {" "}
            <button>Update</button>
          </Link>
          <Link to="/usersadd">
            {" "}
            <button>Add User</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
