import {useState} from "react"

export function JobCard({ titulo, empresa, ubicacion, descripcion, salario, modalidad, nivel, technology }) {

    // ¡Añadimos esto para ver cuándo se ejecuta!
    console.log('🔄 JobCard se está renderizando. Título:', titulo)

    const [isApplied, setIsApplied] = useState(false)
    function handleClick() {
        console.log('👆 Click en aplicar')
        setIsApplied(true) // Cambiamos el estado a true
    }

    // console.log('📊 Estado actual de aplicado:', isApplied)

    const buttonText = !isApplied ? 'Aplicar' : 'Aplicado'
    const buttonClassNames = 'button-apply-job' + isApplied ? 'isApplied' : ""
    
    return (
        <article 
            className="job-listing-card"
            data-modalidad={modalidad}
            data-nivel={nivel}
            data-technology={technology}
        >
            <div>
                <h3>{titulo}</h3>
                <small>{empresa} | {ubicacion}</small>
                <p>{descripcion}</p>
                <div className="job-details">
                    <span>💰 {salario}</span>
                    <span>📍 {modalidad}</span>
                    <span>📊 {nivel}</span>
                </div>
            </div>
            <button
                className={buttonClassNames}
                onClick={handleClick}
                >
                {buttonText}
            </button>
        </article>
    )
}