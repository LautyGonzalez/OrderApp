import "./CardSucursal.css";

const CardSucursal = ({nombre, direccion, telefono, estado }) =>{
    return (
    <div className="card-sucursal">
      <h2>{nombre}</h2>
      <p><strong>Dirección:</strong> {direccion}</p>
      <p><strong>Teléfono:</strong> {telefono}</p>
      <p className={estado === "Abierto" ? "estado abierto" : "estado cerrado"}>
        {estado}
      </p>
    </div>
  );
}

export default CardSucursal;