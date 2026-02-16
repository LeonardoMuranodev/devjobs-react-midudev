import styles from "./Pagination.module.css"

export function Pagination({currentPage = 1, totalPages= 10, onPageChange}){

    const pages = Array.from({length: totalPages}, (_, i) => i + 1)
    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === totalPages

    const styleLinkLeft = {
        opacity: isFirstPage ? 0.5 : 1,
        cursor: isFirstPage ? 'not-allowed' : 'pointer',
    }

    const styleLinkRight = {
        opacity: isLastPage ? 0.5 : 1,
        cursor: isLastPage ? 'not-allowed' : 'pointer',
    }

    const handlePrevClick = (event) =>{
        event.preventDefault()
        if (!isFirstPage) {
            onPageChange(currentPage - 1)
        }
    }

    const handlePageChange = (event, page) => {
        event.preventDefault()
        if (currentPage != page ) {
            onPageChange(page)
        }
    }

    const handleNextClick = (event) =>{
        event.preventDefault()
        if (!isLastPage) {
            onPageChange(currentPage + 1)
        }
    }

    console.log('🟢 Pagination renderizado', {
        currentPage,
        totalPages,
        timestamp: new Date().toLocaleTimeString(),
    })

    return (
        <nav className={styles.pagination}>
            <a href="#" style={styleLinkLeft} onClick={handlePrevClick}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
                </svg>
            </a>

            {pages.map(p => 
                <a
                key={p}
                href= "#"
                className={currentPage === p ? styles.isActive: ""}
                onClick={(event) => handlePageChange(event, p)}
                >
                    {p}
                </a>
            )}

            <a href="#" style={styleLinkRight} onClick={handleNextClick}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
                </svg>
            </a>
        </nav>
    )
}