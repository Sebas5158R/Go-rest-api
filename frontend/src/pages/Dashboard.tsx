import { Link } from "react-router-dom"

export function Dashboard() {

  return (
    <>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-2">Dashboard, elija un módulo</h1>
          <p className="text-lg font-normal text-gray-500 mb-6">Página de inicio, puedes elegir si ir al módulo usuarios o ir al modulo de tareas para administrar, crear, eliminar y/o editar registros.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 hover:bg-gray-100">
            <Link to={"/users"} className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
              <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
              </svg>
              Usuarios
            </Link>
            <h2 className="text-gray-900 text-3xl font-extrabold mb-2">Iniciar con el módulo usuarios</h2>
            <p className="text-lg font-normal text-gray-500 mb-4">Podrá realizar operaciones básicas en usuarios como lo es: Crear, eliminar y editar usuarios de forma libre.</p>
            <Link to={"/users"} className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center">Quiero ir
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 hover:bg-gray-100">
            <Link to={"/tasks"} className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
              <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
              </svg>
              Tareas
            </Link>
            <h2 className="text-gray-900 text-3xl font-extrabold mb-2">Iniciar con el módulo tareas</h2>
            <p className="text-lg font-normal text-gray-500 mb-4">Podrá realizar operaciones básicas en tareas como lo es: Crear, eliminar y editar tareas de forma libre.</p>
            <Link to={"/tasks"} className="text-blue-600 hover:underline font-medium text-lg inline-flex items-center">Quiero ir
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}