import { useContext, useEffect, useState } from "react"
import { UserForm } from "../../components/UserForm";
import { NavLink, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

//Se inicializa users com array para que en caso de que no se pase ningun users
//se cree un array vacio, si no seria undefined
export const RegisterPage = () => {
    const { users=[], initialUserForm } = useContext(UserContext);

    const [userSelected, setUserSelected] = useState(initialUserForm);
    //Este id tiene que llamarse igual que la varibale de la ruta /users/edit/:id
    const{ id } = useParams();
    useEffect(() => {
        const user = users.find(u => u.id == id ) || initialUserForm;
        setUserSelected(user); 
    }, [id])
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Register Form
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            {userSelected.id > 0 ? 'Edit User' : 'Register New User'}
                        </h1>
                        <UserForm
                            userSelected={userSelected}
                        />
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <NavLink to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}