export default function Administradores() {
  return (
    <div className="content">
      <h1 className="page-title">
        Administradores
      </h1>

      <button className="btn btn-success">
        Nuevo Admin
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
              <td>María López</td>
              <td>maria@test.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}