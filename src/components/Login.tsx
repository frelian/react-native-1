import { useEffect, useReducer } from 'react';

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}


const initialState: AuthState = { 
    validando: true,
    token:  null,
    username: '',
    nombre: ''
}

type AuthAction = { type: 'logout' }

// Retorno una interfaz llamada AuthState
// Para que sea un reducer 
// Puede quedar pero no es recomendable: const authReducer = (): typeof initialState => {}
// El state (AuthState) es algo que no puede mutar
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch ( action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
    
        default:
            return state;
    }
}

export const Login = () => {

    // const [state, dispatch] = useReducer(authReducer, initialState);
    // Como el state es un objeto de tipo AuthState, puedo des-estructurarlo
    const [{ validando }, dispatch] = useReducer(authReducer, initialState);

    console.log(validando, dispatch)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500);
    }, [])

    if ( validando ) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando ...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>
   
            <div className="alert alert-danger">
                No autenticado
            </div>

            <div className="alert alert-success">
                Autenticado
            </div>

            <button 
                className="btn btn-primary"
            >
                Login
            </button>
            <button 
                className="btn btn-light"
            >
                Loout
            </button>
        </>
    )
}
