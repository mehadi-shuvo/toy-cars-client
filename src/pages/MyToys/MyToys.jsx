import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import MyToyData from "./MyToyData/MyToyData";


const MyToys = () => {
    const [toys, setToys] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        fetch(`http://localhost:3000/my-toys?email=${user.email}`)
        .then(res=>res.json())
        .then(data=> setToys(data))
    },[])
    return (
        <div className="w-4/5 mx-auto">
            <div>
                <div className="overflow-x-auto w-full my-12">
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