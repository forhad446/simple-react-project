import { Link } from "react-router-dom";

const User = ({user}) => {
    const {name,email,id} = user;
    console.log(user);
    return (
        <>
            <div className="container flex flex-col items-center justify-center w-9/12 mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
                <ul className="flex flex-col divide-y divide">
                    <li className="flex flex-row">
                        <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                            <div className="flex-1 pl-1 mr-16">
                                <div className="font-medium dark:text-white">
                                   Name : {name}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-200">
                                    E-Mail : {email}
                                </div>
                                <div className="font-medium p-4">
                                    <Link to={`/User/${id}`} className="bg-[#575050] text-[#FFF] p-3 rounded-md">
                                        Show Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    );
};

export default User;