import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {

    const navigate = useNavigate();
const {postId} = useParams();
    console.log(postId)
    const goBackHandle = () => {
        navigate(-1)
    }
    const detailsPost = useLoaderData();
    const {title, body} = detailsPost;
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-screen-sm sm:text-center sm:mx-auto">
                    <a href="/" aria-label="View" className="inline-block mb-5 rounded-full sm:mx-auto">
                    </a>
                    <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        {title}
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg sm:px-4">
                        {body}
                    </p>
                    <hr className="w-full my-8 border-gray-300" />
                    <button onClick={goBackHandle}>Go back</button>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;