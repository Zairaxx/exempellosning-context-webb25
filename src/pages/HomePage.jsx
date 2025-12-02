import React from "react";
import AddUserButton from "../components/AddUserButton";
import UserList from "../components/UserList";
import Login from "../components/Login";
const HomePage = () => {
  return (
    <div className="homepage">
      <Login/>
      <AddUserButton />
      <UserList />
    </div>
  );
};

export default HomePage;
