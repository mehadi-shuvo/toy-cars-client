import { Link } from "react-router-dom";
import './ErrorPage.css'


const ErrorPage = () => {
    return (
        <div className="w-4/5 mx-auto grid grid-cols-2 items-center">
            <img src="https://i.postimg.cc/CKFc8KRQ/error.png" alt="" />
            <div className="text-center">
            <h3 className="text-9xl font-extrabold text-red-500">404</h3>
            <p className="text-3xl font-semibold my-5">Page not found</p>
            <Link to='/' className="py-3 rounded-lg bg-red-500 hover:bg-red-600 px-5 font-semibold text-2xl text-white">Go To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;