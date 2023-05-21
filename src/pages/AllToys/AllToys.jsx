import { useEffect, useState } from "react";
import ToyData from "./ToyData";


const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [showFullData, setShowFullData] = useState(false);

    useEffect(() => {
        const limit = showFullData ? null : 3;
        fetch(`http://localhost:3000/toys?limit=${limit}`)
            .then(res => res.json())
            .then(data => setToys(data))

    }, [showFullData]);

    const handleLoadMore = () => {
        setShowFullData(true);
    };
    const handleSearch = event =>{
        event.preventDefault()
        const search = event.target.search.value;
        fetch(`http://localhost:3000/search?name=${search}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
        .catch(error=>console.log(error))
    }

    return (
        <div className="w-4/5 mx-auto">
            <div>
                <form onSubmit={handleSearch} className="flex justify-center items-center w-1/2 mx-auto gap-6 mt-10">
                    <input name="search" type="text" placeholder="Type here" className="input w-full bg-red-50" />
                    <button className="py-2 rounded-lg bg-red-500 hover:bg-red-800 font-semibold text-lg uppercase px-4 text-white">Search</button>
                </form>
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
                                toys.map(toy => <ToyData key={toy._id}
                                    toy={toy}
                                ></ToyData>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>

            <div className="flex justify-center my-8">
                {
                    showFullData ? ''
                        : <button className="w-1/4 mx-auto py-3 rounded-lg bg-red-500 hover:bg-red-800 font-semibold text-lg uppercase px-4 text-white" onClick={handleLoadMore}>load more</button>
                }
            </div>
        </div>
    );
};

export default AllToys;