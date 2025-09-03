import { useState } from "react";

export const UserForm = ({handlerAddUser}) => {


    const initialUserForm = {
        username: '',
        password: '',
        email: '',
    }
    const [userForm, setUserForm] = useState(initialUserForm);

    const { username, password, email } = userForm;

    const onInputChange = ({ target }) => {
        //        console.log(target.name);
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        });
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        if(!username || !password || !email){
            //Dialogo del navegador, sale un popup
            alert('Please fill in all fields');
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
                <input
                    type="password"
                    className="py-2 px-3 w-full"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onInputChange} />
                <input
                    type="text"
                    className="py-2 px-3 w-full"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onInputChange} />
                <button
                    className="py-2 px-3 w-full text-left"
                    type="submit">Crear</button>
            </form>
        </>
    )
}