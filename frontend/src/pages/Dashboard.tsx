import { Link } from "react-router-dom"

export function Dashboard() {

  return (
    <>
      <div>
        <h1>Bienvenido</h1>
        <p>Esta es la página principal de la aplicación.</p>
        <h4>Elija una opción:</h4>
        <ul>
          <li>
            <Link to={"/users"}>Gestionar usuarios</Link>
          </li>
          <li>
            <Link to={"/tasks"}>Gestionar tareas</Link>
          </li>
        </ul>
      </div>
    </>
  )
}