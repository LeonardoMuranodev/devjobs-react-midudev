import {Header} from "./components/Header.jsx"
import {Footer} from "./components/Footer.jsx"
import { HomePage } from "./pages/Home.jsx"
import { SearchPage } from "./pages/Search.jsx"
import { NotFoundPage } from "./pages/404.jsx"

const RESULT_PER_PAGES = 5

export function App() {
  const {pathname} = window.location

  return (
    <>
      <Header></Header>

      {pathname === '/' && <HomePage />}
      {pathname === '/search' && <SearchPage />}
      {pathname !== '/' && pathname !== '/search' && <NotFoundPage />}

      <Footer></Footer>
    </>
  )
}
