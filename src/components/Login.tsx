import { useReducer } from 'react';

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

type AuthActionn = { type: 'logout' }

// Retorno una interfaz llamada AuthState
// Para que sea un reducer 
// Puede quedar pero no es recomendable: const authReducer = (): typeof initialState => {}
const authReducer = (state: AuthState, action: AuthActionn): AuthState => {
    
}

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState)

    return (
        <>
            <h3>Login</h3>
            <div className="alert alert-info">
                Validando...
            </div>

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
