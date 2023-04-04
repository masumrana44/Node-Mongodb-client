import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const user = useLoaderData();
  const [userInfo, setUserInfo] = useState();

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const country = form.country.value;

    const userUpdateInfo = {
      _id: user._id,
      name: name,
      email: email,
      country: country,
    };

    fetch(`http://localhost:5000/users/${user._id}`,{
      method:'PUT',
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(userUpdateInfo)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        alert('Your data is save in dataBase')
      }
    })
    .catch(err=>console.error(err)); 

    console.log(userUpdateInfo)

  }

  return (
    <div>
      <h2>Please update: {user.name}</h2>
      <form onSubmit={handleUpdateUser}>
        <input
          type="text"
          defaultValue={user.name}
          name="name"
          placeholder="name"
        />
        <br />
        <input
          type="email"
          defaultValue={user.email}
          name="email"
          placeholder="email"
        />
        <br />
        <input
          type="text"
          defaultValue={user.country}
          name="country"
          placeholder="country"
        />
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default Update;
