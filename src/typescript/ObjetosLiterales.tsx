
interface Persona {
    nombreCompleto: string;
    edad: number,
    direccion: Direccion,
}

interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Julian',
        edad: 20,
        direccion: {
            pais: 'Canada',
            casaNo: 1234,
        },
    }

    return (
        <>
            <h4>Objetos Literales</h4>
            {/* { JSON.stringify(persona) } */}
            <code>
                <pre>
                    { JSON.stringify(persona, null, 2) }
                    {/* { JSON.stringify(persona, ['nombre'], 2) } */}
                </pre>
            </code>
        </>
    )
}
