import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { title, body, id} = post;
    return (
        <div>

            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <Link to={`/post/${id}`} className="block w-full h-full">
                    <div className="w-full p-4 bg-white dark:bg-gray-800">
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            {`${title.slice(0, 30)}`}
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                            {`${body.slice(0, 80)}...`}
                        </p>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default Post;