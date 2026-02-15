import data from "../data.json"
import {JobCard} from "./JobCard.jsx"
import {Pagination} from "./Pagination.jsx"
import { useState } from "react"

export function ResultSearch() {

    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 5

    const handlePageChange = (page) => {
        console.log("📑 Cambiando a la pagina " + page)
        setCurrentPage(page)
    }

    return (
        <section>
            <h2>Resultados de búsqueda</h2>

            <div className="jobs-listings">
                {data.map(e => 
                    <JobCard titulo={e.titulo} empresa={e.empresa} ubicacion={e.ubicacion} descripcion={e.descripcion} modalidad={e.data.modalidad} nivel={e.data.nivel}></JobCard>
                )}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>
        </section>
    )
}