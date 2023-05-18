import { Link } from "react-router-dom";


const Register = () => {

    const handelRegister = event =>{
        event.preventDefault()
    }
    return (
        <div className='w-2/5 mx-auto bg-red-500 mt-10 rounded-lg my-20'>
            <form onSubmit={handelRegister} className='flex gap-7 flex-col p-7'>
                <h4 className='text-center text-3xl font-extrabold text-white'>Register Now</h4>
                <input className='p-3 rounded-lg text-center' type="text"
                    placeholder='Your Name' />
                <input className='p-3 rounded-lg text-center' type="text"
                    placeholder='Your Photo URL' />
                <input className='p-3 rounded-lg text-center' type="email"
                    placeholder='Your Email' />
                <input className='p-3 rounded-lg text-center' type="password"
                    placeholder='Your Password' />
                <button type="submit" className='py-3 rounded-lg bg-red-700 hover:bg-red-800 font-semibold text-2xl text-white'>Register</button>
                <div>
                    <div className="divider text-white">OR</div>
                    <div>
                        <p className='text-center text-lg font-light text-white'>Already have an account? <Link to='/login' className='text-slate-900 underline'>Login</Link></p>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Register;