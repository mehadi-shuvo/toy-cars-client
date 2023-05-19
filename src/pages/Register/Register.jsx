import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";


const Register = () => {
    const {createUser, addNameAndPhoto} = useContext(AuthContext)

    const handleRegister = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            addNameAndPhoto(user, name, photo)
                .then().catch(error=>{
                    console.log(error.message);
                })
            console.log(user)
        })
        .catch(error=>{
            console.log(error.message);
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