import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: 'pepe',
        email: 'pepe@correo.com',
    },
    {
        id: 2,
        username: 'pepe',
        password: 'pepe',
        email: 'pepe@correo.com',
    },
];

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
}

export const useUsers = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    const [userSelected, setUserSelected] = useState(initialUserForm);

    const [visibleForm, setVisibleForm] = useState(false);

    const navigate = useNavigate();

    const handlerRemoveUser = (id) => {

        Swal.fire({
            title: '¿Estas seguro?',
            text: 'No podrás revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, bórralo!',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'removeUser',
                    payload: id,
                });
                Swal.fire(
                    'Borrado!',
                    'El usuario ha sido borrado.',
                    'success'
                )
            }
        });
    }

    const handlerAddUser = (newUser) => {
        let type = newUser.id === 0 ? 'addUser' : 'updateUser';
        dispatch({
            // seria type: type pero se puede simplificar porque se llama igual
            type,
            payload: newUser,
        });
        Swal.fire(
            (newUser.id === 0 ? 'Usuario Creado' : 'Usuario Actualizado'),
            (newUser.id === 0 ? 'El usuario se ha creado correctamente' : 'El usuario se ha actualizado correctamente'),
            'success'
        );
        handlerCloseForm();
        navigate('/users');
    }

    const handlerUpdateSelectedUser = (userSelected) => {
        // se pasa otra instancia diferente para que quede inmutable
        setUserSelected({ ...userSelected });
        setVisibleForm(true);
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }

    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUpdateSelectedUser,
        handlerOpenForm,
        handlerCloseForm,
    }
}