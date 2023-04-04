import React, { useState } from "react";

const AddUser = () => {
  //   const [user, setUser] = useState({});

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const country = form.country.value;

    const user = { name: name, email: email, country: country };

    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Users data added in the Database");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h2>Please add a new user</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="text" name="country" placeholder="country" />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
