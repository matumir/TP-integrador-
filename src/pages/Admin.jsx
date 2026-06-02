import { useState } from "react";

export default function Admin() {

  const [charlaSeleccionada, setCharlaSeleccionada] =
    useState("");

  const [nombre, setNombre] =
    useState("");

  const [apellido, setApellido] =
    useState("");

  const [dni, setDni] =
    useState("");

  const [email, setEmail] =
    useState("");

  const charlas = [
    "React Avanzado",
    "IA Generativa",
    "Diseño UX",
    "Bases de Datos"
  ];

  return (
    <div className="content">

      <h1 className="page-title">
        Panel Admin
      </h1>

      <div className="cards">

        <div className="card">
          <div className="card-title">
            Asistencias Hoy
          </div>

          <div className="card-value">
            120
          </div>
        </div>

        <div className="card">
          <div className="card-title">
            Charlas Activas
          </div>

          <div className="card-value">
            5
          </div>
        </div>

      </div>

      <div className="camera">
        CÁMARA QR
      </div>

      <br />

      <h2 className="section-title">
        Registro Manual
      </h2>

      <div className="table-container">

        <table className="table">

          <thead>
            <tr>
              <th>Charla</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>

            {charlas.map((charla) => (

              <tr key={charla}>

                <td>{charla}</td>

                <td>

                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      setCharlaSeleccionada(charla)
                    }
                  >
                    Seleccionar
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {charlaSeleccionada && (

        <div className="form-card">

          <h3>
            Registrar participante en:
            {" "}
            {charlaSeleccionada}
          </h3>

          <br />

          <input
            className="input"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) =>
              setNombre(e.target.value)
            }
          />

          <input
            className="input"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) =>
              setApellido(e.target.value)
            }
          />

          <input
            className="input"
            placeholder="DNI"
            value={dni}
            onChange={(e) =>
              setDni(e.target.value)
            }
          />

          <input
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <button
            className="btn btn-success"
            onClick={() => {

              alert(
                `Participante ${nombre} ${apellido} registrado correctamente en "${charlaSeleccionada}".`
              );

              setNombre("");
              setApellido("");
              setDni("");
              setEmail("");

            }}
          >
            Registrar Participante
          </button>

        </div>

      )}

    </div>
  );
}