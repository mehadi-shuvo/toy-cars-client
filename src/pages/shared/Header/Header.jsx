import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const name = user?.displayName;

    const handleLogOut = () => {
        logOut()
            .then().catch(error => {
                console.log(error.message);
            })
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>All Toys</Link></li>
        {
            user ? <>
                <li><Link to='/'>My Toys</Link></li>
                <li><Link to='/'>Add A Toys</Link></li>
            </> : ""
        }
        <li><Link to='/'>Blogs</Link></li>
    </>

    return (
        <div className="navbar w-4/5 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="font-bold text-xl">Toy<span className="text-red-500">Cars</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <img className="h-12 w-12 rounded-full" title={name} src={user?.photoURL} alt="" />
                        <button onClick={handleLogOut} className="ml-4 py-2 px-4 rounded-lg bg-red-500 hover:bg-red-800 font-bold text-lg text-white">Log Out</button>
                    </>
                        : <Link className="py-2 px-4 rounded-lg bg-red-500 hover:bg-red-800 font-bold text-lg text-white" to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;