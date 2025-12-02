import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();


// HOC - Higher Order Component

export const UserProvider = ({ children }) => {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //Synka state med local storage
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    
    const {name,location,email,login,picture} = data.results[0];
    
    const newUser = {
      firstName: name.first,
      lastName: name.last,
      city: location.city,
      country: location.country,
      email: email,
      username: login.username,
      password: login.password,
      image: picture.medium,
    };

    setUsers([...users, newUser])
  }

  return (
    <UserContext value={{ users, addUser }}>
      {children}
    </UserContext>
  );
};
