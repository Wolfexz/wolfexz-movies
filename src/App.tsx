import { Link, Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { MovieDetails } from "./pages/MovieDetails"

export function App() {
  return (
    // * TODO: Rutas de la aplicación
    <div className="p-5 flex flex-col items-center gap-10">
      <header className="mt-5">
        <Link to="/">
          <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-4xl font-bold inline-block hover:scale-[1.01] duration-500">Wolfexz Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/movies/:movieId" element={<MovieDetails/>}/>
        </Routes>
      </main>
    </div>
  )
}