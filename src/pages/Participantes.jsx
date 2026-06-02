export default function Participantes() {
  return (
    <div className="content">
      <h1 className="page-title">
        Participantes
      </h1>

      <button className="btn btn-primary">
        Importar CSV
      </button>

      <br />
      <br />

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Juan Pérez</td>
              <td>juan@test.com</td>
            </tr>

            <tr>
              <td>Ana Gómez</td>
              <td>ana@test.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}