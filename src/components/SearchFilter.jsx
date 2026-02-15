function SearchFilter({ name, id, titulo, options }) {
    return (
        <select name={name} id={id}>
            <option value="">{titulo}</option>
            {options && options.map(op => { // ← 1. Abrimos llave aquí
                
                if (typeof op === 'string') {
                    // 2. Agregamos 'return' explícito
                    return <option key={op} value={op.toLowerCase()}>{op}</option>
                } else {
                    // 3. Agregamos 'return' y ¡OJO! necesitamos una 'key' en el optgroup también
                    return (
                        <optgroup key={op.label} label={op.label}>
                            {op.options.map(opt => (
                                <option key={opt} value={opt.toLowerCase()}>{opt}</option>
                            ))}
                        </optgroup>
                    )
                }
            })}
        </select>
    )
}

export default SearchFilter