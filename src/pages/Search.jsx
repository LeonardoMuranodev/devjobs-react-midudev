import {JobSearch} from "../components/JobSearch.jsx"
import {ResultSearch} from "../components/ResultSearch.jsx"
import {Pagination} from "../components/Pagination.jsx"
import jobs from "../data.json"
import { useEffect, useState } from "react"

const RESULT_PER_PAGES = 5

export function SearchPage() {

    // Estados de la App
    const [currentPage, setCurrentPage] = useState(1)
    const [currentFilters, setCurrentFilters] = useState({
      technology: "",
      location: "",
      experienceLevel: "",
      contractType: "",
      salary: 0
    })
    const [currentTextToFilter, setCurrentTextToFilters] = useState("")

    // Handlers
    const handleSearch = (newFilters) => {
      setCurrentFilters({
        technology: newFilters.technologies.toLowerCase(),
        location: newFilters.location.toLowerCase(),
        experienceLevel: newFilters.experienceLevel.toLowerCase(),
        contractType: newFilters.contractType.toLowerCase(),
        salary: newFilters.salary
      })
      setCurrentTextToFilters(newFilters.search.toLowerCase() || "")
      setCurrentPage(1)
    }

    const handleChangeText = (text) => {
      setCurrentTextToFilters(text.toLowerCase())
      setCurrentPage(1)
    }
    // Filtros
    const jobsFilteredByFilters = jobs.filter(job => {
      const jobSalary = parseInt(job.data.salario) || 0
      const minSalary = currentFilters.salary ? parseInt(currentFilters.salary) : 0

      console.log(job.data.technology)
      return (
        (currentFilters.technology === '' || job.data.technology.toLowerCase() === currentFilters.technology) &&
        (currentFilters.location === '' || job.ubicacion.toLowerCase() === currentFilters.location) &&
        (currentFilters.experienceLevel === '' || job.data.nivel.toLowerCase() === currentFilters.experienceLevel) &&
        (currentFilters.contractType === '' || job.data.contrato.toLowerCase() === currentFilters.contractType) &&
        (jobSalary >= minSalary)
      )
    })

    const jobsWithTextToFilter = jobsFilteredByFilters.filter(job => {
      return job.titulo.toLowerCase().includes(currentTextToFilter)
    })

    const totalResults = jobsWithTextToFilter.length

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

    useEffect(() => {
            const jobCount = jobsWithTextToFilter.length

            if (currentTextToFilter === '') {
            document.title = `DevJobs - Página ${currentPage}`
            } else {
            document.title = `${jobCount} trabajos de "${currentTextToFilter}" - Página ${currentPage}`
            }
        }, [jobsFilteredByFilters.length, currentPage, currentTextToFilter, jobsWithTextToFilter]
    )


  return (
    <>
      <main>
        <JobSearch onSearch={handleSearch} onTextChange={handleChangeText}></JobSearch>
        <section>
          <ResultSearch jobs={pageResults} totalResults={totalResults}></ResultSearch>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}></Pagination>
        </section>
      </main>
    </>
  )
}
