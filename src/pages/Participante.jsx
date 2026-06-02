import { useState } from "react";

export default function Participante() {

  const [mostrarCharlas, setMostrarCharlas] =
    useState(false);

  const [mostrarMisCharlas, setMostrarMisCharlas] =
    useState(false);

  const [mostrarQR, setMostrarQR] =
    useState(false);

  const [mensaje, setMensaje] =
    useState("");

  const charlasDisponibles = [
    {
      titulo: "React Avanzado",
      fecha: "Lunes 18:00",
      aula: "A1",
      cupos: "25/40"
    },
    {
      titulo: "IA Generativa",
      fecha: "Martes 10:00",
      aula: "A2",
      cupos: "18/30"
    },
    {
      titulo: "Ciberseguridad",
      fecha: "Miércoles 15:00",
      aula: "A3",
      cupos: "12/30"
    }
  ];

  const misCharlas = [
    {
      titulo: "React Avanzado",
      fecha: "Lunes 18:00"
    },
    {
      titulo: "Diseño UX",
      fecha: "Martes 14:00"
    },
    {
      titulo: "Bases de Datos",
      fecha: "Jueves 11:00"
    }
  ];

  return (
    <div className="content">

      <h1 className="page-title">
        Portal Participante
      </h1>

      <div className="cards">

        <div className="card">
          <div className="card-title">
            Charlas Inscriptas
          </div>

          <div className="card-value">
            3
          </div>
        </div>

        <div className="card">
          <div className="card-title">
            Próxima Charla
          </div>

          <div className="card-value">
            React Avanzado
          </div>
        </div>

        <div className="card">
          <div className="card-title">
            QR
          </div>

          <div className="card-value">
            Disponible
          </div>
        </div>

      </div>

      <div className="actions">

        <button
          className="btn btn-primary"
          onClick={() =>
            setMostrarCharlas(!mostrarCharlas)
          }
        >
          Inscribirse a una charla
        </button>

        <button
          className="btn btn-success"
          onClick={() =>
            setMostrarMisCharlas(!mostrarMisCharlas)
          }
        >
          Mis Charlas
        </button>

      </div>

      {mostrarCharlas && (

        <div className="table-container">

          <table className="table">

            <thead>
              <tr>
                <th>Charla</th>
                <th>Fecha y Hora</th>
                <th>Aula</th>
                <th>Cupos</th>
                <th></th>
              </tr>
            </thead>

            <tbody>

              {charlasDisponibles.map((c) => (

                <tr key={c.titulo}>
                  <td>{c.titulo}</td>
                  <td>{c.fecha}</td>
                  <td>{c.aula}</td>
                  <td>{c.cupos}</td>

                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        alert(
                          `Inscripción simulada correctamente a "${c.titulo}".`
                        )
                      }
                    >
                      Inscribirme
                    </button>
                  </td>
                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

      {mostrarMisCharlas && (

        <div className="section">

          <h2 className="section-title">
            Mis Charlas
          </h2>

          <div className="table-container">

            <table className="table">

              <thead>
                <tr>
                  <th>Charla</th>
                  <th>Fecha y Hora</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>

                {misCharlas.map((c) => (

                  <tr key={c.titulo}>
                    <td>{c.titulo}</td>
                    <td>{c.fecha}</td>

                    <td>

                      <div className="button-group">

                        <button
                          className="btn btn-success"
                          onClick={() =>
                            setMostrarQR(true)
                          }
                        >
                          Generar QR
                        </button>

                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            setMensaje(c.titulo)
                          }
                        >
                          Cancelar
                        </button>

                      </div>

                    </td>
                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      )}

      {mensaje && (

        <div className="message-box">

          <p>
            Puede cancelar su inscripción a
            {" "}
            <b>{mensaje}</b>
            {" "}
            hasta el domingo 15/12/2026 a las 18:00 hs.
          </p>

          <br />

          <button
            className="btn btn-danger"
            onClick={() =>
              alert(
                `Cancelación de inscripción simulada para "${mensaje}".`
              )
            }
          >
            Confirmar cancelación
          </button>

        </div>

      )}

      {mostrarQR && (

        <div className="qr-box">

          <div>

            <div className="qr-code">

              ██████
              <br />
              █ ██ █
              <br />
              ██████

            </div>

            <div className="qr-actions">

              <button
                className="btn btn-primary"
                onClick={() =>
                  alert(
                    "Descarga del QR simulada correctamente."
                  )
                }
              >
                Descargar
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}