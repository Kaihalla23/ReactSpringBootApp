import { UserRow } from "./UserRow"

export const UsersList = ({ users = [], handlerRemoveUser , handlerUpdateSelectedUser }) => {
    return (

        <table className="w-full text-left min-w-[600px]">
            <thead className="bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-1 py-1 uppercase bg-gray-200 min-w-[40px]">
                        #</th>
                    <th scope="col" className="px-2 py-1 uppercase bg-gray-200 min-w-[180px]">
                        Username</th>
                    <th scope="col" className="px-2 py-1 uppercase bg-gray-200 min-w-[180px]">
                        Email</th>
                    <th scope="col" className="px-2 py-1 uppercase bg-gray-200 min-w-[120px]">
                        update</th>
                    <th scope="col" className="px-2 py-1 uppercase bg-gray-200 min-w-[120px]">
                        remove</th>
                </tr>
            </thead>
            <tbody className="">
                {
                    users.map(({ id, username, email}) => (
                        <UserRow
                            key={id}
                            id={id}
                            username={username}
                            email={email}
                            handlerRemoveUser={handlerRemoveUser}
                            handlerUpdateSelectedUser={handlerUpdateSelectedUser} />
                    ))
                }
            </tbody>
        </table>


    )
}