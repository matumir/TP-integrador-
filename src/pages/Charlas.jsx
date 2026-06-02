export default function Charlas() {
  return (
    <div className="content">
      <h1 className="page-title">
        Charlas
      </h1>

      <button className="btn btn-primary">
        Nueva Charla
      </button>

      <br />
      <br />

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Aula</th>
              <th>Cupo</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>React Avanzado</td>
              <td>A1</td>
              <td>40</td>
            </tr>

            <tr>
              <td>IA Generativa</td>
              <td>A2</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}