import {Header} from "./components/Header.jsx"
import {Footer} from "./components/Footer.jsx"
import {JobSearch} from "./components/JobSearch.jsx"
import {ResultSearch} from "./components/ResultSearch.jsx"
import {Pagination} from "./components/Pagination.jsx"
import jobs from "./data.json"
import { useState } from "react"

const RESULT_PER_PAGES = 5

export function App() {

    // Estados de la App
    const [currentPage, setCurrentPage] = useState(1)
    const [currentFilters, setCurrentFilters] = useState({
      technology: "",
      location: "",
      experienceLevel: ""
    })
    const [currentTextToFilter, setCurrentTextToFilters] = useState("")

    // Handlers
    const handleSearch = (newFilters) => {
      setCurrentFilters({
        technology: newFilters.technologies,
        location: newFilters.location,
        experienceLevel: newFilters.experienceLevel,
      })
      setCurrentTextToFilters(newFilters.search)
    }

    const handleChangeText = (text) => setCurrentTextToFilters(text) 

    // Filtros
    const jobsFilteredByFilters = jobs.filter(job => {
      return (
        (currentFilters.technology === '' || job.data.technology === currentFilters.technology) &&
        (currentFilters.location === '' || job.data.location === currentFilters.location) &&
        (currentFilters.experienceLevel === '' || job.data.nivel === currentFilters.experienceLevel) 
      )
    })

    const jobsWithTextToFilter = jobsFilteredByFilters.filter(job => {
      return job.titulo.toLowerCase().includes(currentTextToFilter.toLowerCase())
    })

    // Paginacion
    const totalPages = Math.ceil( jobs.length / RESULT_PER_PAGES)

    const pageResults = jobsWithTextToFilter.slice(
      (currentPage - 1) * RESULT_PER_PAGES,
      (currentPage) * RESULT_PER_PAGES
    )

    console.log('🔵 App renderizado', {
      currentPage,
      timestamp: new Date().toLocaleTimeString(),
    })

  return (
    <>
      <Header></Header>

      <main>
        <JobSearch onSearch={handleSearch} onTextChange={handleChangeText}></JobSearch>
        <section>
          <ResultSearch jobs={pageResults}></ResultSearch>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}></Pagination>
        </section>
      </main>

      <Footer></Footer>
    </>
  )
}
