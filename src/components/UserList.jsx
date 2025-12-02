import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserList = () => {
  
  const { users } = useContext(UserContext);

  return (
    <div>
      <h1>Användarlista</h1>
      {users.map((user,i) => {
        
        const {firstName, lastName, image,city, country,username,password,email} = user;

        return (<div key={i}>
          <img src={image} alt="Profilbild" />
          <h3>{firstName} {lastName}</h3>
          <p>{city}, {country}</p>
          <p>Email: {email}</p>
          <p>Username: {username}</p>
          <p>Password: {password}</p>
        </div>)
        })
      }
    </div>
  );
};

export default UserList;
