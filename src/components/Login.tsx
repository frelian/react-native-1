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

type LoginPayload = {
    username: string;
    nombre: string;
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload };

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
        
        case 'login':
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'ABC123',
                nombre: nombre,
                username: username
            }
        default:
            return state;
    }
}

export const Login = () => {

    // const [state, dispatch] = useReducer(authReducer, initialState);
    // Como el state es un objeto de tipo AuthState, puedo des-estructurarlo
    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    console.log(validando, dispatch)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500);
    }, [])

    const login = () => {
        dispatch({ 
            type: 'login', 
            payload: {
                nombre: 'Julian',
                username: 'iamjulian'
            }
        })
    }

    const logout = () => { 
        dispatch({ type: 'logout' }) 
    }

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

            {
                ( token ) 
                    ? <div className="alert alert-success">Autenticado como: { nombre }</div>
                    : <div className="alert alert-danger">No autenticado</div>

            }

            {
                ( token )
                ? (
                    <button 
                        className="btn btn-light"
                        onClick={ logout }
                    >
                        {/*
                            Es lo mismo que hacer: onClick={ () => logout() } 
                        */}
                        Logout
                    </button>
                )
                : (
                    <button 
                        className="btn btn-primary"
                        onClick={ login }
                    >
                    Login
                    </button>
                )
            }
        </>
    )
}
