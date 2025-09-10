import { UserForm } from "./components/UserForm"
import { UsersList } from "./components/UsersList"
import { useUsers } from "./hooks/useUsers";



export const UsersApp = () => {

    const { users, userSelected, initialUserForm, handlerAddUser, handlerRemoveUser, handlerUpdateSelectedUser, } = useUsers();


    return (
        <div className="m-4">
            <h2>Users App</h2>
            <div className="flex gap-4 min-w-[900px]">
                <div className="flex-1">
                    <UserForm handlerAddUser={handlerAddUser} initialUserForm={initialUserForm} userSelected={userSelected} />
                </div>
                <div className="flex-1">
                    <button className="btn btn-primary mb-2">
                        Nuevo Usuario
                    </button>
                    {users.length === 0
                        ? <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 text-center">No users</div>
                        : <UsersList users={users}
                            handlerRemoveUser={handlerRemoveUser} handlerUpdateSelectedUser={handlerUpdateSelectedUser} />}

                </div>
            </div>
        </div>
    )
}