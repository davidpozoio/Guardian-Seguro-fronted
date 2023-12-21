import { Link } from "react-router-dom";

export function Start() {
  return (
    <div>
      <header>
        <h1>Guardia en línea</h1>
        <p>Seguridad en un click</p>
      </header>
      <Link to="/auth">Iniciar sesión</Link>
      <Link to="/auth/signup">Registrarse</Link>
    </div>
  );
}
