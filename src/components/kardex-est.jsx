function KardexEstudiante() {
    const nombre = "LEO";
    const carrera = "Ing. Sistemas";
    const materia = "Programacion Web";
    const nota1 = 20;
    const nota2 = 18;
    const nota3 = 19;
    const promedio = (nota1 + nota2 + nota3) / 3;
    const edad = 21;
    return (
        <div className="card">
            <div className="card-header">{nombre}</div>
            <div className="card-body">
                <h5 className="card-title">Kardex del Estudiante</h5>
                <p className="card-text">Carrera: {carrera}</p>
                <p className="card-text">Materia: {materia}</p>
                <p className="card-text">Notas: {nota1}, {nota2}, {nota3}</p>
                <p className="card-text">Promedio: {promedio}</p>
                <p className="card-text">Edad: {edad}</p>
            </div>     
        </div>
    );
}

export default KardexEstudiante;