import { useState } from "react";
import "./login.css"

function Login({ onLogin, onSwitchToRegister }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const manejarLogin = (e) => {
    e.preventDefault();
    if (usuario === "" || password === "") {
      alert("Por favor completá ambos campos");
      return;
    }
    alert(`Iniciaste sesión como ${usuario}`);
    onLogin();
  };

  return (
    <div className="container" style={{ maxWidth: "300px", margin: "auto" }}>
      <h1 className="title">OrderApp</h1>
      <h2>Iniciar sesión</h2>
      <form onSubmit={manejarLogin}>
        <div style={{ marginBottom: "10px" }}>
          <label>Usuario:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <button type="submit">Iniciar sesión</button>
          <p>
            No tienes una cuenta?{" "}
            <a
              href="#" onClick={(e) => {
                e.preventDefault();
                onSwitchToRegister();
              }}
            >
              Registrate
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
