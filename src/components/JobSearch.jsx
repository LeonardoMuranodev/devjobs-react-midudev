import {SearchFilter} from "./SearchFilter.jsx"

export function JobSearch(){

    const technologies = [
        {
            label: "Tecnologias Populares",
            options: ["JavaScript", "Python", "React", "Node.js"], 
        }, 
        "Java", "C#", "C", "C++", "Ruby", "PHP"
    ]
    const locations = ["Remoto", "Monterrey", "Ciudad de Mexico", "Guadalajara", "Barcelona"];
    const experienceLevel = ["Junior", "Mid-Level", "Senior", "Lead"]

    return (
        <section className="jobs-search">
            <h1>Encuentra tu próximo trabajo</h1>
            <p>Explora miles de oportunidades en el sector tecnológico.</p>

            <form id="empleos-search-form" role="search">
            <div className="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
                </svg>

                <input name="search" 
                id="empleos-search-input" required 
                type="text"
                placeholder="Buscar trabajos, empresas o habilidades">
                </input>
            </div>

            <div className="search-filters">
                <SearchFilter name="technology" id="filter-technology" titulo="technology" options={technologies}></SearchFilter>
                <SearchFilter name="location" id="filter-location" titulo="Ubicacion" options={locations}></SearchFilter>
                <SearchFilter name="experience-level" id="filter-experience-level" titulo="Nivel de experiencia" options={experienceLevel}></SearchFilter>
            </div>
            </form>

            <span id="filter-selected-value"></span>
        </section>
    )
}