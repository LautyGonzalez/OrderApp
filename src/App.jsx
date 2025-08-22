import { useState } from "react";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";
import {Route} from "react-router"
import Register from "./components/register/register";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegister, setIsRegister] = useState(false);


  return (
    <div>
      {isLoggedIn ? (<Dashboard />) : isRegister ? (
        <Register
          onRegister={(data) => {
            console.log(data);
            alert(`Usuario ${data.username} registrado!`);
            setIsRegister(false);
          }}
          onSwitchToLogin={() => setIsRegister(false)}
        />
      ) : (
        <Login
          onLogin={() => setIsLoggedIn(true)}
          onSwitchToRegister={() => setIsRegister(true)}
        />
      )}
    </div>
  );
}

export default App;
