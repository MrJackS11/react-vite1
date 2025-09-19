import React from 'react';
import HolaMundo from "./components/holamundo";
import KardexEstudiante from "./components/kardex-est";
import KardexEstudianteProps from "./components/kardex-est-props";

function App () {
  return (
    <>
      <h1>Clase Virtual 15 de septiembre</h1>
      <KardexEstudiante/>
      <KardexEstudianteProps
        nombre="LEO"
        carrera="Ing. Sistemas"
        materia="Programacion Web"
        notas={[20, 18, 19]}
        edad={21}
      />
      
    </>
    
  );
}

export default App;