import {JobCard} from "./JobCard.jsx"

export function ResultSearch({jobs}) {

    return (
        <section>
            <h2>Resultados de búsqueda</h2>

            <div className="jobs-listings">
                {jobs.map(e => 
                    <JobCard key={e.id} titulo={e.titulo} empresa={e.empresa} ubicacion={e.ubicacion} descripcion={e.descripcion} modalidad={e.data.modalidad} nivel={e.data.nivel} technology={e.technology}></JobCard>
                )}
            </div>
        </section>
    )
}