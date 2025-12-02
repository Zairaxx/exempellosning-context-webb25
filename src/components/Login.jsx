import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
    console.log(user);
    setCurrentUser(user);
    setIsLoggedIn(true);
      
    } else {
      alert("Fel användarnamn eller lösenord");
    }
  };

  const handleLogout = (obj) => {
    setIsLoggedIn(false);
    currentUser(null);
  }

  return (
    <div>
      {!isLoggedIn ? <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Logga in</button>
      </form> : <div>
        <strong>Welcome, {currentUser.firstName} {currentUser.lastName}</strong>
        <br/><br/><button onClick={handleLogout}>Log out</button><br/><br/><br/>
        <hr/>
        </div>}
    </div>
  );
};

export default Login;
