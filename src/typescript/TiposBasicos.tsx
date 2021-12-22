export const TiposBasicos = () => {

    // String
    const nombre: string = 'Julian';
    // Integer
    const edad: number = 30;
    // Boolean
    const estaActivo:boolean = false;
    // Array
    // let poderes = [2, 'Volar', 'Respirar en el agua'];
    // let poderes: boolean[] = [false, false, true];
    // let poderes: boolean[] = [false, false, true];
    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];


    return (
        <>
          <h3>Tipos básicos</h3>  
          { nombre }, { edad }, { (estaActivo) ? 'activo' : 'no activo' }
          <br />
          { poderes.join(', ') }
        </>
    )
}
