import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}
export const useAuth = () => {
    const [login, dispatch] = useReducer(loginReducer, initialLogin)
    const handlerLogin = ({ username, password }) => {
        const isLogin = loginUser({ username, password });
        if (isLogin) {
            dispatch({
                type: 'login',
                payload: { username: 'admin' },
            });
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user
            }));

        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Credenciales incorrectas',
                icon: 'error'
            })
        }

    }
    const handlerLogout = () => {
        dispatch({
            type: 'logout',
        });
        sessionStorage.removeItem('login');
    }
    return {
        login, 
        handlerLogin,
        handlerLogout,
    };
}
