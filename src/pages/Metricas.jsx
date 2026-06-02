export default function Metricas() {

  return (
    <div className="content">

      <h1 className="page-title">
        Métricas
      </h1>

      <div className="cards">

        <div className="card">
          <div className="card-title">
            Asistencias
          </div>

          <div className="card-value">
            350
          </div>
        </div>

        <div className="card">
          <div className="card-title">
            Inscriptos
          </div>

          <div className="card-value">
            500
          </div>
        </div>

        <div className="card">
          <div className="card-title">
            Ocupación
          </div>

          <div className="card-value">
            70%
          </div>
        </div>

      </div>

      <div style={{ marginBottom: "20px" }}>

        <button
          className="btn btn-success"
          onClick={() =>
            alert(
              "Exportación de métricas simulada correctamente."
            )
          }
        >
          Exportar Métricas
        </button>

      </div>

      <div className="chart-container">

        <h2 className="section-title">
          Asistencia por Día
        </h2>

        <div className="fake-chart">

          <div
            className="bar"
            style={{ height: "40%" }}
          >
            <span>Lun</span>
          </div>

          <div
            className="bar"
            style={{ height: "65%" }}
          >
            <span>Mar</span>
          </div>

          <div
            className="bar"
            style={{ height: "90%" }}
          >
            <span>Mié</span>
          </div>

          <div
            className="bar"
            style={{ height: "75%" }}
          >
            <span>Jue</span>
          </div>

          <div
            className="bar"
            style={{ height: "55%" }}
          >
            <span>Vie</span>
          </div>

        </div>

      </div>

    </div>
  );
}