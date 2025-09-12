import { NavLink } from "react-router-dom"

export const UserRow = ({ id, username, email, handlerRemoveUser, handlerUpdateSelectedUser }) => {

    return (
        <tr className="hover:bg-gray-50">
            <td className="px-1 py-2">{id}</td>
            <td className="px-2 py-2">{username}</td>
            <td className="px-2 py-2">{email}</td>
            <td className="px-2 py-2">
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => handlerUpdateSelectedUser({ id, username, email })}
                >
                    Update
                </button>
            </td>
            <td className="px-2 py-2">
                <NavLink className={"focus:outline-none text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800"}
                    to={'/users/edit/' + id}>
                    update route
                </NavLink>
            </td>
            <td className="px-2 py-2">
                <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => handlerRemoveUser(id)}
                >
                    Remove
                </button>
            </td>
        </tr >
    )
}