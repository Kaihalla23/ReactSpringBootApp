import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList"
import { useUsers } from "../hooks/useUsers";



export const UsersPage = () => {

    const { users, userSelected, initialUserForm, visibleForm, handlerAddUser, handlerRemoveUser, handlerUpdateSelectedUser, handlerCloseForm, handlerOpenForm } = useUsers();


    return (
        <>
            {!visibleForm || <UserModalForm
                userSelected={userSelected}
                initialUserForm={initialUserForm}
                handlerAddUser={handlerAddUser}
                handlerCloseForm={handlerCloseForm}
            />

            }


            <div className="m-4">
                <h1>Users App</h1>
                <div className="flex gap-4 min-w-[900px]">
                    <div className="flex-1">
                        {visibleForm || <button className="bg-blue-600 py-2 px-4 rounded mb-2"
                            onClick={handlerOpenForm} >
                            Nuevo Usuario
                        </button>}
                        {users.length === 0
                            ? <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 text-center">No users</div>
                            : <UsersList users={users}
                                handlerRemoveUser={handlerRemoveUser} handlerUpdateSelectedUser={handlerUpdateSelectedUser} />}

                    </div>
                </div>
            </div>
        </>
    )
}