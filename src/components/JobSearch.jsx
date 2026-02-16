import {SearchFilter} from "./SearchFilter.jsx"
import {useId} from "react"


export function JobSearch({onSearch, onTextChange}){

    const idSearch = useId()

    const technologies = [
        {   
            id: useId(),
            label: "Tecnologias Populares",
            options: ["JavaScript", "Python", "React", "Node.js"], 
        }, 
        "Java", "C#", "C", "C++", "Ruby", "PHP"
    ]

    const locations = {
        id: useId(),
        options: ["Remoto", "Monterrey", "Ciudad de Mexico", "Guadalajara", "Barcelona"]
    };

    const experienceLevels = {
        id: useId(),
        options: ["Junior", "Mid-Level", "Senior", "Lead"]
    } 

    // Al enviarse el formulario
    const handleSubmit = (event) => {
        event.preventDefault()
        
        const formData = new FormData(event.target)

        const filters = {
            search: formData.get(idSearch),
            technologies: formData.get(technologies[0].id),
            location: formData.get(locations.id),
            experienceLevel: formData.get(experienceLevels.id)
        }

        onSearch(filters)
    }

    const handleTextChange = (event) =>  {
        onTextChange(event.target.value)
    }

    return (
        <section className="jobs-search">
            <h1>Encuentra tu próximo trabajo</h1>
            <p>Explora miles de oportunidades en el sector tecnológico.</p>

            <form onSubmit={handleSubmit} id="empleos-search-form" role="search">
            <div className="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
                </svg>

                <input id={idSearch} 
                name={idSearch} 
                type="text"
                placeholder="Buscar trabajos, empresas o habilidades"
                onChange={handleTextChange}>
                </input>

                <button type="submit">Buscar</button>
            </div>

            <div className="search-filters">
                <SearchFilter id={technologies[0].id} name={technologies[0].id} titulo="Tecnología" options={technologies}></SearchFilter>
                <SearchFilter id={locations.id} name={locations.id} titulo="Ubicacion" options={locations.options}></SearchFilter>
                <SearchFilter id={experienceLevels.id} name={experienceLevels.id} titulo="Nivel de experiencia" options={experienceLevels.options}></SearchFilter>
            </div>
            </form>

            <span id="filter-selected-value"></span>
        </section>
    )
}