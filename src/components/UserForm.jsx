import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const UserForm = ({ handlerAddUser, initialUserForm, userSelected }) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const { id, username, password, email } = userForm;

    useEffect(() => {
        setUserForm({ ...userSelected, password: '' });
    },
        [userSelected]);

    const onInputChange = ({ target }) => {
        //        console.log(target.name);
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        });
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || (!password && id === 0) || !email) {
            //Dialogo del navegador, sale un popup
            //alert('Please fill in all fields');
            Swal.fire({
                title: 'Error!',
                text: 'Por favor, completa todos los campos',
                icon: 'error'
            });
            return;
        }
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    }
    return (
        <>
            <form onSubmit={onSubmit}
                className="flex flex-col gap-2">
                <input
                    type="text"
                    className="py-2 px-3 w-full"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onInputChange} />
                {id > 0 || <input
                    type="password"
                    className="py-2 px-3 w-full"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onInputChange} />}
                <input
                    type="text"
                    className="py-2 px-3 w-full"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onInputChange} />
                <input type="hidden" name="id" value={id} />
                <button
                    className="py-2 px-3 w-full text-left"
                    type="submit">
                    {id > 0 ? 'Editar' : 'Crear'}
                </button>
                <button className="btn btn-primary mx-2"
                    type="button"
                    >
                    Cerrar
                </button>
            </form>
        </>
    )
}