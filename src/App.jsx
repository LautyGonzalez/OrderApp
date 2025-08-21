import { useState } from "react";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";
import {Route} from "react-router"


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (<Dashboard />) : (<Login onLogin={() => setIsLoggedIn(true)} />)}
    </div>
  );
}

export default App;
