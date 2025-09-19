import React from 'react';
import HolaMundo from "./components/holamundo";
import KardexEstudiante from "./components/kardex-est";
import KardexEstudianteProps from "./components/kardex-est-props";
import Asistencias from "./components/asistencias";
import Asistencias2 from "./components/asistencias2";
import KardexPropsN2 from "./components/kardex-props-n2"; // ← Corrección aquí

const estudiantes = [
  { id: 1, nombre: "Leandro Cardozo", carrera: "Ing. Sistemas" },
  { id: 2, nombre: "Rodrigo Angulo", carrera: "Ing. Sistemas" },
  { id: 3, nombre: "Maria Fushiguro", carrera: "Ing. Sistemas" }
];

function App () {
  return (
    <>
      <h1>Clase Virtual 15 de septiembre</h1>
      <KardexEstudiante/>
      <KardexEstudianteProps
        nombre="Leandro Cardozo"
        carrera="Ing. Sistemas"
        materia="Programacion Web"
        notas={[20, 18, 19]}
        edad={21}
      />
      <br />
      <Asistencias nombre="Leandro Cardozo"/>
      <br />
      <Asistencias nombre="Rodrigo Angulo"/>
      <br />
      <Asistencias nombre="Maria Fushiguro"/>
      <br />
      <br />
      <Asistencias2 nombre="Leandro Cardozo" asistencias={10} />
      <Asistencias2 nombre="Rodrigo Angulo" asistencias={5} />
      <Asistencias2 nombre="Maria Fushiguro" asistencias={7} />
      <br />

      <h1>Lista de estudiantes MAP</h1>
      {estudiantes.map(est => (
        <KardexPropsN2 datos={est} key={est.id} /> // ← Corrección aquí
      ))}
    </>
  );
}

export default App;