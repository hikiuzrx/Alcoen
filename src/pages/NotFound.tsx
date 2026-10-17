import { NavLink, isRouteErrorResponse, useRouteError } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="relative top-20 mb-20 px-6 text-center">
      <h1 className="text-primary font-semibold text-5xl my-10">404</h1>
      <p className="text-secondary text-lg mb-8">Cette page est introuvable.</p>
      <NavLink to="/" className="text-white bg-primary rounded-lg p-3 px-6 font-semibold hover:text-white">
        Retour à l'accueil
      </NavLink>
    </div>
  )
}

export function RouteError() {
  const error = useRouteError()
  if (isRouteErrorResponse(error) && error.status === 404) return <NotFound />
  return (
    <div className="relative top-20 mb-20 px-6 text-center">
      <h1 className="text-primary font-semibold text-3xl my-10">Une erreur est survenue</h1>
      <p className="text-secondary text-lg mb-8">Veuillez réessayer dans quelques instants.</p>
      <a href="/" className="text-white bg-primary rounded-lg p-3 px-6 font-semibold hover:text-white">
        Retour à l'accueil
      </a>
    </div>
  )
}
