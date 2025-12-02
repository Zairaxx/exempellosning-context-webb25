import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const AddUserButton = () => {
  const { addUser } = useContext(UserContext);

  return <button onClick={addUser}>Lägg till användare</button>;
};

export default AddUserButton;