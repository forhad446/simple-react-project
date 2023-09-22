import { useLoaderData } from "react-router-dom";
import User from "./user";

const Users = () => {
    const users = useLoaderData();
    return (
        <div className="text-2xl font-medium">
            <h1>Total User: {users.length}</h1>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;