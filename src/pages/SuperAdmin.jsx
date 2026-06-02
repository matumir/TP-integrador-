import Sidebar from "../components/Sidebar";

export default function SuperAdmin() {
  const links = [
    {
      label: "Participantes",
      path: "/superadmin/participantes",
    },
    {
      label: "Admins",
      path: "/superadmin/admins",
    },
    {
      label: "Charlas",
      path: "/superadmin/charlas",
    },
    {
      label: "Métricas",
      path: "/superadmin/metricas",
    },
  ];

  return (
    <div className="layout">
      <Sidebar links={links} />

      <div className="content">
        <h1 className="page-title">
          Dashboard Superadmin
        </h1>

        <div className="cards">
          <div className="card">
            <div className="card-title">
              Participantes
            </div>

            <div className="card-value">
              500
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              Admins
            </div>

            <div className="card-value">
              10
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              Charlas
            </div>

            <div className="card-value">
              25
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              Asistencias
            </div>

            <div className="card-value">
              350
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}