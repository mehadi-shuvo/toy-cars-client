import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";


const Login = () => {
    const [errorText, setErrorText] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const GoogleProvider = new GoogleAuthProvider();
    const { login, LoginGoogle } = useContext(AuthContext)
    const from = location?.state?.from?.pathname || '/';

    const handelLogin = event => {
        event.preventDefault()
        setErrorText('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                setErrorText('')
                toast('Welcome! Login successfully')
                navigate(from)
            })
            .catch(error => {
              setErrorText(error.message);
            })
    }

    const handleGoogleLogin = () => {
        LoginGoogle(GoogleProvider)
            .then(result => {
                const GoogleLogin = result.user;
                setErrorText('')
                toast('Welcome! Login successfully')
                navigate(from)
            })
            .catch(error => {
                setErrorText(error.message)
            })
    }
    return (
        <div className='w-2/5 mx-auto bg-red-500 mt-10 rounded-lg my-20'>
            <Toaster></Toaster>
            <form onSubmit={handelLogin} className='flex gap-7 flex-col p-7'>
                <h4 className='text-center text-3xl font-extrabold text-white'>Login</h4>
                <input className='p-3 rounded-lg text-center' name="email" type="email"
                    placeholder='Your Email' required />
                <input className='p-3 rounded-lg text-center' name="password" type="password"
                    placeholder='Your Password' required />
                    {
                        errorText? <p className="text-white text-lg font-bold">{errorText}</p>: ''
                    }
                <button type="submit" className='py-3 rounded-lg bg-red-700 hover:bg-red-800 font-semibold text-2xl text-white'>Login</button>
            </form>
            <div>
                <div className="divider text-white">OR</div>
                <div>
                    <p className='text-center text-lg font-light text-white'>Do not have an account? <Link to='/register' className='text-slate-900 underline'>Create account</Link></p>
                </div>
                <div className='flex justify-around px-7 mt-3 pb-7'>
                    <button onClick={handleGoogleLogin} className='py-3 px-4 bg-slate-900 hover:bg-slate-800 font-semibold text-xl text-white rounded-lg flex items-center gap-3'><FcGoogle className="text-2xl block" /> <p>Login</p></button>
                </div>
            </div>
        </div>
    );
};

export default Login;