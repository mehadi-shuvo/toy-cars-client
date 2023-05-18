import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const handelLogin = event => {
        event.preventDefault()
    }
    return (
        <div className='w-2/5 mx-auto bg-red-500 mt-10 rounded-lg my-20'>
            <form onSubmit={handelLogin} className='flex gap-7 flex-col p-7'>
                <h4 className='text-center text-3xl font-extrabold text-white'>Login</h4>
                <input className='p-3 rounded-lg text-center' type="email"
                    placeholder='Your Email' />
                <input className='p-3 rounded-lg text-center' type="password"
                    placeholder='Your Password' />
                <button type="submit" className='py-3 rounded-lg bg-red-700 hover:bg-red-800 font-semibold text-2xl text-white'>Login</button>
                <div>
                    <div className="divider text-white">OR</div>
                    <div>
                        <p className='text-center text-lg font-light text-white'>Do not have an account? <Link to='/register' className='text-slate-900 underline'>Create account</Link></p>
                    </div>
                    <div className='flex justify-around px-7 mt-3 pb-7'>
                        <button className='py-3 px-4 bg-slate-900 hover:bg-slate-800 font-semibold text-xl text-white rounded-lg flex items-center gap-3'><FcGoogle className="text-2xl block" /> <p>Login</p></button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Login;