export function Link({href, children, ...props}) {
    const handleClick = (e) => {
        e.preventDefault()
        
        window.history.pushState({}, '', href)

        const navigationEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navigationEvent)
    }
    
    return (
        <a href={href} onClick={handleClick} {...props}>
            {children}
        </a>
    )
}