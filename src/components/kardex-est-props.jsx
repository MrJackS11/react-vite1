function KardexEstudianteProps({nombre, carrera, materia, notas, edad}) {
    const promedio = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    return (
        <div className="card">
            <div className="card-header">{nombre}</div>
            <div className="card-body">
                <h5 className="card-title">Kardex del Estudiante</h5>
                <p className="card-text">Carrera: {carrera}</p>
                <p className="card-text">Materia: {materia}</p>
                <p className="card-text">Notas: {notas.join(', ')}</p>
                <p className="card-text">Promedio: {promedio.toFixed(2)}</p>
                <p className="card-text">Edad: {edad}</p>
            </div>     
        </div>
    );
}

export default KardexEstudianteProps;
git init
git commit -m "Primer commit de mi proyecto React"