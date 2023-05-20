import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";


const Register = () => {
    const navigate = useNavigate()
    const {createUser, addNameAndPhoto} = useContext(AuthContext);
    const [errorText, setErrorText]=useState('')

    const handleRegister = (event)=>{
        event.preventDefault();
        setErrorText('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            setErrorText('')
            toast('Registration successfully complete')
            navigate('/' )
            addNameAndPhoto(user, name, photo)
                .then().catch(error=>{
                    setErrorText(error.message);

                })
        })
        .catch(error=>{
            setErrorText(error.message);
        })
        
    }
    return (
        <div className='w-2/5 mx-auto bg-red-500 mt-10 rounded-lg my-20'>
            <form onSubmit={handleRegister} className='flex gap-7 flex-col p-7'>
                <h4 className='text-center text-3xl font-extrabold text-white'>Register Now</h4>
                <input className='p-3 rounded-lg text-center' name="name" type="text"
                    placeholder='Your Name' required />
                <input className='p-3 rounded-lg text-center' name="photo" type="text"
                    placeholder='Your Photo URL' />
                <input className='p-3 rounded-lg text-center' name="email" type="email"
                    placeholder='Your Email' required />
                <input className='p-3 rounded-lg text-center' name="password" type="password"
                    placeholder='Your Password' required />

                    {
                        errorText? <p className="text-white text-lg font-bold">{errorText}</p>: ''
                    }
                <button type="submit" className='py-3 rounded-lg bg-red-700 hover:bg-red-800 font-semibold text-2xl text-white'>Register</button>
        
            </form>
            <div className="px-7 pb-7">
                    <div className="divider text-white">OR</div>
                    <div>
                        <p className='text-center text-lg font-light text-white'>Already have an account? <Link to='/login' className='text-slate-900 underline'>Login</Link></p>
                    </div>
                </div>
            <Toaster />
        </div>
    );
};

export default Register;