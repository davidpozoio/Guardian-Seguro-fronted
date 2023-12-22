import { Link } from "react-router-dom";
import "./start.styles.css";

export function Start() {
  return (
    <div className="margin-layout start-page-layout start-page">
      <div className="image-container --full-width"></div>
      <div className="content --full-width margin-layout">
        <header className="header">
          <img src="/src/assets/Icon.svg" alt="logo" width="100" height="100" />
          <h1 className="title">Guardian en línea</h1>
          <p className="text">Seguridad en un click</p>
        </header>
        <div className="button-container">
          <Link to="/auth" className="button">
            Iniciar sesión
          </Link>
          <Link to="/auth/signup" className="button button--ghost">
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
}
