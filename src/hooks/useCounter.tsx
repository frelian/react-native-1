import { useState } from 'react';

// Si no llega el parametro integer inicial, inicializo en 10
export const useCounter = ( inicial: number = 10 ) => {

    const [valor, setValor] = useState(inicial);

    const acumular = ( numero: number) => {
        setValor( valor + numero );
    }

    return {
        valor,
        acumular,
    }
    /* 
        Antes de ES6
            return {
                valor: valor,
                acumular: acumular,
            }
    */
}
