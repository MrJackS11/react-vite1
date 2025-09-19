import React from "react";

function KardexPropsN2({ datos }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          {datos.nombre}
        </div>
        <div className="card-body">
          <h5 className="card-title">Kardex del Estudiante</h5>
          <p className="card-text">Carrera: {datos.carrera}</p>
          {datos.materia && <p className="card-text">Materia: {datos.materia}</p>}
          {datos.edad && <p className="card-text">Edad: {datos.edad}</p>}
        </div>
      </div>
    </>
  );
}

export default KardexPropsN2;
