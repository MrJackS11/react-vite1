import React, { useState } from "react";

function Asistencias({ nombre }) {
  const [numAsistencias, setnumAsistencias] = useState(0);
  const [numFaltas, setnumFaltas] = useState(0);

  return (
    <>
      <div>
        <h2>Asistencias de {nombre}</h2>
        <p>Asistencias: {numAsistencias}</p>
        <p>Faltas: {numFaltas}</p>
        <button onClick={() => setnumAsistencias(numAsistencias + 1)}>
          Agregar Asistencia
        </button>
        <button onClick={() => setnumAsistencias(numAsistencias - 1)}>
          Eliminar Asistencia
        </button>
        <button onClick={() => setnumFaltas(numFaltas + 1)}>
          Agregar Falta
        </button>
        <button onClick={() => setnumFaltas(numFaltas - 1)}>
          Eliminar Falta
        </button>
      </div>
    </>
  );
}

export default Asistencias;