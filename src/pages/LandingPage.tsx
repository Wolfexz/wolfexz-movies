import { MoviesGrid } from "../components/MoviesGrid"
import { Search } from "../components/Search"

export const LandingPage = () => {
  return (
    // * Aquí irán componentes barra de búsqueda y grid de películas
    <div>
      <Search /><br/>
      <MoviesGrid />
    </div>
  )
}
