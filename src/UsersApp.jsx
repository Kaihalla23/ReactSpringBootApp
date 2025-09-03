import { useReducer } from "react";
import { UserForm } from "./components/UserForm"
import { UsersList } from "./components/UsersList"
import { usersReducer } from "./reducers/usersReducer";


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


export const UsersApp = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    const handlerRemoveUser = (id) => {
        dispatch({
            type: 'removeUser',
            payload: id,
        })
    }

    const handlerAddUser = (newUser) => {
        dispatch({
            type: 'addUser',
            payload: newUser,
        })
    }

    return (
        <div className="m-4">
            <h2>Users App</h2>
            <div className="flex gap-4 min-w-[900px]">
                <div className="flex-1">
                    <UserForm handlerAddUser={handlerAddUser} />
                </div>
                <div className="flex-1">
                    <UsersList users={users}
                        handlerRemoveUser={handlerRemoveUser} />
                </div>
            </div>
        </div>
    )
}