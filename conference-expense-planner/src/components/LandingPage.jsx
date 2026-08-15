import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Conference Expense Planner</h1>

          <p>
            Planifique fácilmente los gastos de su próxima conferencia.
            Seleccione salas, equipos audiovisuales y servicios de comida
            para obtener rápidamente el coste total de su evento.
          </p>

          <Link to="/products">
            <button className="start-button">
              Comenzar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;