import { UserForm } from "./UserForm"

export const UserModalForm = ({userSelected, initialUserForm, handlerAddUser, handlerCloseForm }) => {
    return (
                    <div className="abrir-modal animacion fadeIn fixed top-0 left-0 w-full items-start h-full z-50 flex justify-center">
                        <div className="bg-white rounded-lg shadow-lg w-full max-w-md mt-20">
                            <div className="flex flex-col border-b px-6 py-4">
                                <h5 className="text-lg font-bold">
                                    {userSelected.id === 0 ? 'New User' : 'Update User'} Modal Usuarios
                                </h5>
                            </div>
                            <div className="p-6">
                                <UserForm
                                    handlerAddUser={handlerAddUser}
                                    initialUserForm={initialUserForm}
                                    userSelected={userSelected}
                                    handlerCloseForm={handlerCloseForm} />
                            </div>
                        </div>
                    </div>
    )
}