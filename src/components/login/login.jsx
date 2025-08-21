import { useState } from "react";
import "./login.css"

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const manejarLogin = (e) => {
    e.preventDefault();
    if (usuario === "" || password === "") {
      alert("Por favor completá ambos campos");
      return;
    }
    alert(`Iniciaste sesión como ${usuario}`);
  };

  return (
    <div class="container" style={{ maxWidth: "400px", margin: "auto"}}>
        <h1 class="title">OrderApp</h1>
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
          <p>No tienes una cuenta? <label>Registrate</label></p>
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
