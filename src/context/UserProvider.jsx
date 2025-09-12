import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {
    const { users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUpdateSelectedUser,
        handlerCloseForm,
        handlerOpenForm
    } = useUsers();

    return (
        <UserContext.Provider value={{
            users,
            userSelected,
            initialUserForm,
            visibleForm,
            handlerAddUser,
            handlerRemoveUser,
            handlerUpdateSelectedUser,
            handlerCloseForm,
            handlerOpenForm
        }}>
            {children}
        </UserContext.Provider>
    )
}