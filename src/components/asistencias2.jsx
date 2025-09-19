import React, { useState } from "react";

function Asistencias2({ nombre, asistencias }) {
  const [numAsistencias, setnumAsistencias] = useState(asistencias);

  return (
    <div>
      <h2>Asistencias de {nombre}</h2>
      <p>Asistencias: {numAsistencias}</p>
      <button onClick={() => setnumAsistencias(numAsistencias + 1)}>
        Agregar Asistencia
      </button>
      <button onClick={() => setnumAsistencias(numAsistencias - 1)}>
        Eliminar Asistencia
      </button>
    </div>
  );
}

export default Asistencias2;