import { useLoaderData } from "react-router-dom";
import Post from "./post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1>{posts.length}</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    posts.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;