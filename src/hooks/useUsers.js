import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";


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
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }

    const handlerUpdateSelectedUser = (userSelected) => {
        // se pasa otra instancia diferente para que quede inmutable
        setUserSelected({ ...userSelected });
        setVisibleForm(true);
    }

    return {
        users, userSelected, initialUserForm, handlerAddUser, handlerRemoveUser, handlerUpdateSelectedUser,
    }
}