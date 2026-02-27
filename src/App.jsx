import {Header} from "./components/Header.jsx"
import {Footer} from "./components/Footer.jsx"
import { HomePage } from "./pages/Home.jsx"
import { SearchPage } from "./pages/Search.jsx"
import { NotFoundPage } from "./pages/404.jsx"
import { useState, useEffect } from 'react'

const RESULT_PER_PAGES = 5

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    // Función que actualiza el estado con la nueva ruta
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    // Escuchar el evento popstate
    window.addEventListener('popstate', handleLocationChange)

    // Limpiar el event listener al desmontar
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  return (
    <>
      <Header></Header>

      {currentPath === '/' && <HomePage />}
      {currentPath === '/search' && <SearchPage />}
      {currentPath !== '/' && currentPath !== '/search' && <NotFoundPage />}

      <Footer></Footer>
    </>
  )
}
