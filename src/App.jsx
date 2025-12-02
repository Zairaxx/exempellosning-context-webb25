import React from "react";
import { UserProvider } from "./context/UserContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <UserProvider>
      <HomePage />
    </UserProvider>
  );
}

export default App;
