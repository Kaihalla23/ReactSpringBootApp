import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/layout/Navbar"
import { UsersPage } from "../pages/UsersPage"
import { RegisterPage } from "../auth/pages/RegisterPage"
import { useUsers } from "../hooks/useUsers"
import { UserProvider } from "../context/UserProvider"

export const UserRoutes = ({ login, handlerLogout }) => {

    return (
        <>
            <UserProvider>
                <Navbar login={login} handlerLogout={handlerLogout} />
                <Routes>
                    <Route path="users" element={<UsersPage
                        users={users}
                        userSelected={userSelected}
                        initialUserForm={initialUserForm}
                        visibleForm={visibleForm}
                        handlerAddUser={handlerAddUser}
                        handlerRemoveUser={handlerRemoveUser}
                        handlerUpdateSelectedUser={handlerUpdateSelectedUser}
                        handlerCloseForm={handlerCloseForm}
                        handlerOpenForm={handlerOpenForm} />} />
                    <Route path="users/register" element={<RegisterPage />} />
                    <Route path="/" element={<Navigate to="/users" />} />
                    <Route path="users/edit/:id" element={<RegisterPage />} />
                </Routes>
            </UserProvider>
        </>
    )
}