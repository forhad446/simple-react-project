import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Opps!!</h1>
            {
                error.statusText
            }
        </div>
    );
};

export default ErrorPage;