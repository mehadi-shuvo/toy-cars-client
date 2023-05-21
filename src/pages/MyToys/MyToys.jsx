import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import MyToyData from "./MyToyData/MyToyData";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const MyToys = () => {
    useTitle('My Toys')
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:3000/my-toys?email=${user.email}&&sort=`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleDelete = id => {
        const process = confirm('Do you want to delete this toy?')
        const url = `http://localhost:3000/toys/${id}`;
        if (process) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingToy = toys.filter(toy => toy._id !== id)
                        setToys(remainingToy);
                        Swal.fire({
                            title: 'Deleted successfully',
                            icon: 'error',
                        })
                    }
                })
        }

    }

    const handleSortLow = () => {
        fetch(`http://localhost:3000/my-toys?email=${user.email}&&sort=low`)
            .then(res => res.json())
            .then(data => setToys(data))
    }
    const handleSortHigh = () => {
        fetch(`http://localhost:3000/my-toys?email=${user.email}&&sort=high`)
            .then(res => res.json())
            .then(data => setToys(data))
    }

    return (
        <div className="w-4/5 mx-auto">
            <div>
                <div>
                    <div className="dropdown dropdown-hover  border-none my-12">
                        <label tabIndex={0} className="btn m-1 bg-red-500 border-none">Sort by</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><button onClick={handleSortLow}>Low Price</button></li>
                            <li><button onClick={handleSortHigh}>High Price</button></li>
                        </ul>
                    </div>
                    
                    
                </div>

                <div className="overflow-x-auto w-full mb-12">
                    <table className="table w-full">
                        <thead >
                            <tr>
                                <th>Toy Info</th>
                                <th>Price & Quantity</th>
                                <th>Seller</th>
                                <th className="text-center">Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map(toy => <MyToyData key={toy._id}
                                    toy={toy}
                                    handleDelete={handleDelete}
                                ></MyToyData>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;