export const Functiones = () => {

    const sumar = (a: number, b: number): number => {
        return a + b;
    }

    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado es { sumar(5, 20) }</span>
        </>
    )
}
