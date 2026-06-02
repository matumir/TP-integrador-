import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const go = () => {
    if (email.includes("participante")) {
      navigate("/participante");
    } else if (email.includes("admin") && !email.includes("super")) {
      navigate("/admin");
    } else {
      navigate("/superadmin");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Congreso</h1>

        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Contraseña"
        />

        <button className="btn btn-primary" onClick={go}>
          Ingresar
        </button>

        <div style={{ marginTop: "20px" }}>
          <h3>Credenciales</h3>

          <p>participante@test.com / 123456</p>
          <p>admin@test.com / 123456</p>
          <p>superadmin@test.com / 123456</p>
        </div>
      </div>
    </div>
  );
}