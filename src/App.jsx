import {Header} from "./components/Header.jsx"
import {Footer} from "./components/Footer.jsx"
import {JobSearch} from "./components/JobSearch.jsx"
import {ResultSearch} from "./components/ResultSearch.jsx"
import {Pagination} from "./components/Pagination.jsx"
import jobs from "./data.json"
import { useState } from "react"

const RESULT_PER_PAGES = 5

export function App() {

    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil( jobs.length / RESULT_PER_PAGES)

    const pageResult = jobs.slice(
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
        <JobSearch></JobSearch>
        <section>
          <ResultSearch jobs={pageResult}></ResultSearch>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}></Pagination>
        </section>
      </main>

      <Footer></Footer>
    </>
  )
}
